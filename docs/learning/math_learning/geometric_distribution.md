---
id: geometric-distribution
title: Geometric Distribution
sidebar_label: Geometric Distribution
difficulty: easy
source: Red Book
topics: []
tags: []
---

**What Is a `Geometric Distribution`**?

The geometric distribution models the number of independent trials needed to get the first success in a sequence of Bernoulli (yes/no) experiments.
- Each trial has two outcomes: success (with probability p) and failure (with probability 1 - p).
- The trials are independent, meaning the outcome of one does not affect the others.
- The random variable X represents the number of trials until the first success occurs.

The probability mass function is given by:
$$
P(X = k) = (1 - p)^{k - 1} \cdot p
$$

This is the probability that the first $k - 1$ trials are failures and the k-th trial is the first success.

&nbsp;

**Mean of `Geometric Distribution`**? $\mathbb{E}[X] = \frac{1}{p}$

This tells us the average number of trials needed to get the first success.

**Variance of `Geometric Distribution`**? $\text{Var}(X) = \frac{1 - p}{p^2}$
This quantifies the spread or variability in the number of trials needed.
