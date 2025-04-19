import "./PlayButton.css";

type PlayButtonProps = {
  cell: "X" | "O" | null;
  onClick: () => void;
};

const PlayButton: React.FC<PlayButtonProps> = ({ cell, onClick }) => {
  return (
    <button className="play_button" onClick={onClick}>
      <span>{cell}</span>
    </button>
  );
};

export default PlayButton;
