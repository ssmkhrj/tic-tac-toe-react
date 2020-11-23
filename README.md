# Tic Tac Toe

If you're new to React and want a quick overview of the library, then following [this](https://reactjs.org/tutorial/tutorial.html) tutorial on their official website could really be helpful. The tutorial explains how to build a tic-tac-toe game using React and there are some [further improvements](https://reactjs.org/tutorial/tutorial.html#wrapping-up) that are left as an exercise to the readers. Here I am going to explain my solution to those listed improvements.

# Usage

```bash
git clone https://github.com/ssmkhrj/tic-tac-toe-react.git
cd tic-tac-toe-react
npm install
npm start
```

# Starter Code

[This](https://codepen.io/gaearon/pen/gWWZgR?editors=0010) is where the official React tutorial ended. So, we will be starting from here onwards.

## 1. Display the location for each move

In this improvement we need to add the location where the move occurred along with the move number. So, if our first move is at square `(1,1)`, then our button should say `Go to #1 At: (1,1)`.

Following are the changes that we make in order to achieve this:

- In the `Game` component every item in the `history` state stores a snapshot of the board which is stored in the `squares` property. In addition to the `squares` property we add a `location` property to store the location where the move was made. So our state now looks like this:

```js
this.state = {
  history: [
    {
      squares: Array(9).fill(null),
      location: null,
    },
  ],
  stepNumber: 0,
  xIsNext: true,
};
```

- Then we modify the `handleClick` method to update the location accordingly. We make use of the `i` parameter to get the location at which the click happened, but since `i` is the one-dimensional index we need to break it down into row and column position. So our `handleClick` method now looks like this.

```js
handleClick(i) {
  ...
  const row = Math.floor(i / 3) + 1;
  const col = (i % 3) + 1;
  this.setState({
    history: history.concat([
      {
        squares: squares,
        location: `(${row},${col})`,
      },
    ]),
    ...
  });
}
```

- Finally we update the `render` method to display the location. This how it looks after the update.

```js
render() {
    ...
    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move} At: ${step.location}`
        : "Go to game start";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    ...
}
```

This is how the buttons look now:
![Improvement-1](README-Imgs/improvement-1.png)
