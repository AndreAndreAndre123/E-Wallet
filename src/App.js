import Home from "./Pages/Home";
import AddNewCardList from "./Components/AddNewCardForm"
import Navigation from "./Components/navigation";
import { Routes, Route, Switch } from "react-router-dom";
import "./style.css"



function App() {
  return (
    
      <div className="App">

          <Navigation />

            <Routes>

              <Route path="/" element = {<Home />}></Route>
              <Route path="/create" element = {<AddNewCardList />}></Route>
              
            </Routes>
    
            
            
      

      </div>
   
  );
}

export default App;
