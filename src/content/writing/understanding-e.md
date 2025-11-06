---
date: 2025-11-06
---
As I've delved deeper this semester into the realm of computer engineering with courses such as Microelectronics, Signals & Systems and Electromagnetism & Waves,  I have come to understand the immense relevance of imaginary numbers, and, along with it, the power of $e$. 

This article is primarily an attempt on my part to breakdown my knowledge of $e^x$ and its applications, with the hopes that it will aid me in my coursework. 

## Euler's Formula 

### $e^{i\pi} -1 = 0$

A beautiful equation indeed. But given my inquisitive nature I could not accept it without grasping the foundation from which it is derived. 

I was able to reach a satisfactory answer by returning to Calc III, specifically the notion of power series and MacLaurin Series.

Recall:

$e^x = 1 + x + \frac{x^2}{2!}+\frac{x^3}{3!}+...$

And,

$cos(x) = 1 - \frac{x^2}{2!}+\frac{x^4}{4!}-...$

$sin(x) = x - \frac{x^3}{3!}+\frac{x^5}{5!}-...$

Now, instead of $e^x$, take $e^{ix}$

$e^{ix} = 1 + ix + \frac{(ix)^2}{2!}+\frac{(ix)^3}{3!}+...$

$i^0=1, i^1=i, i^2=-1, i^3=-1, ...$

Thus, 

$e^{ix}=1+ix-\frac{x^2}{2!}-i\frac{x^3}{3!}+\frac{x^4}{4!}+i\frac{x^5}{5!}+...$

Separate the imaginary from the real components:

$e^{ix}=(1-\frac{x^2}{2!}+\frac{x^4}{4!}-...) + i(x - \frac{x^3}{3!}+\frac{x^5}{5!}-...)$

Sub in $cos(x)$ and $sin(x)$ for their MacLaurin Series:

$e^{ix} = cos(x) + isin(x)$

Wonderful.

____

From this we can also find equations for $cos(x)$ and $sin(x)$ in relation to $e^{ix}$, by remembering that:

$cos(x)$ is **even**, therefore $cos(x)=cos(-x)$

$sin(x)$ is **odd**, therefore $sin(x)=-sin(-x)$

$e^{ix} = cos(x) + isin(x)$

$e^{-ix} = cos(-x) + isin(-x) = cos(x) - isin(x)$

Add the two together,

$e^{ix} + e^{-ix} = 2cos(x)$

$cos(x)= \frac{e^{ix} + e^{-ix}}{2}$

Subtract one from the other,

$e^{ix} - e^{-ix} = 2isin(x)$

$sin(x)= \frac{e^{ix} - e^{-ix}}{2i}$


### The Unit Circle

Take the imaginary plane, with a horizontal, real axis and a vertical imaginary axis. Each number on this plane is in the form $c=a+ib$, where $a$ is the real component and $ib$ is the imaginary component.  

Drawing a unit circele in this plane, i.e. a circle with radius 1, with and angle $\theta$ that varies from $0$ to $2\pi$, it is clear how every point on the circumference of that circle can be modeled as the complex number $cos(\theta)+isin(\theta)$, which from our formula, we know is equal to $e^{i\theta}$.

If we wanted to plot onto a circle with a smaller or larger radius, we could multiply $e^{i\theta}$ by a modulus, i.e. a constant. 





