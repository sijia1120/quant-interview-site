---
id: russian-roulette
title: Russian Roulette
sidebar_label: Russian Roulette
difficulty: easy
source: Red Book, Green Book
topics: []
tags: [Game Theory]
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> Let's play a traditional version of Russian roulette. A single bullet is put into a 6-chamber revolver. The barrel is randomly spun so that each chamber is equally likely to be under the hammer. Two players take turns to pull the trigger-with the gun unfortunately pointing at one's own head-without further spinning until the gun goes off and the person who gets killed loses. If you, one of the players, can choose to go first or second, how will you choose? And what is your probability of loss?  </p> 

When a single bullet is put into a 6-chamber revolver, if bullet is in 1,3,5; first person dies, if 2,4,6 , second person dies. So the probability of loss would be the same.

#### <p style={{ textAlign: "justify" }}> Now, let's change the rule slightly. We will spin the barrel again after every trigger pull. Will you choose to be the first or the second player? And what is your probability of loss? </p>

Let's assume $p$ is the probability that first person loses, And $1-p$ is the second person loses. Therefore, $p = 1 \times 1/6 + 5/6 \times (1-p)$ $\Rightarrow p = 6/11$. So better to be the second player, which only has $5/11$ probability of losing. 

#### <p style={{ textAlign: "justify" }}> If instead of one bullet, **two bullets** are randomly put in the chamber. Your opponent played the first and he was alive after the first trigger pull. You are given the option whether to spin the barrel. Should you spin the barrel?  </p>


If you spin the barrel, the probability that you will lose in this round is 2/6. If
you don't spin the barrel, there are only 5 chambers left and your probability of losing in this round (conditioned on that your opponent survived) is 2/5. So you should spin the barrel.

#### <p style={{ textAlign: "justify" }}> What if the two bullets are randomly put in two consecutive positions? If your opponent survived his first round, should you spin the barrel? </p>

Let's assume the positions are bullet, bullet,  empty, empty, empty,empty. first player's safe, so he must be in position 3,4,5,6. And only if he's in position 6, that next trigger you will lose, so the probability that not spin and survive is $3/4$. But if you spin the probability of survive becomes $2/6= 1/3$. So better not to spin.



---

#### 📖 Similar Questions: 
<p style={{ textAlign: "justify" }}> You are playing Russian Roulette. There are precisely two bullets in neighbouring chambers of the six shooter revolver. The barrel is spun. The trigger is pulled and the gun does not fire. You are next, do you spin again or pull the trigger?  </p> 
 

