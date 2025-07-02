---
id: moment_generating_function
title: Moment Generating Function（MGF）
sidebar_label: Moment Generating Function
difficulty: easy
source: Red Book
topics: []
tags: []
---

#### 📌 What Is a Moment Generating Function?

The **moment generating function (MGF)** of a random variable \( X \) is defined as:

$$
M_X(t) = \mathbb{E}[e^{tX}]
$$

- For **discrete** variables:  $M_X(t) = \sum_x e^{tx} P(X = x)$
- For **continuous** variables:  $M_X(t) = \int_{-\infty}^{\infty} e^{tx} f_X(x) \, dx$

---

#### 🧠 Why Is It Called "Moment Generating"?

Because it **generates moments** of the distribution!  
The $n$-th derivative of the MGF evaluated at $t = 0$ gives the $n$-th raw moment:

$$
M_X^{(n)}(0) = \mathbb{E}[X^n]
$$

- $ M'(0) = \mathbb{E}[X] $: the mean  
- $ M''(0) = \mathbb{E}[X^2] $: second moment  
- $ M^{(3)}(0) = \mathbb{E}[X^3] $: third moment, etc.

---

#### 📐 Deriving the MGF of Standard Normal Distribution

Let $ X \sim N(0, 1) $. Its probability density function is:

$$
f_X(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}
$$

We compute its MGF:

$$
M_X(t) = \mathbb{E}[e^{tX}] = \int_{-\infty}^\infty e^{tx} \cdot \frac{1}{\sqrt{2\pi}} e^{-x^2/2} \, dx
$$

---

### 🔄 Combine exponent terms

$$
e^{tx - \frac{x^2}{2}} = e^{-\frac{1}{2}(x^2 - 2tx)} = e^{-\frac{1}{2}(x - t)^2 + \frac{t^2}{2}}
$$

So the integral becomes:

$$
M_X(t) = \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}(x - t)^2 + \frac{t^2}{2}} dx
= e^{t^2/2} \int_{-\infty}^{\infty} \frac{1}{\sqrt{2\pi}} e^{-\frac{1}{2}(x - t)^2} dx
$$

The second integral equals 1 (it's a normal density), so:

$$
\boxed{M_X(t) = e^{t^2 / 2}}
$$

---

## 🧮 Deriving Moments Using MGF

- First moment: $M_X'(t) = t e^{t^2/2} \Rightarrow M_X'(0) = 0 = \mathbb{E}[X]$

- Second moment: $M_X''(t) = (1 + t^2) e^{t^2/2} \Rightarrow M_X''(0) = 1 = \mathbb{E}[X^2]$

- Third moment: $M_X^{(3)}(t) = (3t + t^3) e^{t^2/2} \Rightarrow M_X^{(3)}(0) = 0 = \mathbb{E}[X^3]$

- Fourth moment: $M_X^{(4)}(t) = (3 + 6t^2 + t^4) e^{t^2/2} \Rightarrow M_X^{(4)}(0) = 3 = \mathbb{E}[X^4] $
