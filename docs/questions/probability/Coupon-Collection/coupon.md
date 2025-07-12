---
id: coupon 
title: Coupon Collection
sidebar: Coupon Collection
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}>  There are N distinct types of coupons in cereal boxes and each type, independent of prior selections, is equally likely to be in a box. If a child wants to collect a complete set of coupons with at least one of each type, how many coupons (boxes) on average are needed to make such a complete set? </p>  


Let $X_i$ be the number of additional boxes needed to collect the $i$-th new type of coupon, after $(i - 1)$ types have already been collected. Then, the total number of boxes needed is: $T = X_1 + X_2 + \cdots + X_N $


To get the $i$-th new type, you've already seen $(i - 1)$ types. The probability of drawing a new type is: $p_i = \frac{N - i + 1}{N}$. You repeat until the first success, so X follows the geometric distribution: $X_i \sim \text{Geom}(p_i)$. So the expected value is:

$$
\mathbb{E}[X_i] = \frac{1}{p_i} = \frac{N}{N - i + 1}
$$

Final Expectation:

$$
\mathbb{E}[T] = \sum_{i=1}^N \frac{N}{N - i + 1} = N(\frac{1}{N} + \frac{1}{N-1}+ \cdot \cdot \cdot \frac{1}{1})= N \sum_{k=1}^N \frac{1}{k} = N \cdot H_N
$$

Where $H_N$ is the $N$-th harmonic number:

$$
H_N = 1 + \frac{1}{2} + \cdots + \frac{1}{N} \approx \ln N + \gamma
$$

(Here, $\gamma \approx 0.577$ is the Euler-Mascheroni constant.)

 &nbsp;



####  <p style={{ textAlign: "justify" }}>  B. If the child has collected n coupons, what is the expected number of distinct coupon types </p> 

Let $Y$ be the number of distinct types collected in $n$ draws. We want to compute $\mathbb{E}[Y]$, Expected number of distinct coupon types after n draws. For each coupon type $i = 1, 2, \dots, N$, define an indicator random variable:

$$
I_i =
\begin{cases}
1, & \text{if type } i \text{ appears at least once in the } n \text{ draws} \\
0, & \text{otherwise}
\end{cases}
$$

Then the total number of distinct types is:

$$
Y = I_1 + I_2 + \cdots + I_N
\Rightarrow \mathbb{E}[Y] = \sum_{i=1}^N \mathbb{E}[I_i]
$$



To compute $\mathbb{E}[I_i]$, note:

- The probability that **a single draw** is *not* type $i$ is $\frac{N - 1}{N}$.
- The probability that **none of the $n$ draws** is type $i$ is $\mathbb{P}(I_i = 0) = \left( \frac{N - 1}{N} \right)^n$


- So, the probability that type $i$ *does* appear at least once is $\mathbb{E}[I_i] = 1 - \left( \frac{N - 1}{N} \right)^n$

Summing over all $N$ types:

$$
\mathbb{E}[Y] = \sum_{i=1}^N \left( 1 - \left( \frac{N - 1}{N} \right)^n \right)
= N \left( 1 - \left( \frac{N - 1}{N} \right)^n \right)
$$
