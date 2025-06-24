# Motif Discovery

!!! note "Motif"

    A reoccuring nucleotide sequence is an $(\ell, d)$-Motif if the sequence is of length $\ell$ and has at most $d$ mutations.

## Planted Motif Problem

You are given a set $S$ of sequences of the size $N$ and two ints $\ell, d$ with $d < \ell < N$.
Find a pattern $M$, such that in each sequence there is a substring that can be transformed to $M$ with at most $d$ substitutions.

!!! example "$(11,1)$-Motif"

    A**TCCTA GGCAGT** CCTGCA TTGTCT TGCGGA ATTGTA  
    TCCAGT CTATTT CAAACG G**TCCTA G*T*CAGT** GCTCTG  
    TTGAAT TTTCCT GTGTGG CTTCCT GTATAG AGGATA  
    GGTTA**T CCTAGG CAGT**AC AGCCCA CCCCAG AGTCGG  
    CGGGTG CACTCC AA**TCC*A* AGGCAG T**GCGGG CGGAAC  
    GTT**TCC TAGGCA *C*T**GGGT CAACGT TCCCAC AGAACG

    for the Motif `TCCTAGGCAGT`.

### Bruteforce Approach

- Let $S = S_1..S_m$ be a set of sequences
- Let $\mathrm{d}(S_i, M)$ be the minimal edit distance between the sequence $S_i$ and $M$ be a pattern.
- We will define a $\operatorname{Score}(M) = \sum_{i=1}^m \mathrm{d}(S_i, M)$ and try to find a Motif of a given length $\ell$ with a minimal score.

```
M_opt <_ AA..A
for pattern \in M from AA..A to TT..T do
    for i <_ 1 to m do
        d' <_ d(S_i,M)
        if d' > d then continue
        if Score(M) < Score(M_opt) then M_opt <_ M
return M_opt
```

But:

- Calculating $\mathrm{d}(S_i, M)$ for an $(\ell,d)$-Motif in a sequence of length $N$ takes $T_{\mathrm{d}(S_i, M)} = \bigO(Nd)$ time,
- With $m$ sequences, calculating $\operatorname{Score}(M)$ takes $T_{\operatorname{Score}(M)} = \bigO(mNd)$
- with a total of $4^\ell$ possible Motifs of length $\ell$ over an alphabet $\Sigma := \{\mathtt{A}, \mathtt{C}, \mathtt{G}, \mathtt{T}\}$ of nucleotides with $\vert\Sigma\vert = 4$,
- yielding a total runtime of $\bigO(4^\ell mNd)$.

So this is bad.

