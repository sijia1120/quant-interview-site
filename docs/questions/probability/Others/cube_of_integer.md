---
id: cube_of_integer
title: Cubic of integer
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}>  Let $x$ be an integer between 1 and $10^{12}$, what is the probability that the cubic of $x$ ends with 11? </p> 

Hint: $(x+y)^3 = x^3 + 3x^2y+3xy^2 + y^3$

Any integer can be expressed as $x = a+10b$. $(a+10b)^3 = a^3 + 30a^2b + 300ab^2 + 1000b^3$. Therefore, a must be 1 and $30b$ must end with 10 or $3b$ must end with 1/  Therefore $b=7$. Consequently, the last two digits of x should be 71, which has a probability of 1% for integers between 1 and $10^{12}$. 