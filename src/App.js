import { Button, Card, Row, Col, Container, Navbar, jumbotron } from 'react-bootstrap';

import "./App.css";
import Appheader from "./components/header";
import BTForm from './components/BTForm';


export default function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Appheader />
        </header>
        <body className="App-body">
          <div class="row">
            <br />
            <div className="App-Status">Available</div>
            <br />
              <div className="App-Patner ">
                <h2>Welcome Patner</h2>
                <h1 style={{ color: "blue" }}>02.00 - 03.00</h1>
                <h2>By. </h2>
               </div>
              <BTForm/>      
            <br />
          </div>
        </body>
        <footer className="App-footer">
          Design Dolly Solution co,td
        </footer>
      </div>
    </>
  );
}

