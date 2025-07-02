---
id: order_statistics
title: Order Statistics
sidebar_label: Order Statistics
difficulty: easy
source: Red Book
topics: []
tags: []
---


#### 📖 : Let $X_1, X_2, \dots, X_n$ be **independent and identically distributed (i.i.d.)** random variables with cumulative distribution function (CDF) $F(x)$ and probability density function (PDF) $f(x)$. 
#### - Minimum: $Y_n = \min(X_1, X_2, \dots, X_n)$
#### - Maximum: $Z_n = \max(X_1, X_2, \dots, X_n)$

---

#### ✅ 1. CDF and PDF of the Maximum $Z_n = \max(X_1, \dots, X_n)$

CDF: The event $\{Z_n \leq x\}$ means **all** variables are $\leq x$:

$$
F_{Z_n}(x) = P(Z_n \leq x) = P(X_1 \leq x, \dots, X_n \leq x) = [F(x)]^n
$$

PDF: Differentiate the CDF:

$$
f_{Z_n}(x) = \frac{d}{dx} F_{Z_n}(x) = n f(x) [F(x)]^{n - 1}
$$

&nbsp;

#### ✅ 2. CDF and PDF of the Minimum $Y_n = \min(X_1, \dots, X_n)$

CDF: The event $\{Y_n > x\}$ means **all** variables are $> x$:

$$
P(Y_n > x) = P(X_1 > x, \dots, X_n > x) = [1 - F(x)]^n
$$

So:

$$
F_{Y_n}(x) = 1 - [1 - F(x)]^n
$$

PDF: Differentiate the CDF:

$$
f_{Y_n}(x) = \frac{d}{dx} F_{Y_n}(x) = n f(x) [1 - F(x)]^{n - 1}
$$



#### 🎯 Summary Table

| Statistic | CDF | PDF |
|----------|-----|-----|
| $Z_n = \max(X_i)$ | $F_{Z_n}(x) = [F(x)]^n$ | $f_{Z_n}(x) = n f(x) [F(x)]^{n - 1}$ |
| $Y_n = \min(X_i)$ | $F_{Y_n}(x) = 1 - [1 - F(x)]^n$ | $f_{Y_n}(x) = n f(x) [1 - F(x)]^{n - 1}$ |

---

### 🧠 Intuition

- The **maximum** is more likely to be larger → its CDF grows **faster**.
- The **minimum** is more likely to be smaller → its CDF grows **slower**.

These results are widely used in:
- Reliability analysis
- Order statistics
- Extreme value theory
- Quantitative finance (e.g. first-passage or drawdown problems)