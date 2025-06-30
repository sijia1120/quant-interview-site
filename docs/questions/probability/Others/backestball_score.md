---
id: basketball_score
title: Basketball Scores 
sidebar_label: Basketball Scores
difficulty: medium
source: Red Book, Green Book
topics: []
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> A basketball player is taking 100 free throws. She scores one point if the ball passes through the hoop and zero point if she misses. She has scored on her first throw and missed on her second. For each of the following throw the probability of her scoring is the fraction of throws she has made so far. For example, if she has scored 23 points after the 40th throw, the probability that she will score in the 41th throw is 23/40. After 100 throws (including the first and the second), what is the probability that she scores exactly 50 baskets?  </p> 

Let $ P_{n,k}$  be the probability that the player has scored exactly $ k $ times after $  n $ throws. We are given:

- $P_{2,1} = 1 $, because she made the 1st and missed the 2nd
-  From the 3rd shot onward, the process evolves as a function of current success rate

$$
P_{n+1,k} = \left(1 - \frac{k}{n}\right) P_{n,k} + \frac{k-1}{n} P_{n,k-1}
$$

This means the probability of scoring $k$ out of $n+1$ throws depends on:
- Missing the last shot (stay at $k$ scores)
- Scoring the last shot (moving from $k-1$ to $k$)

It turns out — surprisingly — that for $k = 1, 2, ..., n-1 $:

$$
P_{n,k} = \frac{1}{n - 1}
$$

We can confirm this uniformity through direct computation:

- $P_{3,1} = \frac{1}{2}, \quad P_{3,2} = \frac{1}{2} $
- $ P_{4,1} = P_{4,2} = P_{4,3} = \frac{1}{3} $
- $ P_{5,1} = P_{5,2} = P_{5,3} = P_{5,4} = \frac{1}{4} $

As you can see, for each $ n $, the non-trivial probabilities $P_{n,k}$ for $1 \leq k \leq n-1 $ are equal and sum to 1. This means the number of total scores (excluding 0 and n) is uniformly distributed over $\{1, 2, ..., n-1\} $. Since $P_{100,k} = \frac{1}{99}$ for all $ 1 \leq k \leq 99 $, we have:

$$
P(\text{Exactly 50 scores after 100 shots}) = \boxed{\frac{1}{99}}
$$
