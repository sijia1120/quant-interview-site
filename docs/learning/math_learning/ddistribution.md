---
id: distribution
title: Poisson Process
sidebar_label: Poisson Process 
difficulty: easy
source: Red Book, Green Book
topics: [Stochastic Process, ]
tags: []
---

### 📌 Overview

> A **Poisson process** models the number of events that occur in a time interval.  
> An **Exponential distribution** models the time **between** successive events.

These two concepts are **dually related** — one describes **event counts**, and the other describes **event intervals**.

---

### 🧠 1. Poisson Process

A Poisson process with rate $\lambda$ (events per unit time) satisfies:

- **Independent increments**:  Events in disjoint time intervals are independent.

- **Stationary increments**:  The number of events in a time interval depends only on the **length** of the interval, not its location.

- **Small interval behavior**:  
  $$
  P(\text{1 event in } \Delta t) \approx \lambda \Delta t, \quad
  P(\text{2 or more events}) \approx o(\Delta t)
  $$

The number of events by time $t $is:

$$
P(N(t) = k) = \frac{(\lambda t)^k}{k!} e^{-\lambda t}, \quad k = 0, 1, 2, ...
$$

This is a **Poisson distribution** with parameter $ \lambda t $.

---

### ⏱ 2. Exponential Distribution (Interarrival Time)

Exponential distribution is widely used to model the time interval between independent events that happen at a constant average rate (arrival rate). Let $ T $ be the time between two events:$ T \sim \text{Exponential}(\lambda)$

- **PDF**:  $f_T(t) = \lambda e^{-\lambda t}, \quad t \geq 0$ ; $f_T(t) = 0 \quad t < 0$
- **CDF**:  $F_T(t) = P(\tau \leq t) = 1- e^{-rt}$; $F_T(t) = P(\tau \geq t) = e^{-rt}$, where $\tau$ is the random variable for arrival time. 
  
- **Expected value**:  $\mathbb{E}[T] = \frac{1}{\lambda}$; $\mathbb{Var}[T] = \frac{1}{\lambda^2}$.


- **Memoryless property**:  $P(T > s + t \mid T > s) = P(T > t)$, which means if we have waited for $s$ time units, the extra waiting time has he same distribution as the waiting time when we start at time 0. 

---

## 🔁 Connection Between the Two

The Poisson process and the exponential distribution are connected as follows:

| Concept              | Poisson Process                   | Exponential Distribution                 |
|----------------------|-----------------------------------|-------------------------------------------|
| Describes            | Number of arrivals in time        | Time between arrivals                     |
| Expression           | $ N(t) \sim \text{Poisson}(\lambda t) $ | $ T \sim \text{Exponential}(\lambda) $     |
| Unit of analysis     | Count                             | Time interval                             |
| Relationship         | $ N(t) = \max \{n: S_n \leq t\} $  | $ S_n = \sum_{i=1}^n T_i $               |

- $ T_i $: the time between the $ (i-1) $-th and $i$-th event  
- $ S_n $: the arrival time of the $ n $-th event

So the Poisson process can be constructed by **accumulating exponential random variables**.

---



## ✅ Summary

> - **Poisson Process** tells you how many events occur in a time period.  
> - **Exponential Distribution** tells you how long until the next event.  
> - They are **two sides of the same coin** — one for **counting**, one for **timing**.