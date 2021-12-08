import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const MoveTopage =()=>{
        console.log("hhhi")
    }
    return (
       
    
              <div className="w3-display-middle w3-center" id="Bg">
                  <hr />
                  <h1 className="w3-xxxlarge" id="TODOLISTTITLE"><b>TO DO LIST</b></h1>
    <h6>Welcome to the our  <span className="w3-tag">WebSite♡</span></h6>
    {/* <span className="w3-display-middle w3-center" id="pageTitle">To Do<br/>List</span> */}
    <div className="w3-display-left w3-padding-large">
      <h1 className="w3-text-white">Log in To make your Own</h1>
      <h1 className="w3-jumbo w3-text-white w3-hide-small"><b>To Do List</b></h1>
      {/* <h6><button class="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off" onclick={() => {
          MoveTopage();
        }}>Login</button></h6> */}
                    <li className="w3-button w3-right w3-yellow" id="NavbarTitle"> <Link className="link" to="/login">login</Link></li>

      </div>
  
  </div>


    

        
    )
}
