---
id: card
title: Card & Aces 
sidebar_label: Card & Aces
difficulty: easy
source: Red Book, Green Book
topics: []
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> A casino offers a simple card game. There are 52 cards in a deck with 4 cards for each value 2, 3, 4, 5, 6, 7, 8, 9,10, J(jack), Q(queen), K(king), A(ace). Each time the cards are thoroughly shuffled (so each card has equal probability of being selected). You pick up a card from the deck and the dealer picks another one without replacement. If you have a larger number, you win; if the numbers are equal or yours is smaller, the house wins— as in all other casinos, the house always has better odds of winning. What is your probability of winning?  </p> 


Method 1: <br />
If i chose 2, $P(\text{win}) = 1/13 * 0$; <br />
If i chose 3, $P(\text{win}) = 1/13 * (4/51)$; <br />
If i chose 4, $P(\text{win}) = 1/13 * (8/51)$; <br />
$\Rightarrow$ $P(\text{win}) = \frac{1}{13} \times \frac{4}{51} \times (1+2+...+12)$
<br />
Method 2:
$P(\text{I win}) = P(\text{I lose})$; $P(\text{equal}) = 3/51$ $\Rightarrow$ $P(\text{I win})= \frac{1}{2}(1-\frac{3}{51})$

Answer: 8/17

&nbsp;
#### 📖 Q2: <p style={{ textAlign: "justify" }}> Fifty-two cards are randomly distributed to 4 players with each player getting 13 cards. What is the probability that each of them will have an ace?  </p> 

Method 1: Probability distributing 52 cards into 4 groups is $\frac{52!}{13!13!13!13!}$ permutations. To make sure each have an ace is 4! permutations and distributing rest 48 cards into 4 groups is $\frac{48!}{12!12!12!12!}$. Therefore, probability that each of them will have an ace is $\frac{4! \times \frac{48!}{12!12!12!12!}}{\frac{52!}{13!13!13!13!}} = \frac{4! \times 13 \times 13 \times 13\times 13}{52 \times 51 \times 50 \times 49}$

<p style={{ textAlign: "justify" }}>  Method 2:  Let's begin with any one of the four aces; it has probability $\frac{52}{52}=1$ of belonging to a pile. The second ace can be any of the remaining 51 cards, among which 39 belong to a pile different from the first ace. So the probability that the second ace is not in the pile of the first ace is $\frac{39}{51}$. Now there are 50 cards left, among which 26 belong to the other two piles. So the conditional probability that the third ace is in one of the other 2 piles given the first two aces are already in different piles is $\frac{26}{50}$. Similarly, the conditional probability that the fourth ace is in the pile different from the first three aces given that the first three aces are in different piles is 13/49. So the probability that each pile has an ace is $\frac{52}{52} \times \frac{39}{51} \times \frac{26}{50} \times \frac{13}{49}$ </p> 

&nbsp;

#### 📖 Q2 Card game: <p style={{ textAlign: "justify" }}> What is the expected number of cards that need to be turned over in a regular 52-card deck in order to see the first ace??  </p> 



Let’s define an indicator function for each card position:

- Let $f(X_i) = 1$ if the $i$-th card appears **before** all four aces.
- Otherwise, $f(X_i) = 0$.

Let $N$ be the number of cards turned over to find the first ace. Then $N = 1 + \sum_{i=1}^{48} f(X_i)$。 We take the expectation on both sides:

$$
\mathbb{E}[N] = 1 + \sum_{i=1}^{48} \mathbb{E}[f(X_i)]
$$

Now, what is $\mathbb{E}[f(X_i)]$? For each non-ace card, the probability that it appears before  all four aces is $\frac{1}{5}$ （1，A，2，A，3，A，4，A，5）. Intuition: Think of a random ordering of the 48 non-ace cards and 4 aces. Any non-ace card has a $\frac{1}{5}$ chance of coming before the first ace (because it must be the earliest among 5 groups — itself and the 4 aces). Therefore: $\mathbb{E}[N] = 1 + 48 \cdot \frac{1}{5} = 1 + \frac{48}{5} = \boxed{10.6} $



This is a special case of a general result: Given $m$ ordinary cards and $n$ "special" cards (e.g., aces), the expected position of the first special card is:

$$
\mathbb{E}[N] = 1 + \frac{m}{n + 1}
$$

In our case: $m = 48$, $n = 4$ → result is $1 + \frac{48}{5} = 10.6$ ✅
