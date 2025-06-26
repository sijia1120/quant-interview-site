---
id: dart
title: Dart
sidebar_label: Dart
difficulty: medium
source: Red Book
topics: []
tags: [Game Theory]
---
#### 📖 Q1: <p style={{ textAlign: "justify" }}>   Suppose you are throwing a dart at a circular board. What is your expected distance from the center? Make any necessary assumptions. Suppose you win a dollar if you hit 10 times in a row inside a radius of R/2, where R is the radius of the board. You have to pay 10c for every try. If you try 100 times, how much money would you have lost/made in expectation? Does your answer change if you are a professional and your probability of hitting inside R/2 is double of hitting outside R/2? </p> 

source: `MAN Group`

&nbsp;

#### 📖 **Q2:Dart game**: <p style={{ textAlign: "justify" }}> Jason throws two darts at a dartboard, aiming for the center. The second dart lands farther from the center than the first. If Jason throws a third dart aiming for the center, what is the probability that the third throw is farther from the center than the first? Assume Jason's skillfulness is constant. What if Jason throws </p> 

Known second is far from first one. From close to far ranking is [A] First [B] Second [C]. If the third throw is farther from the center than the first, third can be either [B] or [C], therefore, the probability that the third throw is farther from the center than the first is 2/3. 


#### <p style={{ textAlign: "justify" }}>  If Jason throws $n (5 \leq n)$ darts at a dartboard, aiming for the center. Each subsequent dart is farther from the center than the first dart. If Jason throws the $(n + 1)$th dart, what is the probability that it is also farther from the center than his first? </p> 



This question is equivalent to a simple question: what is the probability that the $(n + 1)th$ throw is not the best among all (n+ 1) throws?

Let us define two events: $ A_n $: The 1st dart is the best (i.e., closest to the center) among the first $n$ darts. $A_{n+1} $: The $(n+1)$th dart is the best among all  $ n+1  $ darts. These two events are independent because each dart is thrown independently, and every dart has an equal chance of being the best among a group of independent throws.

Specifically, the probability that the $(n+1) $th dart is the best among all $ n+1 $darts is:

$$
P(A_{n+1}) = \frac{1}{n + 1}
$$

So the probability that it is **not** the best is:

$$
1 - \frac{1}{n + 1} = \frac{n}{n + 1}
$$


