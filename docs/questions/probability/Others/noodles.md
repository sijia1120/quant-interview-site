---
id: noodles
title: Connecting noodles
sidebar_label: Connecting noodles
difficulty: median
source: Red Book, Green Book
topics: [ ]
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> You have 100 noodles in your soup bowl. Being blindfolded, you are told to take two ends of some noodles (each end on any noodle has the same probability of being chosen) in your bowl and connect them. You continue until there are no free ends. The number of loops formed by the noodles this way is stochastic. Calculate the expected number of circles.</p> 



Each time you tie two ends, there are two possibilities:

1. You tie the two ends of the same noodle → forms a loop
2. You tie ends from two different noodles → creates a longer chain

Eventually, all ends are connected — forming a collection of disjoint loops**. We are to compute the expected number of such loops. Let $E(n)$ be the expected number of loops formed from $n$ noodles (i.e., $2n$ ends).

- Case 1: $n = 1$: Only 1 noodle (2 ends) → must connect to itself: $E(1) = 1$
- Case 2: $n = 2$: There are 4 ends → 2 pairings total. Number of possible first pairings: $\binom{4}{2} = 6$. Among these, 2 pairings connect a noodle to itself and form 1 loop + 1 noodle. The other 4 pairings connect different noodles (no immediate loop). So: $E(2) = \frac{2}{6}(1 + E(1)) + \frac{4}{6}(E(1)) = \frac{2}{6} \cdot 2 + \frac{4}{6} \cdot 1 = \frac{8}{6} = \frac{4}{3}$

- Case 3: $n = 3$: There are 6 ends → 15 first pairings. 3 of them form a loop. Remaining 12 do not. Similar recursive logic applies, though we don't need to compute it in detail.

Here is the general pattern. The expected number of loops satisfies the recurrence:

$\boxed{
E(n) = \sum_{k=1}^{n} \frac{1}{2k - 1} = 1 + \frac{1}{3} + \frac{1}{5} + \cdots + \frac{1}{2n - 1}
}$

This is the sum of reciprocals of the first $n$ odd numbers.


For 100 noodles: $E(100) = \sum_{k=1}^{100} \frac{1}{2k - 1}$. Estimate using logarithmic approximation:

$E(100) \approx \ln(200) + \gamma - \ln(2) \approx \ln(100) + \text{constant} \approx 4.6$