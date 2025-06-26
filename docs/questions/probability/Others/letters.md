---
id: letters
title: Application letters
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}>  You're sending job applications to 5 firms: Morgan Stanley, Lehman Brothers, UBS, Goldman Sachs, and Merrill Lynch. You have 5 envelopes on the table neatly typed with names and addresses of people at these 5 firms. You even have 5 cover letters personalized to each of these firms. Your 3-year-old tried to be helpful and stuffed each cover letter into each of the envelopes for you. Unfortunately she randomly put letters into envelopes without realizing that the letters are personalized. What is the probability that all 5 cover letters are mailed to the wrong firms? </p> 

This problem is a classic example of the **Inclusion-Exclusion Principle**. Let $E_i$ be the event that the $i$-th letter goes into the correct envelope. Then the probability that at least one letter is correctly placed is:

$$
P\left(\bigcup_{i=1}^n E_i\right) = \sum_{i=1}^{n} P(E_i)
- \sum_{1 \le i < j \le n} P(E_i \cap E_j)
+ \cdots + (-1)^{n+1} P(E_1 \cap \cdots \cap E_n)
$$

So, the probability that no letter is in the correct envelope is:

$$
P(\text{none correct}) = 1 - P\left(\bigcup_{i=1}^n E_i\right)
$$

As $\sum_{i=1}^{n} P(E_i)= \frac{1}{5} + \frac{1}{5} + \frac{1}{5} + \frac{1}{5} + \frac{1}{5} = 1$. 

$P(E_{i1} E_{i2}) = \frac{1}{5} \times \frac{1}{4} = \frac{(5-2)!}{5!}$ and there are $\binom{5}{2}$ members of $P(E_{i1} E_{i2})$. so we have $\sum_{1 \le i < j \le n} P(E_i \cap E_j) = \frac{(5-2)!}{5!} \times \frac{5!}{2! (5-2)!} = \frac{1}{2!} $


Similarly, by the Inclusion-Exclusion Principle, we have: $\sum P(E_1 E_2 E_3) = \frac{1}{3!}$, $\sum P(E_1 E_2 E_3 E_4) = \frac{1}{4!}$ and $\sum P(E_1 E_2 E_3 E_4 E_5) = \frac{1}{5!}$. So, the probability $P\left(\bigcup_{i=1}^n E_i\right) = 1 - \frac{1}{2!} + \frac{1}{3!} - \frac{1}{4!} + \frac{1}{5!} = \frac{19}{30}$

Answer: Probabity that all 5 letters are mailed to the wrong firm is $1-P\left(\bigcup_{i=1}^n E_i\right) = \frac{11}{30}$.