import Home from "./Pages/Home";
import Create from "./Pages/Create";
import Navigation from "./Components/navigation";


import { Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    
      <div className="App">

          <Navigation />

            <Routes>

              <Route path="/" element = {<Home />}></Route>
              <Route path="/create" element = {<Create />}></Route>
              
            </Routes>
      

      </div>
   
  );
}

export default App;
