import "./App.css";
import TodoApp from "./component/anotherExample/TodoApp";
import ShowToDoData from "./component/etra/ShowToDoData";

function App() {
  return (
    <>
      <div className="app">
        {/* //!working correctly but not fully completed  */}
        {/* <TodoApp /> */}
        {/* //! completed  */}
        <ShowToDoData />
      </div>
    </>
  );
}

export default App;
