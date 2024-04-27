
import Manager from "./components/Manager";
import Navbar from "./components/Navbar";

const App = () => {
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
        <Manager ></Manager>
      
      </div>{" "}
    </div>
  );
};

export default App;
