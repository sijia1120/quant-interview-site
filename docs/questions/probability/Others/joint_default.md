---
id: joint_default  
title: Joint default probability
sidebar: Joint default probability
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}>  If there is a 50% probability that bond A will default next year and a 30% probability that bond B will default. What is the range of probability that at least one bond defaults and what is the range of their correlation?</p>  


We use the basic formula for union of two events $P(A \cup B) = P(A) + P(B) - P(A \cap B)$. Given: $P(A) = 0.5$ and $P(B) = 0.3$

Occurs when the events are mutually exclusive (never both default):

$$
P(A \cap B) = 0 \Rightarrow P(A \cup B) = 0.5 + 0.3 = 0.8
$$

Occurs when the events are completely dependent (always default together):

$$
P(A \cap B) = \min(P(A), P(B)) = 0.3 \Rightarrow P(A \cup B) = 0.5 + 0.3 - 0.3 = 0.5
$$

Let $I_A$ and $I_B$ be indicator variables for default of bonds A and B. We compute:

- $\mathbb{E}[I_A] = P(A) = 0.5$
- $\mathbb{E}[I_B] = P(B) = 0.3$
- $\text{Var}(I_A) = 0.5(1 - 0.5) = 0.25$
- $\text{Var}(I_B) = 0.3(1 - 0.3) = 0.21$

Correlation is defined as:

$$
\rho_{AB} = \frac{\text{Cov}(I_A, I_B)}{\sqrt{\text{Var}(I_A) \cdot \text{Var}(I_B)}} = \frac{\mathbb{E}[I_A I_B] - \mathbb{E}[I_A]\mathbb{E}[I_B]}{\sqrt{0.25 \cdot 0.21}}
$$

We use:

$$
P(A \cup B) = P(A) + P(B) - \mathbb{E}[I_A I_B]
$$

- when Maximum $P(A \cup B) = 0.8$. $\mathbb{E}[I_A I_B] = 0.5 + 0.3 - 0.8 = 0$ and $\rho_{AB} = \frac{0 - (0.5)(0.3)}{\sqrt{0.0525}} = -\frac{0.15}{\sqrt{0.0525}} = -\sqrt{\frac{3}{7}} \approx -0.654$

- when Minimum $P(A \cup B) = 0.5$, $\mathbb{E}[I_A I_B] = 0.5 + 0.3 - 0.5 = 0.3$ and $\rho_{AB} = \frac{0.3 - 0.15}{\sqrt{0.0525}} = \sqrt{\frac{3}{7}} \approx 0.654$


