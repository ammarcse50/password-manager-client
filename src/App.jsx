import { useEffect, useState } from "react";
import Manager from "./components/Manager";
import Navbar from "./components/Navbar";
import PassStore from "./components/PassStore";
import axios from "axios";

const App = () => {
  // const [formdata, setFormdata] = useState([]);

 
  const handleUpdate = (id) => {
    console.log(id);

  
      
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
        <Manager ></Manager>
        <PassStore handleUpdate={handleUpdate}></PassStore>
      </div>{" "}
    </div>
  );
};

export default App;
