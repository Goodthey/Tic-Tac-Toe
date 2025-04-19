import PlayButton from "./PlayButton";
import "./Playfield.css";
import { useState } from "react";

function Playfield() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [move, setMove] = useState(true);

  const handleClick = (index: number) => {
    const newBoard = [...board];
    newBoard[index] = move ? "X" : "0";
    setBoard(newBoard);
    setMove(!move);
  };

  return (
    <div className="playfield_container">
      {board.map((cell, index) => (
        <PlayButton
          key={index}
          cell={cell}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
export default Playfield;
