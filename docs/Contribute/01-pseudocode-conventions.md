# Pseudocode Conventions

Let's define some rules for pseudocode, so that we have a uniform understanding of what is happening whenever we write a piece of code.

You don't need to strictly copy each instruction/keyword as it is defined here.
However, the structure of your code should always follow the structure defined here.

- Indentations: Blocks are characterised by their indent.
- `if-[elseif]-else`-instructions are for conditional execution of instructions.
```
if <condition1> then do <instructions1>
elseif <condition2> then do <instructions2>
else do <instructions3>
```
- `for`-loops are for iterative execution of instructions, bound to a (stopping) condition.
```
for <variable> to/downto <value/expression> do <instructions>
```
or
```
for each <element> \in <set> do <instructions>
```
- `[do]-while`-loops are for iterative execution of instructions, bound to a (stopping) condition.
```
while <condition> do <instructions>
```
or
```
do <instructions>
while <condition>
```
- `//` initiates a comment
- Value assertion: Variables are assigned values with the operator `<_` and `=` is meant for comparing two expressions.
- All variables are defined locally, except it's stated otherwise.
- Field/set elements are indexed by square brackets and subfields/subsets by index ranges.
```
A[1]
A[i]
A[2..i]
```
- Array indices start from 1, except it's stated otherwise.
- `A.size` denotes the number of elements of an array `A`.
- Function parameters are passed as values (_call-by-value_) and the `&`-symbol signalises a _call-by-reference_.
- `return` or `error` statements lead to an immediate break of the called function and pass the result to the calling function.
