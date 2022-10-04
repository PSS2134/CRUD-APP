import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Crud from "./crud";
import Update from "./crud/Update";

function App() {
  return (
    <div className="App">
     <ToastContainer/>
     <Routes>
       <Route exact path="/" component ={Crud}/>
       <Route exact path="/update/:id" component ={Update}/>
     </Routes>
    </div>
  );
}

export default App;