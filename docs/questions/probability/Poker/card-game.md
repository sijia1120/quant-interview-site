---
id: card-game
title: Poker hands
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: Poker is a card game in which each player gets a hand of 5 cards. There are 52 cards in a deck. Each card has a value and belongs to a suit. There are 13 values, 2, 3, 4, 5, 6, 7, 8, 9, 10, J (jack), Q (queen), K (king), A (ace), and four suits (spade, club, heart, diamond). What are the probabilities of getting hands with four-of-a-kind (four of the five cards with the same value)? Hands with a full house (three cards of one value and two cards of another value)? Hands with two pairs?

**four-of-a-kind**: There are $\binom{52}{5} = 2,598,960$ combinations of picking 5 cards; The combination of getting four of the five cards with the same value is randomly pick 1 set and then pick the last card which is $13 \times (52-4) = 624$.

**Hands with a full house**: $\binom{13}{2} \times \binom{4}{3} \times \binom{4}{2} \times 2 = 3,744$

**Hands with two pairs**: $\binom{13}{2} \times \binom{4}{2} \times \binom{4}{2} \times (52-8) = 123,552$
