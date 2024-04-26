import Manager from "./components/Manager";
import Navbar from "./components/Navbar";
import PassStore from "./components/PassStore";

const App = () => {
  return (
    <div>
      
       <Navbar></Navbar>

      <div className="max-w-6xl mx-auto">
      
        <Manager></Manager>
        <PassStore></PassStore>
      </div>{" "}
    </div>
  );
};

export default App;
