# Prolog implementation of Dijkstra's Minimum Path algorithm
✍️📚 This program was made for studying purposes

## Context
* I was trying to figure out what is **"Logic Paradigm"** for the "Programing Languages" subject in college, and realized that i shoud learn **Prolog**

* At the same time, i was having the **"Graphs Theory"** subject in college too, so that's why i tryied to implement **Dijkstra's minimum path algorithm**.

## What i've learned
Prolog was a really new cool experience for me, where i've learned concepts like:
* **Pure functions** and deal with no side effects
* Diferences between **Imperative** and **Declarative** languages
* Logic and Functional paradigm
* Logic engine and Horn Clausules
* **Non-structured** programming

## How to use
write some edges at the start of file
first 2 atoms are graph vertex
the third atom is the module of the edge
```javascript
ar(a,b,140).
```
execute an query (SWI-Prolog)

```javascript
?- menorCaminhoEntreAeB(a, b, X)
```
it returns the minimum path between vertex a and b 🙂
