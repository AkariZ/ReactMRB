import React from "react";
import "../App.css";
import Appheader from "../components/header";
import { Form, Button, Container } from "react-bootstrap";

export default function PageForm() {
  return (
    <div className="App">
      <header className="App-header">
        <Appheader />
      </header>
      <body className="App-form-body">
        <Container>
          <br />
          <div className="App-Status">Book a Meeting Room</div>
          <br />
          <br /><br /><br />
          <Form className="App-form">
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Number of attendees</Form.Label>
              <Form.Control type="number" placeholder="Enter the number of attendees" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of meeting</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group>
              <Form.Label>End time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Special requests (optional)</Form.Label>
              <Form.Control as="textarea" rows="4" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Start booking
            </Button>
          </Form>
          <br />
        </Container>
      </body>
      <footer className="App-footer">
        Design Dolly Solution co,td
      </footer>
    </div>
  );
}
