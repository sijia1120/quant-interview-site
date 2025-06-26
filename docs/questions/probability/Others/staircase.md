---
id: staircase
title: Staircase - Hopping rabbit
source: "green book"
difficulty: "Easy"
key_concepts: ["Fibonacci number"]
---


#### 📖 Q1: <p style={{ textAlign: "justify" }}> A rabbit sits at the bottom of a staircase with n stairs. The rabbit can hop up only one or two stairs at a time. How many different ways are there for the rabbit to ascend to the top of the stairs? </p> 


Assume $f(N)$ is the number of different ways to get into $N$ stairs. It is clear $f(N) = f(N-1) + f(N-2)$; Also, we know $f(1)=1$, $f(1)=2$, $f(1)=3$.

Answer: $f(N) = f(N-1) + f(N-2)$, which is Fibonacci numbers.