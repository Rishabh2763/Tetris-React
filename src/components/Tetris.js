

import "./Tetris.css";
import Board from "./Board.js";
import {useBoard} from "../hooks/useBoard.js";
import GameStats from "./GameStats.js";
import {useGameStats} from "../hooks/useGameStats.js";
import Previews from "./Previews.js";

const Tetris=({rows,columns,setGameOver})=>{
  const [gameStats,addLinesCleared]=useGameStats();
  const[board,setBoard]=useBoard({rows,columns});
  const player={tetrominoes:[]}


  return (
    <div className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats}/>
      <Previews tetrominoes={player.tetrominoes}/>
      
    </div>

  );


};
export default Tetris;