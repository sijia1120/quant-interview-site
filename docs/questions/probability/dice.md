---
id: dice
title: Rolling Dice
sidebar_label: Dice
difficulty: easy
source: Red Book
topics: ["Expected Value", "Dice"]
tags: [Expected Value, Dice, expectation]
---
#### 📖 Q1:  Consider the following game. The player tosses a die once only. The payoff is 1 dollar for each dot on the upturned face. Assuming a fair die, at what level should you set the ticket price of this game? 

$$
E[\text{ 1die}] = \frac{1}{6}(1+2+3+4+5+6) = 3.5
$$
Answer: 3.5


&nbsp;

#### 📖 Q2 Dice game: Suppose that you roll a dice. For each roll, you are paid the face value. If a roll gives 4, 5 or 6, you can roll the dice again. Once you get 1, 2 or 3, the game stops. What is the expected payoff of this game? 



Let $E$ be the expected total payoff. With probability $\frac{1}{2}$, you roll a 1, 2, or 3 and the game ends. The expected payoff in this case is: $\frac{1}{6}(1 + 2 + 3) = 1$. With probability $\frac{1}{2}$, you roll a 4, 5, or 6 and continue the game. The expected value of such a roll is: $\frac{1}{6}(4 + 5 + 6) = 5$. But since you roll again after this, the total expected value becomes: $5 + E$

Putting it all together:

$$
E = \frac{1}{2} \cdot 2 + \frac{1}{2} \cdot (5 + E) \Rightarrow E = \boxed{7}
$$

&nbsp;

#### 📖 Q2:  Suppose we play a game. I roll a die up to three times. Each time I roll, you can either take the number showing as dollars, or roll again. What is your expected winnings? 
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



&nbsp;

#### 📖 **Q3 Dice Order**: We throw 3 dice one by one. What is the probability that we obtain 3 points in strictly increasing order ?

Each die has 6 faces, and we roll 3 dice independently and the Total outcomes = $6^3 = 216$. To be strictly increasing, the three numbers must be all distinct and ordered such that $a < b < c$. Each of these 3-number sets (e.g., {2, 4, 6}) has $\binom{6}{3}=20$ permutations. And each permutations has $3!$ combination, but only 1 of them is strictly increasing. So $\text{Favorable outcomes} = \binom{6}{3} \times \frac{1}{6^3} =20/216 = 5/54$. 



&nbsp;


#### 📖 **Q4 Red Book** :  Consider the following games. The player tosses a die once only. The payoff is 1 dollar for each dot on the upturned face. Assuming a fair die, at what level should you set the ticket price of this game ? 
 



The expectation of this game is 3.5. 


#### 📖 **Q4 Red Book** :  Suppose we play a game. I roll a die up to three times. Each time I roll, you can either take the number showing as dollars, or roll again. What is your expected winnings? 



The expectation of first roll is 3.5. So if in the first roll, 1,2,3 appears, go ahead with second roll. If 4,5,6 appears, take the number and game stops. So the expectation of the second roll is 
$$ 
E[\text{second roll}] = \frac{1}{2} \times 3.5 + \frac{1}{6} \times (4+5+6) = \frac{17}{4} = 4.25
$$

If the second roll is 5,6, take the number; else if second roll is 1,2,3,4, roll the third time. 

$$ 
E[\text{third roll}] = \frac{4}{6} \times 4.25 + \frac{1}{6} \times (5+6) = \frac{17}{4} = 4\frac{2}{3}
$$






### 📖 Related Questions

#### 🎲 What is the expectation of the sum of two rolls?
$E[X_1 + X_2] = E[X_1] + E[X_2]$  

&nbsp;

