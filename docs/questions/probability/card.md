#### 📖 Q1: A casino offers a simple card game. There are 52 cards in a deck with 4 cards for each value 2, 3, 4, 5, 6, 7, 8, 9,10, J(jack), Q(queen), K(king), A(ace). Each time the cards are thoroughly shuffled (so each card has equal probability of being selected). You pick up a card from the deck and the dealer picks another one without replacement. If you have a larger number, you win; if the numbers are equal or yours is smaller, the house wins— as in all other casinos, the house always has better odds of winning. What is your probability of winning?

Method 1: <br />
If i chose 2, $P(\text{win}) = 1/13 * 0$; <br />
If i chose 3, $P(\text{win}) = 1/13 * (4/51)$; <br />
If i chose 4, $P(\text{win}) = 1/13 * (8/51)$; <br />
$\Rightarrow$ $P(\text{win}) = \frac{1}{13} \times \frac{4}{51} \times (1+2+...+12)$
<br />
Method 2:
$P(\text{I win}) = P(\text{I lose})$; $P(\text{equal}) = 3/51$ $\Rightarrow$ $P(\text{I win})= \frac{1}{2}(1-\frac{3}{51})$

Answer: 8/17

