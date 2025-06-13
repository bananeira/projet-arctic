# Example student script structure

## Trivial formatting

This is a proposal of how a student script should look like.

If you intend to contribute, you may firstly copy this document and let the examples guide you through your writing process, if you're unsure with anything.

Let's start by doing some common things that you will most likely be doing if you are writing a script.

!!! note "Addition on Natural Numbers"
    
    This block would define how addition on natural numbers.

!!! example "Example for Addition on Natural Numbers"

    If you want to make an example for a concept that you have proposed earlier, you can use this box.

Of course, no statement naturally holds true without a proof.

!!! success "Proof for Addition on Natural Numbers"

    You can write a proof in this box.
    Here, it is okay to **not use a q.e.d. or $\square$**, since the box is isolated on its own.
    This means that the reader already knows where the proof is over.

If you want to prove a statement by delivering a counterproof, ...

!!! danger "Proof for Addition on Natural Numbers"

    ...you can do so in this box.
    The statement about the $\square$ of course holds true for this environment too.

This can help the reader to predetermine and understand your workflow quicklier.

All these boxes can be achieved by using the following syntax.
```
!!! <keyword> "<title>"

    text
```
where `<keyword>` is either

- `note` for a definition,
- `example` for an example,
- `success` for a proof,
- `danger` for a counterproof,
- `warning` for a remark.

!!! warning "Introduction of New Terms in Text"

    If you introduce a term that you haven't defined yet, it is nice to have it set to _italic_ until you do.
    This way, the not yet defined term will be highlighted and the reader will know that the specific term is pointed out and that they haven't missed anything.

## Mathematical writing

Of course, you can use $\LaTeX$ just as you are used to.
`$<inline content>$` invokes the inline math mode.
```
\[
    <block content>
\]
```
invokes the block math mode.
It is also possible to use the common math environments like
```
\begin{align*}
    a & = lign \\
    m & = e
\end{align*}
```
Let's try it out $\exists f,g\colon \NN \to \NN$, such that

\[ f(n) + g(n) = 2\,f(n) = 2\,g(n). \]

Let's also run through a few conventions to ensure a good quality of your $\LaTeX$ code.

- Mathematical statements are part of the sentence.
The sentence is to be structured in a way that it can still be read fluently.
Furthermore, if you have placed a mathematical statement with which the sentence ends, the mathematical statement will end with a full stop.
- Do not excessively abbreviate natural statements by using math symbols. This greatly decreases the reading flow.
- Use enough spacing between symbols.
Sometimes, just writing a large set of symbols back-to-back -- maybe even with different layers without spacing is hard to understand.
For instance:

\[
    \exists c > 0 \exists n_0 > 0 \forall n > n_0 : 0 \leq f(n) \leq cg(n) 
\]

``` TeX
\[
    \exists c > 0 \exists n_0 > 0 \forall n > n_0 : 0 \leq f(n) \leq cg(n) 
\]
```

vs.

\[
    \exists c > 0 \: \exists n_0 > 0 \: \forall n > n_0 \colon 0 \leq f(n) \leq c\,g(n).
\]

``` TeX
\[
    \exists c > 0 \: \exists n_0 > 0 \: \forall n > n_0 \colon 0 \leq f(n) \leq c\,g(n).
\]
```

Also notice that we've used a `\colon` intead of a `:`, enforcing correct spacing, since otherwise this symbol is interpreted as an operator.