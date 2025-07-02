---
id: possion_process
title: Poisson Process 
sidebar_label: Poisson Process 
difficulty: easy
source: Red Book, Green Book
topics: [Stochastic Process, ]
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> You are waiting for a bus at a bus station. The buses arrive at the station according to a Poisson process with an average arrival time of 10 minutes ($\lambda$ = 0.1/min). If the buses have been running for a long time and you arrive at the bus station at a random time, what is your expected waiting time? On average, how many minutes ago did the last bus leave?  </p> 

The waiting time $T$ follows an exponential distribution with density $f_T(t) = \lambda e^{-\lambda t}$. Therefore, the expected waiting time is the mean of the exponential distribution: $\mathbb{E}[T] = \frac{1}{\lambda} = 10$ minutes. Due to the memoryless property, the expected time since the last bus also equals 10 minutes.