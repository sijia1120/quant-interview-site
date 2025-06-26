---
id: coin
title: Fair Coin and Unfair Coin
sidebar_label: Coin
difficulty: easy
source: Red Book
topics: []
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> Two gamblers are playing a coin toss game. Gambler A has $(n+1)$ fair coins; B has $n$ fair coins. What is the probability that A will have more heads than B if both flip all their coins? </p> 

Method1 : when A and B both have n coin, P(A win) = x; P(B win) = x; P(equal) = y; $\Rightarrow$  $2x+y=1$;  

Answer: $P(\text{A win})*1 + P(\text{equal})\times \frac{1}{2} = x + 1/2y= 1/2$

&nbsp;

#### 📖 Q2 Unfair Coin: <p style={{ textAlign: "justify" }}> You are given 1000 coins. Among them, I coin has heads on both sides. The other 999 coins are fair coins. You randomly choose a coin and toss it 10 times. Each time, the coin turns up heads. What is the probability that the coin you choose is the unfair one? </p> 

P(unfair coin|HH) P(HH) = P(HH|unfair coin) P(unfair coin); As P(HH) = P( HH|unfair coin) P(unfair coin) + As P(HH) = P( HH|fair coin) P(fair coin) = $1 \times \frac{1}{1000} + \frac{1}{4} \times \frac{999}{1000} $. Therefore, the $P(\text{unfair coin}|HH)$ = $\frac{P(HH|\text{unfair coin}) P(\text{unfair coin})}{P(HH)} = \frac{1 \times \frac{1}{1000}}{1 \times \frac{1}{1000} + \frac{1}{4} \times \frac{999}{1000}}$.

&nbsp;

#### 📖 Q3 Fair probability from a n unfair coin: <p style={{ textAlign: "justify" }}> If you have an unfair coin,  which may bias toward either heads or tails at an unknown probability, can you generate even odds using this coin? </p> 

Assume the $P(head) = p$ and $P(tail) = 1-p$; The probability of first head and second tail is $p *(1-p)$ and the probability of first tail and second head if $(1-p)p$.  By assigning HT to winning and TH to losing, we can generate even odds. 



