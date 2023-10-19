import React, { useState } from "react";
import "./App.css";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DATA = [
  {
    id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
    draft: "Todo",
    tasks: [
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
    draft: "In Progress",
    tasks: [
      { id: "deadbeef-abcd-1234-5678-badcoffeebadc0", name: "Check Changes" },
      {
        id: "25daffdc-aae0-4d73-bd31-43f73101e7c05",
        name: "Create Styles",
      },
    ],
  },
  {
    id: "abcdef12-34ab-cdef-5678-901234567890",
    draft: "Done",
    tasks: [
      {
        id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
        name: "Designing Data",
      },
      { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits" },
    ],
  },
  {
    id: "98765432-abcdef-1234-abcd-567812345abc",
    draft: "Approved",
    tasks: [
      {
        id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc",
        name: "Approve with customer",
      },
      { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Final Call" },
    ],
  },
];

function App() {
  const [drafts, setDrafts] = useState(DATA);

  const handleDragDrop = (results) => {
    console.log("Results: ", results);

    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "column") {
      const reordereddraft = [...drafts];
      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedDraft] = reordereddraft.splice(sourceIndex, 1);

      reordereddraft.splice(destinationIndex, 0, removedDraft);

      return setDrafts(reordereddraft);
    }
  };

  return (
    <>
      <h1>Todos Application</h1>
      <div className="draftContainer">
        <DragDropContext onDragEnd={handleDragDrop}>
          <Droppable droppableId="ROOT" type="column" direction="horizontal">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flexRow"
              >
                {drafts.map((draftGroup, index) => (
                  <Draggable
                    draggableId={draftGroup.id}
                    key={draftGroup.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                      >
                        <div className="draft" key={draftGroup.id}>
                          <h3>{draftGroup.draft}</h3>
                          <div className="taskContainer">
                            {draftGroup.tasks.map((draft) => (
                              <div className="task" key={draft.id}>
                                {draft.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}

function TasksList({ name, tasks, id }) {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}></div>
      )}
    </Droppable>
  );
}

export default App;
