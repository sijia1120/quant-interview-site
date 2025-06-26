---
id: birthday
title: Birthday Problem
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}>  How many people do we need in a class to make the probability that two people have the same birthday more than 1/2? (For simplicity, assume 365 days a year.) </p> 

We first need to find the number of those sequences that have no duplication of birthdays. When N people, the probability that no duplication of birthdays is $\frac{365 \times 364 \times \cdot \cdot \cdot \times (365-n+1)}{365^n} < 1/2$. Therefore the smallest such n is 23. 

Answer: 23. 
&nbsp;

#### 📖 **Q2 Birthday line**: <p style={{ textAlign: "justify" }}>  At a movie theater, a whimsical manager announces that she will give a free ticket to the first person in line whose birthday is the same as someone who has already bought a ticket. You are given the opportunity to choose any position in line. Assuming that you don't know anyone else's birthday and all birthdays are distributed randomly throughout the year (assuming 365 days in a year), what position in line gives you the largest change of getting the free ticket? </p> 


This problem asks us to find the position $ n$ in line where the $n$-th person has the highest probability** of sharing a birthday with someone before them. We analyze this using the following logic: The probability that the first $n-1$ people all have distinct*birthdays is:

$$
P_{\text{unique}}(n-1) = 1 \times \frac{364}{365} \times \frac{363}{365} \times \cdots \times \frac{365 - (n - 2)}{365}
$$

The probability that the $ n $-th person shares a birthday with one of the previous $ n - 1$ people is:

$$
P(n) = P_{\text{unique}}(n-1) \times \frac{n - 1}{365}
$$

We want to maximize $P(n)$, so we compare it to $P(n - 1)$ and $P(n + 1)$, and look for when: $P(n) > P(n - 1) \quad \text{and} \quad P(n) > P(n + 1)$. Let’s sketch the recurrence-style comparison:

Compare $P(n)$ and $P(n - 1)$:

$$
\frac{P(n)}{P(n - 1)} =
\frac{365 - (n - 2)}{365} \times \frac{n - 1}{365}
\div
\left( \frac{n - 2}{365} \right)
= \frac{(365 - n + 2) \cdot (n - 1)}{(n - 2) \cdot 365}
$$

Set this ratio $> 1 $, solve for $n$

We compare the probabilities to find the value of \( n \) that maximizes the chance of the \( n \)-th person getting a repeated birthday.

The relevant probabilities are:

$$
P(n - 1) = \frac{365}{365} \times \frac{364}{365} \times \cdots \times \frac{365 - (n - 3)}{365} \times \frac{365 - (n - 2)}{365}
$$

$$
P(n) = \frac{365}{365} \times \frac{364}{365} \times \cdots \times \frac{365 - (n - 2)}{365} \times \frac{n - 1}{365}
$$

$$
P(n + 1) = \frac{365}{365} \times \frac{364}{365} \times \cdots \times \frac{365 - (n - 2)}{365} \times \frac{365 - (n - 1)}{365} \times \frac{n}{365}
$$

To find the maximum, we compare:

$ P(n) > P(n - 1) $:

$$
\frac{365 - (n - 2)}{365} \times \frac{n - 1}{365} > \frac{n - 2}{365}
\Rightarrow n^2 - 3n - 363 < 0
$$



$P(n) > P(n + 1)$:

$$
\frac{n - 1}{365} > \frac{365 - (n - 1)}{365} \times \frac{n}{365}
\Rightarrow n^2 - n - 365 > 0
$$

Solving both inequalities, we find:

$$
\boxed{n = 20}
$$
