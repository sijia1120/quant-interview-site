---
id: screwy_pirate
title: Screwy Pirates I
source: "green book"
difficulty: "Easy"
key_concepts: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}>  Five pirates looted a chest full of 100 gold coins. Being a bunch of democratic pirates, they agree on the following method to divide the loot: The most senior pirate will propose a distribution of the coins. All pirates, including the most senior pirate, will then vote. If at least 50% of the pirates (3 pirates in this case) accept the proposal, the gold is divided as proposed. If not, the most senior pirate will be fed to shark and the process starts over with the next most senior pirate.... The process is repeated until a plan is approved. You can assume that all pirates are perfectly rational: they want to stay alive first and to get as much gold as possible second. Finally, being blood-thirsty pirates, they want to have fewer pirates on the boat if given a choice between otherwise equal outcomes.How will the gold coins be divided in the end?</p> 

There are 5 pirates, Let's start with a simplified version of the problem. 

Case 1: Only Pirate P1
- No one else to vote. P1 takes all 100 coins.


Case 2: Pirates P2 and P1
-  P2 proposes. Needs 1 out of 2 votes (including their own). P2 can approve their own plan unilaterally. P2 takes 100, P1 gets 0. 

Case 3: Pirates P3, P2, P1
- If P3 is thrown overboard, P2 proposes: P2 gets 100, P1 gets 0. So P1 has no value in the 2-pirate scenario. P3 offers 1 coin to P1 to gain support. P3 = 99, P2 = 0, P2 = 1;

Case 4: Pirates P4, P3, P2, P1
- If P4 dies, P3’s plan is: P3 = 99, P1 = 1, P2 = 0. So P2 is left out. P4 gives 1 coin to P2 to buy their vote. P4 = 99, P3 = 0, P2 = 1, P1 = 0

Case 5: Pirates P5, P4, P3, P2, P1
- If P5 dies, P4’s plan: P4 = 99, P2 = 1, others = 0; So P3 and P1 get nothing. P5 only needs 3 votes, and can count on their own. To get two more, P5 offers: 1 coin to P3, 1 coin to P1. So P5=98, P4=0, P3=1, P2=0, P1=0. 

