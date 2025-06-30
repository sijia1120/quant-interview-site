---
id: candy
title: Candies in a Jar
sidebar: Candies in a Jar
source: "green book"
difficulty: "Easy"
key_concepts: ["Conditional Probability"]
---


#### 📖 Q1: <p style={{ textAlign: "justify" }}> You are taking out candies one by one from a jar that has 10 red candies, 20 blue candies, and 30 green candies in it. What is the probability that there are at least 1 blue candy and 1 green candy left in the jar when you have taken out all the red candies? </p> 

Assume $ T_{\text{red}} $, $T_{\text{blue}}$, and $T_{\text{green}} $represent the draw positions (from 1 to 60) of the last red, blue, and green candy drawn, respectively. For example, if the last red candy is drawn at position 11, then $T_{\text{red}} = 11 $.To ensure that at least one blue and one green candy remain in the jar when all red candies have been removed, we must have:

$$
T_{\text{red}} < T_{\text{blue}} \quad \text{and} \quad T_{\text{red}} < T_{\text{green}}
$$

That is, the last red candy must be drawn before the last blue and green candies. There are two mutually exclusive favorable orderings that satisfy this condition:

- $ T_{\text{red}} < T_{\text{green}} < T_{\text{blue}} $
- $T_{\text{red}} < T_{\text{blue}} < T_{\text{green}} $

Hence, the desired probability is:

$$
P(T_{\text{red}} < T_{\text{blue}} \ \text{and} \ T_{\text{red}} < T_{\text{green}})
= P(T_{\text{red}} < T_{\text{green}} < T_{\text{blue}}) + P(T_{\text{red}} < T_{\text{blue}} < T_{\text{green}})
$$

The probability that a blue candy is drawn last (i.e., $T_{\text{blue}} = 60 $) is:$P(\text{last is blue}) = \frac{20}{60}$. Given that blue is last, we want red to be drawn before green among the remaining 10 red and 30 green candies: $P(T_{\text{red}} < T_{\text{green}} \mid \text{last is blue}) = \frac{30}{40}$. So

$$
P(T_{\text{red}} < T_{\text{green}} < T_{\text{blue}})
= \frac{20}{60} \cdot \frac{30}{40}
$$

Similarly, The probability that a green candy is drawn last is $P(\text{last is green}) = \frac{30}{60}$ and given that green is last, we want red to be drawn before blue among the remaining 10 red and 20 blue candies: $P(T_{\text{red}} < T_{\text{blue}} \mid \text{last is green}) = \frac{20}{30}$

So:

$$
P(T_{\text{red}} < T_{\text{blue}} < T_{\text{green}})
= \frac{30}{60} \cdot \frac{20}{30}
$$

Answer: 
$$
P(\text{at least 1 blue and 1 green remain when red runs out})
= \frac{20}{60} \cdot \frac{30}{40} + \frac{30}{60} \cdot \frac{20}{30} = \boxed{\frac{3}{4}}
$$

