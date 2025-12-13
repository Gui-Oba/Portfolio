---
title: "Investment Model"
description: "Cross-sectional equity return prediction pipeline built during the FIAM hackathon."
date: 2024-03-18
techStack:
  - Python
  - DuckDB
  - XGBoost
  - Jupyter Notebook
repoLink: "https://github.com/Gui-Oba/FIAM-model-A"
mediaType: image
mediaSrc: 
---

## Overview

During FIAM we set out to design an opinionated research workflow that could take in alternative data, engineer predictive features, and evaluate portfolio construction rules on the fly.

The end result is a modular pipeline:

- **Acquisition** via DuckDB + Python scripts to hydrate the research notebook.
- **Feature factory** that featurizes rolling statistics, factor exposures, and alternative data signals.
- **Model stage** built on XGBoost with a focus on interpretability and quick iteration loops.
- **Backtesting harness** to play with position sizing and risk budgeting.

## Key learnings

1. DuckDB shines when the feature space starts to balloon.
2. Spending time on visualization hooks pays off—stakeholders could actually react to the outputs in real time.
3. Model hygiene matters; we kept everything reproducible with parameter logging and notebook checkpoints.

## What's next

We're currently experimenting with hybrid gradient + linear models to capture regime shifts, and a cloud-ready deployment so the models can run nightly.
