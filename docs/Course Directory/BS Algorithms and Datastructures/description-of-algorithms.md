# Description of Algorithms

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


Let's now take a look at a more formal version of this algorithm -- in pseudocode.
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