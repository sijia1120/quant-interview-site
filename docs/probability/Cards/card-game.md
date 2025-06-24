---


---
id: unfair-coin
title: Unfair Coin Among 1000
sidebar_label: Unfair Coin
source: Green Book
difficulty: medium
topics: [Bayes' Theorem, Posterior Probability, Coin Flip]
tags: [probability, coin, bayes]
--------------------------------

## 📖 Question

You are given 1000 coins. Among them, 1 coin has heads on both sides. The other 999 coins are fair...

## 🧠 Topic & Source

- **Topic**: Bayes’ Theorem, Posterior
- **Source**: Green Book (经典题)
- **Difficulty**: Medium

---

## ✅ Solution

We apply Bayes’ Theorem:

$$
P(\text{unfair} | 10H) = \frac{1 \cdot \frac{1}{1000}}{1 \cdot \frac{1}{1000} + (1/2)^{10} \cdot \frac{999}{1000}} \approx 0.5
$$

---

## 💬 Notes

This question is a classic application of conditional probability and Bayesian reasoning. It also tests your understanding of how likelihood scales when repeating uncertain experiments.

---
