---
id: drunk_passenger
title: Drunk Passenger
source: "green book"
difficulty: "Easy"
key_concepts: ["Recursive Formula Derivation"]
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> A line of 100 airline passengers are waiting to board a plane. They each hold a ticket toone of the 100 seats on that flight. For convenience, let's say that the n-th passenger in line has a ticket for the seat number n. Being drunk, the first person in line picks a random seat (equally likely for each seat). All of the other passengers are sober, and will go to their proper seats unless it is already occupied; In that case, they will randomly choose a free seat. You're person number 100. What is the probability that you end up in your seat (i.e., seat #100) ? </p> 

Solution 1:
Let's consider seats #1 and #100. There are two possible outcomes:

- E1: Seat #1 is taken before #100;
- E2: Seat #100 is taken before #1;

If any passenger takes seat #100 before #1 is taken, surely you will not end up in you own seat. But if any passenger takes #1 before #100 is taken, you will definitely end up in you own seat. By symmetry, either outcome has a probability of 0.5. So the probability that you end up in your seat is 50%.

Solution 2: **Recursive Formula Derivation** <br />

Let $P(n)$ be the probability that passenger #n gets their seat. We consider three possibilities for the first passenger: 

1. Chooses seat #1 (their own seat) : Everyone else can sit normally → you (passenger #n) succeed. Probability: $\frac{1}{n} \cdot 1$
2. You will not get your seat. Probability: $\frac{1}{n} \cdot 0$
3.	Chooses seat #k where $2 \leq k \leq n-1$. Passenger #k will later find their seat taken and will behave like a new “drunk passenger.” This leads to a subproblem with the same structure. You succeed with probability $P(n - k + 1)$ (since the number of “active participants” from that point is $n - k + 1$).

Thus, the recursive formula becomes:
$$
P(n) = \frac{1}{n} \cdot 1 + \sum_{k=2}^{n-1} \frac{1}{n} \cdot P(n - k + 1) + \frac{1}{n} \cdot 0
= \frac{1}{n} + \frac{1}{n} \sum_{k=2}^{n-1} P(n - k + 1)
$$

Now let's verify that: $P(n) = \frac{1}{2} \quad \text{for all } n \geq 2$. Indeed, for small n: $P(2) = \frac{1}{2}$; $P(3) = \frac{1}{3} \cdot 1 + \frac{1}{3} \cdot P(2) = \frac{1}{3} + \frac{1}{3} \cdot \frac{1}{2} = \frac{1}{2}$ and $P(4) = \frac{1}{4} + \frac{1}{4}(P(3) + P(2)) = \frac{1}{4} + \frac{1}{4} \cdot (1/2 + 1/2) = \frac{1}{2}$. So we see that the recursion stabilizes at $P(n) = \frac{1}{2}$ for all $n \geq 2$. This is the fixed-point solution of the recursive relation.
