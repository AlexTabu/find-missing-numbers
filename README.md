## Getting Started

To run this pet project you must have **Node.js** pre-installed.

Open file FindMissingNumbers.js and adjust the array on line 58.

Open project root directory using your favorite terminal, and run

```bash
node FindMissingNumbers.js
```

Now you can see execution result in the terminal!

## About complexity

My function is based on a binary search algorithm, which works
well for sorted arrays of varying sizes. It`s time complexity
is O(n log n) where "n" is the length of the input sequence.

The final checks for missing numbers' positions in
the array have constant time complexity, so they don't affect
the overall complexity significantly.

The space complexity of the algorithm is O(1) because it uses
a constant amount of additional space to store variables
regardless of the input size.
