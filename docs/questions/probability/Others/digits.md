---
id: digits
title: 100th Digit
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}>  What is the 100th digit to the right of the decimal point in the decimal representation of $(1+ \sqrt{2})^{3000}$ </p> 

Hint: $(1+ \sqrt{2})^2 + (1- \sqrt{2})^2 = 6$ and $(1+ \sqrt{2})^n + (1- \sqrt{2})^n = 2 \sum_{k=2j, 0 <j<\frac{1}{2}} \binom{n}{k} 1^{n-k} \sqrt{2}^k$ is always an integer.

Apply the **binomial theorem**:

$$
(1 + \sqrt{2})^n = \sum_{k=0}^n \binom{n}{k} \cdot 1^{n-k} \cdot (\sqrt{2})^k
$$

Likewise:

$$
(1 - \sqrt{2})^n = \sum_{k=0}^n \binom{n}{k} \cdot 1^{n-k} \cdot (-\sqrt{2})^k
$$

If you **add** the two expressions, terms with odd powers of \( \sqrt{2} \) cancel out, and the remaining terms are real and rational:

$$
(1 + \sqrt{2})^n + (1 - \sqrt{2})^n = \text{sum of even-powered terms} \in \mathbb{Z}
$$

Let $I = (1 + \sqrt{2})^{3000} $ and $ J = (1 - \sqrt{2})^{3000}$, we have $I + J \in \mathbb{Z} \quad \Rightarrow \quad I = \text{Integer} - J$.But notice $ 0 < 1 - \sqrt{2} < 1 $. So $J = (1 - \sqrt{2})^{3000} $ is a very small positive number. In fact: $ 0 < J \ll 10^{-100} $. That means:$ I = \text{Integer} - \epsilon $, where $ \epsilon < 10^{-100} $. So the decimal part of $ I $ is like 0.99999 (with at least 100 nines). Therefore, the 100th digit after the decimal point is 9. 


Answer: 9. 