import AddToDo from "./components/AddToDo";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
};

export default App;
