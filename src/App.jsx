import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Todos Applikation</h1>
      <div className="stepContainer">
        <div className="step">
          <h3>Todo</h3>
          <div className="taskContainer">
            <div className="task">Changing styles</div>
            <div className="task">Addapt fonts</div>
          </div>
        </div>
        <div className="step">
          <h3>In Progress</h3>
          <div className="taskContainer">
            <div className="task">SEO</div>
            <div className="task">Research</div>
            <div className="task">Progress</div>
            <div className="task">Performance Test</div>
            <div className="task">Client test</div>
            <div className="task">Waiting aprovement</div>
          </div>
        </div>
        <div className="step">
          <h3>Done</h3>
          <div className="taskContainer">
            <div className="task">Design</div>
            <div className="task">Figma files</div>
            <div className="task">Setting Boards</div>
          </div>
        </div>
        <div className="step">
          <h3>Approved</h3>
          <div className="taskContainer">
            <div className="task">Concept creation</div>
            <div className="task">Layouts</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
