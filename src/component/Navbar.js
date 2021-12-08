import React from 'react'
import ToDoList from './ToDoList'
import { Link } from 'react-router-dom'

export default function Home({token , setToken}) {

    return (
        <div className="Navbar">
        {(token)?(
            <ul className="ul1">
            <li className="w3-button w3-inline w3-black" id="ccvv"><Link id="ccvv" className="homelink" to="/">Home </Link></li>
            <li className="w3-button w3-inline w3-black" id="NavbarTitle"><Link  to="/ToDoList">tasks</Link></li>
            <li className="w3-button w3-inline w3-black" id="NavbarTitle"><Link  to="/" onClick={()=>{setToken("")  
             }}>log out</Link></li>

            </ul>
            
         
        ):(
            <ul>
            <li className="w3-button w3-inline w3-black" id="ccvv"><Link id="ccvv" className="homelink" to="/">Home </Link></li>
            <li className="w3-button w3-right w3-black" id="NavbarTitle"> <Link className="link" to="/login">login</Link></li>
            <li className="w3-button w3-right w3-black" id="NavbarTitle"><Link className="link" to="/signUp">signUp</Link></li>
            </ul>
        )}
         
       
        </div>
    )
}
