import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudent";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {}
      {show ? <ShowStudents /> : <AddStudent />}

      <button
        className="togglebtn"
        onClick={() => {
          setShow(!setShow);
        }}
      >
        {show ? "ADD a new student" : "Go to student list"}
      </button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
