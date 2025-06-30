---
id: triangle 
title: Probability of triangle
sidebar_label: Probability of triangle
difficulty: easy
source: Red Book, Green Book
topics: []
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> A stick is cut twice randomly (each cut point follows a uniform distribution on the stick), what is the probability that the 3 segments can form a triangle  </p> 

Let the stick have unit length. Denote the two cut points as $x $ and $y$, with $ 0 < x < y < 1 $. Then the lengths of the three segments are: $x$, $y - x$ and $1 - y$. To form a triangle, the triangle inequality must be satisfied for all combinations:

$$
\begin{aligned}
a + b &> c \quad \Rightarrow \quad x + (y - x) > 1 - y \quad \Rightarrow \quad y > \frac{1}{2} \\
a + c &> b \quad \Rightarrow \quad x + (1 - y) > y - x \quad \Rightarrow \quad y < \frac{1}{2} + x \\
b + c &> a \quad \Rightarrow \quad (y - x) + (1 - y) > x \quad \Rightarrow \quad x < \frac{1}{2}
\end{aligned}
$$

These inequalities define a region in the unit square $0 < x < y < 1$. The feasible region (where all three inequalities hold) corresponds to the area:

- Between $y = \frac{1}{2} $ and $y = \frac{1}{2} + x$
- With $x < \frac{1}{2}$

This region forms a triangle in the (x, y)-plane. Due to symmetry, the same triangle exists when the cut points are labeled in reverse (i.e., $y < x $). Therefore, the total valid area is **twice** the area of the triangular region for $x < y $.

By computing this area geometrically or via integration, the resulting probability is $\boxed{\frac{1}{4}}$

Sources : `JP Morgan`