---
id: play-again
title: Expectation of Rolling Dice
sidebar_label: Play again
difficulty: easy
source: Red Book
topics: ["Expected Value", "Dice"]
tags: [Expected Value, Dice, expectation]
---
#### 📖 Q1: Consider the following game. The player tosses a die once only. The payoff is 1 dollar for each dot on the upturned face. Assuming a fair die, at what level should you set the ticket price of this game?
$$
E[\text{ 1die}] = \frac{1}{6}(1+2+3+4+5+6) = 3.5
$$
Answer: 3.5


---

#### 📖 Q2: Suppose we play a game. I roll a die up to three times. Each time I roll, you can either take the number showing as dollars, or roll again. What is your expected winnings?
$$ 
E[\text{ 1 die}] = 3.5 
$$

$$ 
E[\text{ 2 die}] = \frac{1}{2} \times 3.5 + \frac{1}{6} \times (4+5+6) = 4.25
$$ 
when fist roll is $\{1,2,3\} < 3.5$, roll again; 

$$ 
E[\text{ 3 die}] = \frac{4}{6} \times 4.25 + \frac{1}{6} \times (5+6) = 4.67
$$ 
when second roll is $\{1,2,3,4\} < 4.25$, roll again; 

Answer: 4.67

---

### 📖 Related Questions

#### 🎲 What is the expectation of the sum of two rolls?
$E[X_1 + X_2] = E[X_1] + E[X_2]$  


-----------