import "./Menu.css";
function Menu() {
  return (
    <div className="menu_container">
      <div className="menu_upper">
        <div>таймер</div>
        <button className="menu_button">New Game</button>
      </div>
      <div className="menu_bottom">
        <div className="menu_bottom_left">
          <div className="player_1">
            <span className="span_xo">X</span>
            <span className="span_players">Player 1</span>
          </div>
          <div className="player_2">
            <span className="span_xo">O</span>
            <span className="span_players">Player 2</span>
          </div>
        </div>
        <div className="menu_bottom_right">
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}

export default Menu;
