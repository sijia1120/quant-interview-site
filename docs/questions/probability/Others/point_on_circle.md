---
id: point_on_circle
title: N points on a circle
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: Given N points drawn randomly on the circumference of a circle, what is the probability that they are all within a semicircle?

Let's randomly choose a point on circle; Since the placements are independent, the probability that all N-1 points fall within the semicircle is: $\left(\frac{1}{2}\right)^{N-1}$. There are N points on the circle. Each one could potentially be the starting point of a semicircle. So, there are N such semicircles to consider. The probability that at least one of these semicircles contains all the points is:
$$
P(E) = N \times \left(\frac{1}{2}\right)^{N-1} = \frac{N}{2^{N-1}}
$$

Answer: $\frac{N}{2^{N-1}}$. If the ratio of the arc length to the circumference of the circle is $x$ $(x ≤1/2)$, then the probability of all $N$ points fitting into the arc is $N \times x^{N-1}$.