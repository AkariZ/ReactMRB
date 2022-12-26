import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function PageForm() {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // code to store the reservation goes here
  };

  const { formStyles, buttonStyles, textFieldStyles } = styles;

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        style={textFieldStyles}
      />
      <br />
      <TextField
        label="Hour"
        type="time"
        value={hour}
        onChange={(event) => setHour(event.target.value)}
        style={textFieldStyles}
      />
      <br />
      <TextField
        label="Name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={textFieldStyles}
      />
      <br />
      <Button type="submit" variant="contained" color="primary" style={buttonStyles}>
        Submit
      </Button>
    </form>
  );
}

const styles = {
  formStyles: {
    width: "50%",
    margin: "0 auto"
  },
  buttonStyles: {
    width: "100%"
  },
  textFieldStyles: {
    display: "block",
    width: "100%"
  }
};

export default PageForm;
