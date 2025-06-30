---
id: amoeba_population
title: Amoeba Population
sidebar: Amoeba Population
source: "green book"
difficulty: "Easy"
key_concepts: ["Fibonacci number"]
---


#### 📖 Q1: <p style={{ textAlign: "justify" }}> There is a one amoeba in a pond. After every minute the amoeba may die, stay the same, split into two or split into three with equal probability. All its offspring, if it has any, will behave the same (and independent of other amoebas). What is the probability the amoeba population will die out? </p> 


Let \( P(E) \) be the probability that the amoeba population eventually dies out. There are four possible outcomes after one minute and each of these events occurs with probability $\frac{1}{4}$.

1. **Die** — the amoeba dies immediately → extinction occurs.
2. **Stay the same** — same situation repeats → extinction probability remains $P(E)$.
3. **Split into 2 amoebas** — both must eventually die out → probability is $P(E)^2$.
4. **Split into 3 amoebas** — all three must die out → probability is $P(E)^3$.

Using the law of total probability:

$$
P(E) = P(E| F_1) P(F_1) + P(E| F_2) P(F_2) + \cdot \cdot \cdot + P(E| F_1) P(F_1) + P(E| F_n) P(F_n)
$$

And it becomes 
$$
P(E) = \frac{1}{4}(1) + \frac{1}{4} P(E) + \frac{1}{4} P(E)^2 + \frac{1}{4} P(E)^3
$$

Answer: The probability that the amoeba population will eventually die out is:
$$
\boxed{\sqrt{2} - 1 \approx 0.414}
$$

