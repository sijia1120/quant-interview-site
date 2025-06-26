---
id: pirates
title: Screwy Pirates II
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}>  Five pirates looted a chest full of 100 gold coins. Being a bunch of democratic pirates, they agree on the following method to divide the loot: The most senior pirate will propose a distribution of the coins. All pirates, including the most senior pirate, will then vote. If at least 50% of the pirates (3 pirates in this case) accept the proposal, the gold is divided as proposed. If not, the most senior pirate will be fed to shark and the process starts over with the next most senior pirate.... The process is repeated until a plan is approved. You can assume that all pirates are perfectly rational: they want to stay alive first and to get as much gold as possible second. Finally, being blood-thirsty pirates, they want to have fewer pirates on the boat if given a choice between otherwise equal outcomes.How will the gold coins be divided in the end?</p> 

There are 5 pirates, Let's start with a simplified version of the problem. If 2 pirates, The senior pirate (labeled as 2) can claim all the gold since he will always get 50% of the votes from himself and pirate 1 is left with nothing.

If 3 pirates, if senior claim all the gold, he will die; and pirates 2 will claim all the gold. So 



#### 📖 Q2: <p style={{ textAlign: "justify" }}> Having peacefully divided the loot (in chapter 2), the pirate team goes on for more looting and expands the group to 11 pirates. To protect their hard-won treasure, they gather together to put all the loot in a safe. Still being a democratic bunch, they decide that only a majority - any majority - of them (≥6) together can open the safe. So they ask a locksmith to put a certain number of locks on the safe. To access the treasure, every lock needs to be opened. Each lock can have multiple keys; but each key only opens one lock. The locksmith can give more than one key to each pirate. What is the smallest number of locks needed? And how many keys must each pirate carry? </p>

Any randomlly picked 6 pirates can open the 1 lock, so there are $\binom{11}{6} = 462$ locks and each lock has 6 keys, in total, there are $462 \times 6$ keys. So each pirate must have $\frac{462 \times 6}{11} = 252$ keys.