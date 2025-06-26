---
id: chess
title: Chess tournament
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}>  A chess tournament has $2^n$ players with skills $1 > 2 > . . . >2^n$. It is organized as a knockout tournament, so that after each round only the winner proceeds to the next round. Except for the final, opponents in each round are drawn at random. Let's also assume that when two players meet in a game, the player with better skills always wins. What's the probability that players 1 and 2 will meet in the final? </p> 

The probability that players 1 and 2 don't meet at 1st run is $\frac{2^n -2}{2^n -1}$.

The probability that players 1 and 2 don't meet at 2nd run is $\frac{2^{n-1} -2}{2^{n-1} -1}$

The probability that players 1 and 2 meet at nth run is that they don't meet at previous $n-1$ run. Therefore the probability equals $\frac{2^n -2}{2^n -1} \times \frac{2^{n-1} -2}{2^{n-1} -1} \times \frac{2^{n-2} -2}{2^{n-2} -1} \times \cdot \cdot \cdot \times = \frac{2(2^{n-1} -1)}{2^n -1} \times \frac{2(2^{n-2} -1)}{2^{n-1} -1} \times \frac{2(2^{n-3} -1)}{2^{n-2} -1} \times \cdot \cdot \cdot \times =$. As there are $n-1$ runs, therefore, we get $\frac{2^{n-1}}{x^n -1}$