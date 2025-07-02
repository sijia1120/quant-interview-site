---
id: random_variables 
title: Sum of random variables
sidebar: Sum of random variables
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}>  Let $X_1, X_2, \dots, X_n$ be i.i.d. random variables uniformly distributed on $[0, 1]$. Let $S_n = X_1 + X_2 + \dots + X_n$. What is the probability that $S_n \leq 1$? </p> 

We start by computing small cases to identify a pattern.

- For $n = 1$:   $P(S_1 \leq 1) = P(X_1 \leq 1) = 1 = \frac{1}{1!}$

- For $n = 2$:  $P(S_2 \leq 1)$ is the area under $x_1 + x_2 \leq 1$ in the unit square $[0,1]^2$, which is a triangle with area $\frac{1}{2} = \frac{1}{2!}$

- For $n = 3$:  $P(S_3 \leq 1)$ is the volume under $x_1 + x_2 + x_3 \leq 1$ inside the unit cube $[0,1]^3$, which is a 3D simplex (tetrahedron) with volume $\frac{1}{6} = \frac{1}{3!}$

This suggests the general result:$P(S_n \leq 1) = \frac{1}{n!} $

Now let's prove that:

$$
P(S_n \leq 1) = \frac{1}{n!}
$$

- Step 1: Base case ($n = 1$) $P(X_1 \leq 1) = 1 = \frac{1}{1!} $

- Step 2: Inductive step: Assume the formula holds for $n$, i.e., $P(S_n \leq 1) = \frac{1}{n!}$
- Now for $S_{n+1}$: Let $X_{n+1}$ be the $(n+1)$-th variable. Since $X_{n+1} \sim \text{Uniform}(0,1)$, its PDF is 1 on $[0,1]$ Conditioning on $X_{n+1} = x$, we have:

$$
P(S_{n+1} \leq 1) = \int_0^1 P(S_n \leq 1 - x) \, dx
$$

From the known result (Irwin-Hall distribution):

$$
P(S_n \leq 1 - x) = \frac{(1 - x)^n}{n!}
$$

So:

$$
P(S_{n+1} \leq 1) = \int_0^1 \frac{(1 - x)^n}{n!} \, dx = \frac{1}{n!} \int_0^1 (1 - x)^n dx
$$

Change variable $u = 1 - x$:

$$
\int_0^1 (1 - x)^n dx = \int_0^1 u^n du = \frac{1}{n + 1}
$$

Thus:

$$
P(S_{n+1} \leq 1) = \frac{1}{n!} \cdot \frac{1}{n+1} = \frac{1}{(n+1)!}
$$


---

### 📌 Final Answer

$$
\boxed{P(X_1 + X_2 + \cdots + X_n \leq 1) = \frac{1}{n!}}
$$

This is equivalent to the volume of the $n$-dimensional simplex bounded by $x_1 + \dots + x_n \leq 1$ inside the unit cube $[0,1]^n$.