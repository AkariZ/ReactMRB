import React from "react";
import "../App.css";
import Clock from "../components/clock";
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Button from "../components/Button";
import { addUser } from "./userSlice";
import TextField from "../components/TextField";
import { Modal, Form, TimePicker } from "antd";

const PageForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: '',
    StartTime: '',
    EndTime: '',
  });

  const handleAddUser = () => {
    setValues({ name: '', email: '', StartTime: '', EndTime: '', });
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email,
      StartTime: values.StartTime,
      EndTime: values.EndTime
    }));
    
    Modal.confirm({
      title: "Are you sure?",
      content: "Are you sure you want to start booking?",
      okText: "Yes",
      okType: "primary",
      cancelText: "No",
      onOk() {
        // Use the push method from the history object to navigate to the PageHome component
        navigate("/");
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  return (
    <div className="App">
      <header className="header-form">
        <h1>Meeting Room</h1>
        <Clock />
      </header>
      <body className="App-form-body">
        <h1 className="App-Status2">Book a Meeting Room</h1>
        <div className="Form">
          <Form className="App-form" layout="vertical">

            <Form.Item label="Name" name="name" rules={[{ required: true }]} >
              <TextField
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Enter your name' }}
              /></Form.Item>

            <Form.Item label="Email" name="email" rules={[{ required: true, }]}>
              <TextField
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                inputProps={{ type: 'email', placeholder: 'Enter your email' }}
              /></Form.Item>

            <Form.Item label="Start time" name="starttime" rules={[{ required: true }]}>
              <TextField

                value={values.reservationTime}
                onChange={(e) => setValues({ ...values, StartTime: e.target.value })}
                inputProps={{ type: 'time', placeholder: 'Select a date' }}
              /></Form.Item>

<Form.Item label="End time" name="endTime" rules={[{ required: true }]}>
            <TextField 
          
              value={values.reservationTime}
              onChange={(e) => setValues({ ...values, EndTime: e.target.value })}
              inputProps={{ type: 'time', placeholder: 'Select a date' }}
            /></Form.Item>


            <Button onClick={handleAddUser}>Submit</Button>
          </Form>
        </div>
        <br />
      </body>
      <footer className="App-footer-form">Design Dolly Solution co,td</footer>
    </div>
  );
}

export default PageForm;
