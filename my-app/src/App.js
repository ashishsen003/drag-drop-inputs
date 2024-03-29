import "./App.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Sidebar from "./components/sidebar/Sidebar";
import WorkingSide from "./components/workingSide/WorkingSide";

function App() {
  return (
    <div className="app">
      {/* App */}
      {/* <DragDropContext>
        <div style={{background: 'red', height: '80vh'}}>
          <Droppable>
            <div>
            </div>
          </Droppable>

          <Draggable>
            <button>Button-1</button>
            <button>Button-2</button>
          </Draggable>
          
        </div>
      </DragDropContext> */}
      <div className="working">
        <WorkingSide />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
