import React from "react";
import "../App.css";
import Clock from "../components/clock";
import BTForm from "../components/BTForm";


function PageHome() {
    return (
        <div className="App">
        <header className='header-home'>
            <h1>Meeting Room</h1>       
            <Clock />
        </header >
        <body className="App-body">
          <div class="row">
            <br />
            <div className="App-Status">Available</div>
            <br />
              <div className="App-Patner ">
                <h2>Welcome Patner</h2>
                <h1 style={{ color: "Green" }}>02.00 - 03.00</h1>
                <h2>By. </h2>
               </div>
              <BTForm/>      
            <br />
          </div>
        </body>
        <footer className="App-footer-home">
          Design Dolly Solution co,td
        </footer>
      </div>
    
  );
}
  
  export default PageHome;