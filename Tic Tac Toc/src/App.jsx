import React, { useState } from 'react';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const newBoard = [...board];

    if (winner || newBoard[i]) {
      return;
    }

    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <button 
        className="w-16 h-16 border border-gray-500"
        onClick={() => handleClick(i)}
      >
        {board[i]}
      </button>
    );
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-4">
        {board.map((square, index) => (
          <div key={index}>
            {renderSquare(index)}
          </div>
        ))}
      </div>
      <button 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
