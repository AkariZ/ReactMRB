import React, { useState } from "react";
import "../App.css";
import Clock from "../components/clock";
import BTForm from "../components/BTForm";



function PageHome() {
  // Initialize the state with empty values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [room, setRoom] = useState("");

  // Callback function to update the state with the form values
  const updateFormValues = (formValues) => {
    setName(formValues.name);
    setEmail(formValues.email);
    setAttendees(formValues.attendees);
    setDate(formValues.date);
    setStartTime(formValues.startTime);
    setEndTime(formValues.endTime);
    setRoom(formValues.room);
  };

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
               <BTForm updateFormValues={updateFormValues} />     
            <br />
            {name && (
          <div className="App-Patner">
            <h2>Welcome {name}</h2>
            <h1 style={{ color: "Green" }}>{startTime} - {endTime}</h1>
            <h2>By. {email}</h2>
          </div>
        )}
          </div>
        </body>
        <footer className="App-footer-home">
          Design Dolly Solution co,td
        </footer>
      </div>   
  );
}
  
  export default PageHome;