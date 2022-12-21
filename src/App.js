import "./App.css";
import Appheader from "./components/header";

import { Button, Card, Row, Col, Container, Navbar, jumbotron } from 'react-bootstrap';




function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Appheader />

        </header>
        <body className="App-body">
          <br />
          <div className="App-Status">ขนาดนี้ห้องยังว่าง</div>
          <br />
          
          <div className="App-Patner">
          <h2>Wellcome Patner</h2>
          <h1 >02.00 - 03.00</h1>
          <h2>By. </h2>
          </div>
          <button type="button" class="btn btn-success">กดเลบ</button>
           
        </body><br />
        <footer className="App-footer">
          Design Dolly Solution co,td
        </footer>
      </div>
    </>
  );
}

export default App;