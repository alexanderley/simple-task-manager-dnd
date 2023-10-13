// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1>Todos Applikation</h1>
//       <div className="stepContainer">
//         <div className="step">
//           <h3>Todo</h3>
//           <div className="taskContainer">
//             <div className="task">Changing styles</div>
//             <div className="task">Addapt fonts</div>
//           </div>
//         </div>
//         <div className="step">
//           <h3>In Progress</h3>
//           <div className="taskContainer">
//             <div className="task">SEO</div>
//             <div className="task">Research</div>
//             <div className="task">Progress</div>
//             <div className="task">Performance Test</div>
//             <div className="task">Client test</div>
//             <div className="task">Waiting aprovement</div>
//           </div>
//         </div>
//         <div className="step">
//           <h3>Done</h3>
//           <div className="taskContainer">
//             <div className="task">Design</div>
//             <div className="task">Figma files</div>
//             <div className="task">Setting Boards</div>
//           </div>
//         </div>
//         <div className="step">
//           <h3>Approved</h3>
//           <div className="taskContainer">
//             <div className="task">Concept creation</div>
//             <div className="task">Layouts</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Define an array of tasks
  const tasks = [
    {
      id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
      step: "Todo",
      items: [
        { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "Change Fonts" },
        { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Adapt CSS" },
        {
          id: "cafebeef-1234-5678-9abc-def012345678",
          name: "Customize Layout",
        },
      ],
    },
    {
      id: "487f68b4-1746-438c-920e-d67b7df46247",
      step: "In Progress",
      items: [
        { id: "deadbeef-abcd-1234-5678-badcoffeebadc0", name: "Check Changes" },
        {
          id: "25daffdc-aae0-4d73-bd31-43f73101e7c05",
          name: "Create Styles",
        },
      ],
    },
    {
      id: "abcdef12-34ab-cdef-5678-901234567890",
      step: "Done",
      items: [
        {
          id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
          name: "Designing Data",
        },
        { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits" },
      ],
    },
    {
      id: "98765432-abcdef-1234-abcd-567812345abc",
      step: "Approved",
      items: [
        {
          id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc",
          name: "Approve with customer",
        },
        { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Final Call" },
      ],
    },
  ];

  return (
    <>
      <h1>Todos Application</h1>
      <div className="stepContainer">
        {tasks.map((taskGroup) => (
          <div className="step" key={taskGroup.id}>
            <h3>{taskGroup.step}</h3>
            <div className="taskContainer">
              {taskGroup.items.map((task, taskIndex) => (
                <div className="task" key={task.id}>
                  {task.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
