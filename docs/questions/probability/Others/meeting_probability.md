---
id: meeting_probability
title: Meeting Probability 
sidebar_label: Meeting Probability 
difficulty: easy
source: Red Book, Green Book
topics: [Stochastic Process, ]
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> Two bankers each arrive at the station at some random time between 5:00 am and 6:00 am (arrival time for either banker is uniformly distributed). They stay exactly five minutes and then leave. What is the probability they will meet on a given day?  </p> 


Let’s assume that $x$ and $y$ represent the arrival times (in minutes after 5:00 AM) of two people, where both x and y are uniformly distributed between 0 and 60. We are interested in the event that they arrive within 5 minutes of each other, i.e.,
$$
|x - y| < 5
$$
This condition can be written as: if $x > y$, then $x - y < 5$; If $y > x$, then $y - x < 5$.

This defines a band around the diagonal in the $60 \times 60$ unit square. The total area where they do not meet within 5 minutes is the area outside this band, which is the union of two right triangles of side length 55. So, the probability that they arrive within 5 minutes of each other is:
$$
P(|x - y| < 5) = \frac{60^2 - 55^2}{60^2} = \frac{23}{144}
$$