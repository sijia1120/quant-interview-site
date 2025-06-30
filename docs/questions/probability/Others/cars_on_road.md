---
id: cars_on_road
title: Cars on road 
sidebar_label: Cars on road
difficulty: easy
source: Red Book, Green Book
topics: []
tags: []
---

#### 📖 Q1: <p style={{ textAlign: "justify" }}> If the probability of observing at least one car on a highway during any 20-minute time interval is 609/625, then what is the probability of observing at least one car during any 5-minute time interval? Assume that the probability of seeing a car at any moment is uniform (constant) for the entire 20 minutes.  </p> 


Let's denote the probability of no car being observed during any 5-minute time interval as $p$.  Then, the probability of observing at least one car in a 5-minute interval is $1 - p$. Since the 20-minute interval consists of four consecutive 5-minute intervals, and the problem states that car observations are uniform and independent, the probability of observing no car during the entire 20 minutes is:

$$
P(\text{no car in 20 mins}) = p^4
$$

Therefore, the probability of observing at least one car in 20 minutes is:

$$
1 - p^4 = \frac{609}{625}
\Rightarrow p^4 = 1 - \frac{609}{625} = \frac{16}{625}
\Rightarrow p = \sqrt[4]{\frac{16}{625}} = \frac{2}{5}
$$

Hence, the probability of seeing at least one car during any 5-minute interval is: $1 - p = 1 - \frac{2}{5} = \boxed{\frac{3}{5}}$.