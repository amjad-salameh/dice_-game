import { useState } from "react";

import "./App.css";
import BackGround from "./components/BackGround";
import Menu_instructures from "./components/Menu_instructures/Menu_instructures";
import Game from "./components/Game/Game";

function App() {
  const [showGame, setShowGame] = useState("Menu_instructions");
  const [target, setTarget] = useState(0);
  return (
    <>
      <BackGround />
      {showGame == "Menu_instructions" ? (
        <Menu_instructures setShowGame={setShowGame} setTarget={setTarget} />
      ) : (
        <Game
          target={target}
          setTarget={setTarget}
          setShowGame={setShowGame}
          showGame={showGame}
        />
      )}
    </>
  );
}

export default App;
