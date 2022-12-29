import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Clock from "../components/clock";
import { Form, Button, Input, Select, DatePicker, TimePicker, InputNumber, Modal } from "antd";
import { Option } from "antd/es/mentions";



function PageForm({ updateFormValues }) {
 
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the form values to the callback function
    updateFormValues({
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      attendees: event.target.elements.attendees.value,
      date: event.target.elements.date.value,
      startTime: event.target.elements.startTime.value,
      endTime: event.target.elements.endTime.value,
      room: event.target.elements.room.value,
    });
    // Display a confirmation dialog
    Modal.confirm({
      title: "Are you sure?",
      content: "Are you sure you want to start booking?",
      okText: "Yes",
      okType: "primary",
      cancelText: "No",
      onOk() {
        // Use the push method from the history object to navigate to the PageHome component
        navigate.push("/");
      },
      onCancel() {
        console.log("Cancel");
      },
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
                <Form className="App-form" layout="vertical" onSubmit={handleSubmit}>
                  <Form.Item label="Meeting topics" name="topics" rules={[{ required: true }]}>
                    <Input.TextArea rows={1} />
                  </Form.Item>
                  <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                    <Input placeholder="Enter your name" />
                  </Form.Item>
                  <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
                    <Input placeholder="Enter your email" />
                  </Form.Item>
                  <Form.Item label="Number of attendees" name="attendees" rules={[{ required: true }]}>
                    <InputNumber placeholder="Enter the number of attendees" />
                  </Form.Item>
                  <Form.Item label="Date of meeting" name="date" rules={[{ required: true }]}>
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item label="Start time" name="startTime" rules={[{ required: true }]}>
                    <TimePicker style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item label="End time" name="endTime" rules={[{ required: true }]}>
                    <TimePicker style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item label="Meeting room" name="room" rules={[{ required: true }]}>
                    <Select placeholder="Select a meeting room">
                      <Option value="room1">Room 1</Option>
                      <Option value="room2">Room 2</Option>
                      <Option value="room3">Room 3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Start booking
                    </Button>
                  </Form.Item>
                </Form>
              </div>
              <br />
            </body>
            <footer className="App-footer-form">Design Dolly Solution co,td</footer>
          </div>
        );
      }
      
      export default PageForm;
      