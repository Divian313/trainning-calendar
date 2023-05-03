import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "./components/AppBar/AppBar";
import BoardBar from "./components/BoardBar/BoardBar";
import BoardContent from "./components/BoardContent/BoardContent";
import Week from "./components/Week/Week";

function App() {
  return (
    <>
      <div className="trello-master">
        {/* <AppBar /> */}
        <BoardBar>
          {" "}
          <Week />
        </BoardBar>

        <BoardContent />
      </div>
    </>
  );
}

export default App;
