# Description of Algorithms

## Establishing basic terms and concepts

Firstly, we need to characterise the term algorithm and related terms.

!!! note "Problem"

    The term _problem_ defines an input --- output-relation.

!!! example "Example for a problem"

    Consider the following problem:

    - **Input:** A natural number $n$.
    - **Output:** The number of prime factors (with multiplicity) of this natural number.

!!! note "Instance"

    An _intance_ means a possible input value for a given problem.

!!! example "Example Instance"

    For the problem we have just defined, the value $16$ is an instance.

!!! note "Algorithm"

    An _algorithm_ means a sequence of predefined (elementary) instructions that solve a given problem.
    
!!! example "Example Algorithm for the Given Problem"
 
    1. Start with the given number $n$.
    2. For each prime number $p$ smaller than $n$ do:
        1. While $n$ is divisible by the number $p$, divite it, count the divisions and update the result
    3. The number of divisions you have gathered by the end is the number we are looking for.
    4. Return this number.


Let's now take a look at a more formal version of this algorithm --- in pseudocode.
We use pseudocode to get closer to real programming without giving up all the advantages of natural language.

```
COUNT-PRIME-FACTORS( n \in \NN )
    \ell <_ 0
    for p <_ 2 to n do
        while n mod p = 0 do
            n <_ n / p
            \ell <_ \ell + 1
    return \ell
```

Now we have our first pseudocode algorithm that we will stick to for the next few sections.

## Analysis of algorithms

It's almost obvious that we can't just write algorithms without knowing whether/how they behave the way we want them to.
Especially when they're more complex.

In this section, we will discover the fundamental aspects of analysing algorithms.

Firstly, we need to prove that the algorithm we have just proposed yields the expected results **for any instance**.
Then, to conclude the analysis, we will check the runtime, as this is a crucial factor to consider when deploying algorithms in practical use.

### Correctness of an algorithm

Sometimes, straight forward approaches for simple problems can be directly evaluated and don't need a separate proof of correctness.
Take, for example

```
HELLO-WORLD( n \in \NN )
    if n = 1 then print( "dandy!" )
    if n = 2 then print( "fantastic!" )
    if n = 3 then print( "lighten up, buttercup!" )
    else do print( "give me a smaller number" )
```

On the first look, we can see what the code does.
But if we introduce loops, like the `COUNT-PRIME-FACTOR` function does, the complexity and straightforwardness can vanish quickly.

Therefore, we need some references and tools to see through the calculations that the algorithm does, so that we will have well-founded arguments for the correctness in each layer of the code.

!!! note "Loop invariant"

    A loop invariant is a property that holds true **before and after** each iteration of a loop and, **after** the whole loop during the execution of an algorithm.

!!! note "Loop invariant proof"

    A _loop invariant proof_ is a standard technique for demonstrating the correctness of an algorithm that uses loops.
    To prove correctness using a loop invariant, we proceed in three steps:
    
    - **Initialisation**: We show that the invariant holds before the first iteration of the loop.
    - **Maintenance**: We show that **if the invariant holds before an iteration**, it still holds after executing the body of the loop.
    - **Termination**: We argue that when the loop finishes (i.$\,$e. the stopping criterion is met), the invariant, together with the termination condition, implies that the algorithm has correctly solved the (sub-)problem.

    This structure ensures that the invariant truly describes a property that is preserved throughout the execution of the loop and that, at the end, it implies the desired result.

In the example of `COUNT-PRIME-FACTORS`, we will use two loop invariants --- one for the outer `for`-loop and one for the inner `while`-loop, since the algorithm is based on two nested loops, each of which must behave correctly.

!!! warning "Remark"
    
    Establishing initialisation and maintenance proves a **partial correctness** of the loop.
    Establishing termination proves the **total correctness**.

!!! success "Loop invariant proof for `COUNT-PRIME-FACTORS`"

    **Initialisation**: Initially, `\ell <_ 0` and `n` is the original input number.
    Since no prime factors have been considered yet, this is consistent with our intended semantics.

    **Invariant of the `for`-loop**: At the beginning of each iteration with a given `p`, the following holds:
    
    - The current `n` is equal to the original input divided by all prime factors less than `p`, with their correct multiplicities removed.
    - `\ell` is the total number of prime factors (counted with multiplicity) removed so far.

    **Maintenance for the `for`-loop**: Within an iteration for a fixed `p`, the `while`-loop ensures that all occurrences of `p` are removed from `n`, and `\ell` is incremented accordingly.
    After completing the `while`-loop, no further division by `p` is possible, and all prime factors `<= p` have been accounted for.
    Thus, the invariant holds for the next `p`.

    **Invariant of the `while`-loop**: During the execution of the `while`-loop for a fixed `p`, the following holds:
    
    - At the start of each iteration, `p` divides `n`.
    - `\ell` correctly counts the number of times `p` has been divided out so far, in addition to the counts for smaller prime factors.

    **Maintenance for the `while`-loop**: In each iteration, `n` is divided by `p` and `\ell` is incremented by `1`.
    As long as `n` remains divisible by `p`, this process continues.
    Once `n` is no longer divisible by `p`, the `while`-loop terminates, and all instances of `p` have been removed from `n`.

    **Termination**: The `for`-loop terminates when `p > n`.
    At that point:
    
    - All prime factors of the original input have been removed.
    - `\ell` equals the number of prime factors (with multiplicity) of the input number.

    Therefore, `COUNT-PRIME-FACTORS` correctly returns the number of prime factors of the input number, counted with multiplicity.

Admittedly, loop invariant proofs are not very comfortable to perform and require a good intuition.

To build this intuition, we will consider a more technical example.

Consider the following algorithm, where `A` is an input array with `A[i]; i \in \NN, A[i] \in \NN`.
```
AVERAGE( A )
    result <_ 0
    for i <_ 1 to A.length do
        result <_ ((i-1) \cdot result + A[i]) / i
    return result
```

Generally, when you're given an algorithm and need to find out what it's doing, it helps to manually run a few instances through the algorithm.
We've already found out what the algorithm does, but feel free to confirm this yourself.

The algorithm calculates the average of all elements in an array of natural numbers.

Now we're specifying a suitable loop invariant:

**Loop invariant**: Let $N$ be the length of the array.
In any given iteration, $i \in \NN$, `result` reflects the average of the subfield `A`$_{1..i}$.

!!! success "Loop invariant proof for `AVERAGE`"

    Let $A = \NN^N$ and $N \in \NN$ as defined above.
    Let $A_j$ with $j \in \NN, j \leq N$ be a specific field element, $A_{k..\ell}$ with $k,\ell \in \NN, k \leq \ell \leq N$ a subfield of $A$ and $A_\sqcup = A_{k..\ell}$ for $k > \ell$.

    In line 1, `0` is allocated to `result` and we're looking at $A_\sqcup$.
    The average of the empty field $A_\sqcup$ is 0, thus is correctly represented by `result`.
    
    **Initialisation**: Let the counter be $i := 1$.
    Then we consider $A_{1..1}$ and
    
    \[
        \mathtt{result'} := ((i-1) \cdot \mathtt{result} + A_i)/i = (0 \cdot \mathtt{result}) = A_i = \operatorname{avg}\{A_i\}
    \]

    **Iteration**: Let $\operatorname{avg}\{A_{1..i}\}$ be the average of an arbitrary subfield $A_{1..i}$ and $\operatorname{avg}\{A_{1..i}\} = \mathtt{result}$.
    Now, let $\operatorname{avg}\{A_{1..i} \cup \{n\}\}$ be the average of a subfield $A_{1..i} \cup \{n\}$ and $\mathtt{result'}$ the result of the $(i+1)$-th `for`-iteration.
    We want to show that $\mathtt{result'} = \operatorname{avg}\{A_{1..i} \cup \{n\}\}$.
    
    For the $(i+1)$-th `for`-iteration, we get

    \[
        \mathtt{result'} = \frac{((i+1)-1)\cdot\mathtt{result}+A_{i+1}}{i + 1}=\frac{i\cdot\left(1/i \sum_{\ell=0}^i A_\ell\right) + A_{i+1}}{i+1} = \frac{\sum_{\ell=0}^i A_\ell + A_{i+1}}{i+1} = \frac{\sum_{\ell=0}^{i+1} A_\ell}{i + 1} = \operatorname{avg}\{A_{1..i} \cup \{n\}\}
    \]

    **Termination**: This is also the exact result that is returned by our algorithm.
    Thus, the algorithm achieves the desired (iterative calculation of the average of all elements in an array).

If you have understood what is happening here, you're doing very well.
Don't be afraid to spend some more minutes in understanding this concept, as it's a crucial tool for later in this script (and in probably any exam you will be writing about this topic).