---
title: "Portfolio Optimization Model"
description: "How we built a cross-sectional equity return prediction pipeline during the FIAM hackathon."
date: 2024-03-18
techStack:
  - Python
  - XGBoost
  - SQL
  - Jupyter Notebook
  - Scikit-Learn
  - DuckDB
repoLink: "https://github.com/Gui-Oba/FIAM-FINAL/tree/main"
mediaType: image
mediaSrc: 
---

## Pro Tip: If you're looking for a greatly accelerated learning experience in a fast-paced, large-scale development setting, enter an asset management hackathon with limited finance knowledge and minimal experience with ML models. 


## Overview
The FIAM 2025 Asset Management Hackathon tasked its participants with one simple goal—to design an investment strategy that leverages ML and LLMS to: 

1. **Identify** which stock-level factors are most predictive of future returns.
2. **Construct** a global equity portfolio that balances long and short positions.
3. **Evaluate** performance through rigorous backtesting.
4. **Demonstrate** predictive power using strictly out-of-sample tests. 

[Goyenko et al., 2025]

At first this appeared to us quite straightforward, but we quickly ran into hurdles once we started working with the data. Different approaches would require working with different elements of the data, and so our first challenge was a planning one. 

### Challenge 0: Learning the environment
This consisted of becoming familiar with the tools and routines of working with ML algorithms. I took a quick lesson on how to use Jupyter Notebook from my teammate who had previously used it in his physics courses. I also became quite the Kaggle fanatic over the course of the hackathon, making use of their GPUs to run many test iterations. Other tools new to me included PyArrow, DuckDB, some simple SQL and quintessential libraries like scikit-learn. 

### Challenge 1:  Feature Selection
We were supplied with multiple datasets, holding a variety of potential features such as global equities from 28 countries, over 140 firm characteristics drawn from decades of financial research, and corporate filings with MD&A and Risk Factor sections. All in all, this amounted to around 30GB of machine-readable text. Simply downloading all these files onto my computer and managing my storage throughout the hackathon proved to be a challenge. 

We had to make some choices. We decided to focus on global markets instead of narrowing it down to one region, because we were willing to trade sharper insights for performance and robustness. Next, we considered predicting fundamentals (e.g. EBIT-to-Sales, operating margins, ROA) given that they're less volatile than returns, but chose to predict stock return directly since it was the most straightforward approach, and we didn't have much knowledge of finance fundamentals to be able to wisely apply them.

Having narrowed down our scope, we still had 10GB's worth of firm characteristic data to feed into our future model, in the form of a CSV file with 150M+ rows. In reality, we didn't have to use all the 147 firm characteristics in our prediction model; if anything, characteristics which had a lot of null values, or that correlated highly with other characteristics, would only add noise to the process, and so could be eliminated from feature selection. I decided to write a program that took in the original csv and ran a gradient boosting model to pick out the most relevant and predictive features. The script (feature_select.py) loads panel financial data, removes redundant features using pairwise correlation filtering, then evaluates remaining features by their rank information coefficient (Spearman correlation with future returns) across rolling time windows. It employs an XGBoost Regressor (leveraging GPU acceleration) to rank features based on their "gain importance" in a predictive model. Features are further stress-tested for stability over time, and only those that consistently show predictive signals are kept. The output is a final, reduced feature set along with diagnostics showing how often each feature survives the selection process.

### Challenge 2: Data Preprocessing
With all our features selected, we could get into data preprocessing, i.e. preparing the data we would feed into our model. Using DuckDB, we parquetized the main csv file, partitioning it by year and month, and only pulling the features selected by our feature selection algorithm (parquetization.py). Then, the preprocess_parquets.py script standardizes and cleans monthly stock return datasets to prepare them for machine learning workflows. It iterates through the partitioned directory structure to load monthly dataframes, ensuring that each row contains essential identifiers and consistent year-month keys. To improve data quality, the script replaces infinite values with NaNs and applies cross-sectional winsorization, clipping features at the 1st and 99th percentiles based on naming hints such as returns, ratios, or growth metrics. Furthermore, it applies hard clips (between -1.0 and 3.0) to return-related columns and drops any rows missing the target variable, stock_ret. Finally, the script enforces a uniform schema by casting identifiers to strings or integers and all numeric features to 32-bit floats before saving the processed files back into a partitioned parquet format. 

In other words, it removes rows with too extreme values, as this could bias the data. It also ensures all values are readable and proper for the model, and importantly, that the stock return value actually exists. 

### Challenge 3: Predicting Returns
This was the core process of our pipeline. The model.py script executes an expanding-window machine learning pipeline to predict monthly stock returns, strictly following the Gu et al. (2020) framework required for the McGill-FIAM hackathon.

**Workflow & Design Decisions**
- **Expanding Window Validation**: The model uses an 8-year training, 2-year validation, and 1-year testing cycle that expands annually. This ensures the model adapts to changing market regimes while preventing "look-ahead bias" by only using data available at the time of prediction.
- **Feature Scaling & Ranking**: Within each month, features are cross-sectionally ranked and scaled between -1.0 and 1.0. This removes outliers and addresses "feature drift," where the absolute values of financial ratios change over decades, but their relative rank remains predictive.
- **Principal Component Analysis (PCA)**: The script applies PCA to retain 95% of feature variance.
This handles the "curse of dimensionality" from having 140+ signals, reducing noise and collinearity that could otherwise destabilize linear models.
- **Dual-Model Comparison**: It trains both XGBoost (non-linear) and Ridge (linear) models. Comparing these allowed us to determine if stock returns are driven by complex interactions (XGBoost) or simple linear relationships (Ridge), as suggested in the instructions.
- **OOS $R^2$ Evaluation**: Performance is measured against a benchmark of zero predictability. This is the industry standard for quantitative finance because a historical mean is often an unreliable and poor-performing benchmark.

### Challenge 4: Portfolio Optimization
Finally, came the time to translate our stock returns into real portfolios. This script acts as a testing ground for a stock-trading strategy to see if a specific signal (like a price prediction) can actually make money in the real world. It works by ranking stocks from best to worst each month, "buying" the top group and "selling" the bottom group to create a balanced portfolio. To make the results realistic, we designed the script to be "causal," meaning it never looks at future data to make decisions; it only knows what was happening at that exact moment in history.

Now, for the results. The results of this strategy were compelling: the portfolio achieved an annualized geometric return of 24% against a volatility of 12%, resulting in a highly efficient Sharpe Ratio of 1.87. After adjusting for market risk, the strategy delivered a substantial monthly CAPM Alpha of +2.38% ($t$-stat = 7.30), which scales to an impressive 28.6% annualized alpha, demonstrating significant predictive power that cannot be explained by market movements alone. All in all, we considered our model succesful. 

### Failed Attempts
We experimented with sentiment analysis by applying the FinBERT-Tone model to classify financial text into positive, negative or neutral categories. However, when we added this sentiment feature to our stock return predictions, it reduced model performance, lowering the R^2. The sentiment signal proved too noisy and inconsistent to improve predictive power, so we ultimately removed it. A promising next step would be to test a more advanced LLM, such as DeepSeek-R1 or ChatGPT-o1, which could generate richer, context-aware sentiment features and enhance target-level prediction accuracy.

## Conclusion
Looking back, the most significant takeaway from the FIAM Hackathon wasn't the code itself, but the bridge we built between engineering and intuition. When we started, the project was a daunting logistical mountain—navigating 30GB of raw data, learning the nuances of Jupyter Notebooks on the fly, and wrestling with GPU limits on Kaggle. It was an intense, high-stakes environment. However, as the nights grew longer, the focus shifted from just making the scripts run to understanding why they mattered. I learned a lot from this experience, about the importance of documentation and version control, of communication well with others and of planning ahead correctly in order to avoid dead-ends. My understanding of ML had definitely deepened. I recognize now how crucial it is to feed quality data into your model, and the effects of hyperparameter tuning. Overall, despite many failures and drawbacks, I am happy with the product with ended with. I look forward to working with more AI/ML related concepts in the future. 

---

*Disclaimer: All em-dashes in this article were used intentationally and humanly*

---

### References:
Goyenko, Russ, and Chengyu Zhang. 2025. "McGill-FIAM Asset Management Hackathon Instructions: Applications of AI and Machine Learning in Portfolio Management." Montreal: McGill University, Desautels Faculty of Management.