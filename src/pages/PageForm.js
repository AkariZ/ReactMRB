import React from "react";
import "../App.css";
import Clock from "../components/clock";
import { Form, Button, Input, Select, DatePicker, TimePicker, InputNumber, } from "antd";
import { Option } from "antd/es/mentions";

export default function PageForm() {
  return (
    <div className="App">
      <header className='header-form'>
            <h1>Meeting Room</h1>       
            <Clock />
        </header >
      <body className="App-form-body">
        <h1 className="App-Status2">Book a Meeting Room</h1>
        <div className="Form">
          
          
          <Form className="App-form" layout="vertical">
          <Form.Item label="Special requests (optional)" name="requests">
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
      <footer className="App-footer-form">
        Design Dolly Solution co,td
      </footer>
    </div>
  );
}
