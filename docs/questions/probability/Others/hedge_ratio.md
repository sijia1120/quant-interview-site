---
id: hedge_ratio
title: Optimal hedge ratio
sidebar_label: Optimal hedge ratio
difficulty: easy
source: Red Book, Green Book
topics: [ ]
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> You just bought one share of stock A and want to hedge it by shorting stock B. How many shares of B should you short to minimize the variance of the hedged position? Assume that the variance of stock A's return is oh; the variance of B's return is oz; their correlation coefficient is $\rho$.</p> 


Consider a portfolio with return: $R_p = r_A - h r_B$

The variance of the portfolio is $ \sigma_p^2 = \sigma_A^2 + h^2 \sigma_B^2 - 2h \sigma_A \sigma_B \rho $ 

We want to minimize the portfolio variance $\sigma_p^2$ with respect to $h$. Take the first derivative:

$$
\frac{d\sigma_p^2}{dh} = 2h \sigma_B^2 - 2 \sigma_A \sigma_B \rho
$$

Set the derivative to zero:

$$
2h \sigma_B^2 - 2 \sigma_A \sigma_B \rho = 0
\quad \Rightarrow \quad
h = \rho \cdot \frac{\sigma_A}{\sigma_B}
$$

This value of $h$ minimizes the variance. To confirm it's a **minimum**, check the second derivative:

$$
\frac{d^2 \sigma_p^2}{dh^2} = 2 \sigma_B^2 > 0
$$

Since the second derivative is positive, this critical point is indeed a minimum.
