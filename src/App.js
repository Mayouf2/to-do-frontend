import React  , {useState ,useEffect }from 'react'
import ToDoList from "./component/ToDoList";
import Home from "./component/Home"
import Navbar  from './component/Navbar'
import {BrowserRouter , Link , Route , Routes} from "react-router-dom";
import NotFound from "./component/NotFound";
import "./Style.css"
import Login from "./component/Login"
import Signup from './component/Signup';
function App() {
  const [token, setToken] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("token");
    const initialValue = JSON.parse(saved);
    return initialValue ; });



  useEffect(() => {
    // storing input name
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);
  
  
  return (
    <div>
    <Navbar  token={token} setToken={setToken}/>
    <Routes>
      <Route  exact path="/" element={<Home />} />
      <Route exact path="/ToDoList"  element={ <ToDoList token={token}/>} />
      <Route exact path="*" element={<NotFound />} />
      <Route exact path="/Login" element={ <Login setToken={setToken}/>}/>
      <Route  exact path="/Signup" element={<Signup />} />

      </Routes>
    </div>
  );
}

export default App;
