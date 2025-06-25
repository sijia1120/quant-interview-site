---
id: calculus-linear-algebra
title: Calculus & Linear Algebra
sidebar_label: Calculus & Linear Algebra
slug: /learning/math_learning/calculus-linear-algebra
---

### 📘 L'Hospital's Rule

L'Hospital's Rule is a technique used in calculus to evaluate limits that result in **indeterminate forms**, such as:

- $\frac{0}{0}$
- $\frac{\infty}{\infty}$

---

#### 🧠 Statement

Suppose that functions $f(x)$ and $g(x)$ are differentiable in a neighborhood around $x \to a$, and that:

- $\lim_{x \to a} f(x) = 0$ and $\lim_{x \to a} g(x) = 0$, **or**
- $\lim_{x \to a} f(x) = \pm\infty$ and $\lim_{x \to a} g(x) = \pm\infty$

and that $g'(x) \neq 0$ near $x = a$ (except possibly at $x = a$), and the limit:

$$
\lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

exists (or is $\infty$ or $-\infty$), then:

$$
\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}
$$

This converts an **indeterminate form** into a **determinate one**, allowing us to compute it more easily.

---

#### 📚 Example

Evaluate the limit:

$$
\lim_{x \to \infty} \frac{e^x}{x^2}
$$

Both numerator and denominator approach $\infty$, so we apply L'Hospital's Rule:

$$
= \lim_{x \to \infty} \frac{(e^x)'}{(x^2)'} = \lim_{x \to \infty} \frac{e^x}{2x} = \infty
$$

---

#### 🔗 Related Topics

- [Limits](/docs/learning/calculus/limits)
- [Indeterminate Forms](/docs/learning/calculus/indeterminate-forms)