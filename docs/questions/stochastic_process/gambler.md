---
id: gambler 
title: Gambler's Ruin Problem
sidebar_label: Gambler's Ruin Problem
difficulty: medium
source: Red Book, Green Book
topics: []
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> A gambler starts with an initial fortune of $i$ dollars. On each successive game, the gambler wins \$1 with probability p, $0 < p < 1$, or loses \$1 with probability $q = 1- p$. He will stop if he either accumulates N dollars or loses all his money. What is the probability that he will end up with N dollars?  </p> 

Method 1:

A gambler starts with $i$ dollars. On each round:

- Wins \$1 with probability $p$
- Loses \$1 with probability $q = 1 - p$

The gambler stops when reaching either:

- $N$ dollars (target) — success
- 0 dollars — ruin

What is the probability that the gambler reaches \( N \) dollars before going broke?


##### 🔁 Step 1: Model as a Stochastic Process

This is a classic **discrete-time stochastic process**, specifically a **Markov chain**.

- **State space**: $ \{0, 1, 2, ..., N\} $
- **Initial state**: $ i $
- **Transitions**:
  - From $ i \to i+1 $ with probability $ p $
  - From $ i \to i-1 $ with probability $ q $
- **Absorbing states**:
  - $ 0 $ (ruin)
  - $ N $ (success)

#### 🔁 Step 2: Define the Target Quantity

Let $ P_i $ = probability that starting with $i$ dollars, the gambler eventually reaches $ N $ dollars.


#### 🔁 Step 3: Recurrence Relation

By the law of total probability: $P_i = p \cdot P_{i+1} + q \cdot P_{i-1}$ 

With boundary conditions: $P_0 = 0$ (ruin) $P_N = 1$ (success)

#### 🔁 Step 4: Solve the Recurrence

Case 1: $p \neq \frac{1}{2} $: Let $r = \frac{q}{p} = \frac{1 - p}{p} $, then:

$$
P_i = \frac{1 - r^i}{1 - r^N}
$$

This formula gives the exact probability of reaching \( N \) before 0.


Case 2: $p = \frac{1}{2} $ (fair game): The recurrence simplifies, and the solution is linear:

$$
P_i = \frac{i}{N}
$$

In summary, 
$$
P_i =
\begin{cases}
\displaystyle \frac{1 - \left( \frac{q}{p} \right)^i}{1 - \left( \frac{q}{p} \right)^N}, & \text{if } p \neq \frac{1}{2} \\\\
\displaystyle \frac{i}{N}, & \text{if } p = \frac{1}{2}
\end{cases}
$$


---


Let's assume the $i$-th game, if wins, goes to $i+1$-th, if loses goes back to state $i-1$th. So $P_i = p \times P_{i+1} + q \times P_{i-1}$. 

After rearraning it $P_{i+1}  - P_{i} = \frac{q}{p}(P_{i}  - P_{i-1}) = (\frac{q}{p})^2 (P_{i-1}  - P_{i-2}) = \cdot \cdot \cdot  = (\frac{q}{p})^i (P_{1}  - P_{0}) $