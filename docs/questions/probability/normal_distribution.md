---
id: normal_distribution
title: Moments of Normal Distribution
sidebar_label: Moments of Normal Distribution
difficulty: easy
source: Red Book, Green Book
topics: [ ]
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> If X follows standard normal distribution (X ~ N(0, 1) ), what is $E[X^n]$ for n = 1, 2, 3 and 4</p> 


The first four raw moments of the standard normal distribution correspond to:

| Order  n  | Moment $\mathbb{E}[X^n] $ | Interpretation     |
|---------------|-------------------------------|---------------------|
| 1             | 0                             | Mean                |
| 2             | 1                             | Variance (σ² = 1)   |
| 3             | 0                             | Skewness (symmetric)|
| 4             | 3                             | Kurtosis            |

The probability density function (pdf) of $X \sim N(0,1)$ is:

$$
f_X(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}
$$

Because the standard normal distribution is symmetric around 0:

- $\mathbb{E}[X^n] = 0$ when $n$ is odd   ⇒ All odd moments vanish due to symmetry. So $\mathbb{E}[X^1] = 0$; $\mathbb{E}[X^3] = 0$. 


For even moments, we can use integration (or MGF) to compute: Example for $n = 2$: $\mathbb{E}[X^2] = \int_{-\infty}^{\infty} x^2 f_X(x) dx = 1$. MGF of $X \sim N(0,1)$ is:

$$
M_X(t) = \mathbb{E}[e^{tX}] = \int_{-\infty}^{\infty} e^{tx} \frac{1}{\sqrt{2\pi}} e^{-x^2/2} dx = \int_{-\infty}^{\infty}  \frac{1}{\sqrt{2\pi}} e^{-(x-t)^2/2} dx = e^{t^2/2}
$$

To compute $\mathbb{E}[X^n]$, take the $n$-th derivative of $M(t)$ and evaluate at $t = 0$:

- $M'(t) = t e^{t^2/2} \Rightarrow M'(0) = 0 = \mathbb{E}[X]$
- $M''(t) = (1 + t^2) e^{t^2/2} \Rightarrow M''(0) = 1 = \mathbb{E}[X^2]$
- $M^{(3)}(t) = (3t + t^3) e^{t^2/2} \Rightarrow M^{(3)}(0) = 0 = \mathbb{E}[X^3]$
- $M^{(4)}(t) = (3 + 6t^2 + t^4) e^{t^2/2} \Rightarrow M^{(4)}(0) = 3 = \mathbb{E}[X^4]$

$$
\begin{aligned}
\mathbb{E}[X^1] &= 0 \\
\mathbb{E}[X^2] &= 1 \\
\mathbb{E}[X^3] &= 0 \\
\mathbb{E}[X^4] &= 3
\end{aligned}
$$

This shows the power of MGF: once you know it, you can systematically derive any moment.


