---
id: puzzle
title: Puzzle Game
sidebar_label: Puzzle
difficulty: easy
source: Green Book
topics: []
tags: []
---
#### 📖 Q1: <p style={{ textAlign: "justify" }}> Monty Hall problem is a probability puzzle based on an old American show Let's Make a Deal. The problem is named after the show's host. Suppose you're on the show now, and you're given the choice of 3 doors. Behind one door is a car; behind the other two, goats. You don't know ahead of time what is behind each of the doors. You pick one of the doors and announce it. As soon as you pick the door, Monty opens one of the other two doors that he knows has a goat behind it. Then he gives you the option to either keep your original choice or switch to the third door. Should you switch? What is the probability of winning a car if you switch? </p>

Consider, A: goat, B:goat, C:car; 
- if I choose A; B opens: and I switch, I win; 
- if I choose B; A opens, and I switch, I win;
- if I choose C; A opens, and I switch, I lose;

So probability of winning by switching is actually 2/3. In general, I win the car if and only if you originally pick a door with a goat, which has a probability of 2/3 (You pick a door with a goat, Monty shows a door with another goat, so the one you switch to must have a car behind it).


&nbsp;