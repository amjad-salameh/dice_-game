import Instructurs from "./Instructurs";
import Start_target from "./Start_target";

function Menu_instructures({ setTarget, setShowGame }) {
  return (
    <div className="Menu_instructurs">
      <div className="title">
        <h2>Game instructures</h2>
        <Instructurs />
      </div>
      <h2>Please select the target</h2>
      <Start_target setShowGame={setShowGame} setTarget={setTarget} />
    </div>
  );
}

export default Menu_instructures;
