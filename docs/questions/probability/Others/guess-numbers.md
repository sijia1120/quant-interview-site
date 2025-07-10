---
id: guess-numbers
title: Guess a Number
sidebar_label: Guess a Number
difficulty: medium
source: Red Book
topics: []
tags: [Game Theory]
---
#### 📖 Q1 Red book: We play a game: I pick a number n from 1 to 100. If you guess correctly, I pay you $n and zero otherwise. How much would you pay to play this game?



Answer: $$E[\text{total pay}] = \sum_{i=1}^{i=100} P(\text{i is picked}) \times i$$. In this case, an optimal strategy is the one that the expected winings is independent of the strategy the opponent picks. Therefore, the $$P(\text{i is picked})$$ should be proportional to $$\frac{1}{i}$$ and $$i$$ is cancelled out. 