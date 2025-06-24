# Example student script structure

## Trivial formatting

This is a proposal of how a student script should look like.

If you intend to contribute, you may firstly copy this document and let the examples guide you through your writing
process, if you're unsure with anything.

Let's start by doing some common things that you will most likely be doing if you are writing a script.

!!! note "Addition on Natural Numbers"

    This block would define how addition on natural numbers.
    This environment can also be used for theorems, or other statements that you want to highlight.

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

Of course, you can use $\LaTeX$ just as are used to.
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
  Furthermore, if you have placed a mathematical statement with which the sentence ends, the mathematical statement will
  end with a full stop.
- Do not excessively abbreviate natural statements by using math symbols. This greatly decreases the reading flow.
- Use enough spacing between symbols.
  Sometimes, just writing a large set of symbols back-to-back -- maybe even with different layers without spacing is
  hard to understand.
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

- Also notice that we've used a `\colon` intead of a `:`, enforcing correct spacing, since otherwise this symbol is
  interpreted as an operator.
- Constants and function names should be written in upright font, while variables and parameters should be written in
  italic font.  
  It is okay, however, not to use the upright font for function names that are one character long, like $f$ or $g$.

## Graphs and Diagrams

If you want to include a graph or a diagram, please refer to
the [reference for diagrams](https://squidfunk.github.io/mkdocs-material/reference/diagrams/).
You can use the `mermaid` syntax to create diagrams.
For instance, if you want to create a flowchart, you can use the following code:

```
graph LR
  start:::hidden --> A((start))
  A --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D(Debug);
  D --> C;
  D --> B;
  B ---->|No| E[Yay!];
  E --> F(((End)));
  
  classDef hidden display: none;
```

yielding the following diagram:

``` mermaid
graph LR
  start:::hidden --> A((start))
  A --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D(Debug);
  D --> C;
  D --> B;
  B ---->|No| E[Yay!];
  E --> F(((End)));
  
  classDef hidden display: none;
```

## Special markdown features

### Sub- and Superscript

We have prepared some markdown features that you can use to enhance your script.
For instance, you can sub- and superscript text by using the `^` and `_` symbols, respectively.
Different from $\LaTeX$, you have to wrap sub- and superscript indicators around the text you want to sub- or
superscript.
For instance, `H~2~O` will yield H~2~O and `E=mc^2^` will yield E=mc^2^.
Please only use this feature in exceptions, since it is not as clean as the $\LaTeX$ version.

### Footnotes

You can also use footnotes to provide additional information or references.
For instance, you can write `This is a footnote[^1]` to create a footnote with the text "This is a footnote" and a
reference number.
You can reference the footnote by using the `[^1]` syntax[^1].

[^1]: This is the footnote text.

### Highlighted Text

You can highlight text by using the `==` syntax.
For instance, `this is ==highlighted== text` will yield: this is ==highlighted== text.

### Callouts

You can use callouts to draw attention to specific parts of your text.
For instance, you can use the `!!!` syntax to create a callout box.
For instance, `!!! note "This is a note"` will yield:
!!! note "This is a note"

    This is a note.
    We have mentioned this earlier, but it is worth repeating.

### Automatic Symbol Replacements

To make your writing cleaner and more readable, we've prepared a number of automatic **text replacements**. These
convert common keyboard shortcuts into properly formatted mathematical symbols.

This means you don’t have to remember how to write symbols like “not equal” (≠) — just type `!=`, and it will be
replaced automatically.

|           Input | Replacement | Example                                                                                          |
|----------------:|:------------|:-------------------------------------------------------------------------------------------------|
|       `!` + `=` | ≠           | `a` + `!` + `=` + `b` → _a ≠ b_                                                                  |
|       `<` + `=` | ≤           | `x <` + `= y` → _x ≤ y_                                                                          |
|       `>` + `=` | ≥           | `n >` + `= 0` → _n ≥ 0_                                                                          |
|       `<` + `_` | ←           | `x <` + `_ y` → _x ← y_                                                                          |
|       `_` + `>` | →           | `f _` + `> g` → _f → g_                                                                          |
|            `--` | –           | En dash: `A -- B` → _A – B_ (requiring wrapping spaces, used for number ranges!)                 |
|           `---` | —           | Em dash: `A --- B` → _A — B_ (requiring wrapping spaces, used as dash for inserting ideas etc.!) |
| `.` + `.` + `.` | …           | `1, 2, 3` + `.` + `.` + `.` → _1, 2, 3…_                                                         |

You can also use $\LaTeX$-style commands -- they’ll be automatically replaced with the appropriate symbols:

|       Input | Symbol | Meaning                           |
|------------:|:-------|:----------------------------------|
|       `＼in` | ∈      | “is an element of”                |
|    `＼notin` | ∉      | “is not an element of”            |
|   `＼subset` | ⊂      | proper subset                     |
| `＼subseteq` | ⊆      | proper subset                     |
|   `＼supset` | ⊃      | proper subset                     |
| `＼supseteq` | ⊇      | proper subset                     |
| `＼emptyset` | ∅      | empty set                         |
|      `＼cup` | ∪      | union                             |
|      `＼cap` | ∩      | intersection                      |
|    `＼times` | ×      | Cartesian product / cross product |
|   `＼propto` | ∝      | proportional to                   |
|    `＼infty` | ∞      | infinity                          |
|   `＼forall` | ∀      | for all                           |
|   `＼exists` | ∃      | there exists                      |
|      `＼neg` | ¬      | logical not                       |
|     `＼land` | ∧      | logical and                       |
|      `＼lor` | ∨      | logical or                        |
|  `＼implies` | ⇒      | implies                           |
|      `＼iff` | ⇔      | if and only if                    |
|     `＼circ` | ∘      | circ symbol                       |

... and a few more.
Again, this is not for exhaustive usage, but rather for short convenience and especially **for pseudocode**.