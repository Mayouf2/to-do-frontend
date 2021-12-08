import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Login({setToken}) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // you can use variable instded of state in this  case
  const Navigate = useNavigate();
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkLogin = async () => {
    try {
      const response = await axios.post("https://todolist-by-mayouf.herokuapp.com/login", {
        email: email,
        password: password,
      });
      setToken(response.data.token);
      console.log(response.data.token);

      Navigate("/ToDoList");
    } catch (error) {
      console.log(error);
    }
  };
    return (
        <div className="signUp">
       
            <label for="">Email</label>
            <input className="inputSignUp" type="text" name="username"   onChange={(e) => {
          changeEmail(e);
        }} />
            <label for="">Password</label>

            <input className="inputSignUp" type="password"   onChange={(e) => {
          changePassword(e);
        }} id="" name="password" />
            <Link  to={`/`}>
            <input className="btnLogIn" type="submit" name="submit" value="Log In"  onClick={() => {
          checkLogin();
        }} />
            </Link> <br />
            <label for="" className="newCustomer">New customer?  </label>
            <Link  to={`/signup`}>
            <button className="regBtn" >Register Now</button>
            </Link>
    </div>
    )
}
