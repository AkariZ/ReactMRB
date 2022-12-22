import { Button, Card, Row, Col, Container, Navbar, jumbotron } from 'react-bootstrap';

import "./App.css";
import Appheader from "./components/header";




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
            <div class="col-6">
              <div className="App-Status">ขนาดนี้ห้องยังว่าง</div>
              <br />
            </div>
            <div class="col-6">
              <div className="App-Patner ">
                <h2>Wellcome Patner</h2>
                <h1 style={{color: "Green"}}>02.00 - 03.00</h1>
                <h2>By. </h2>
              </div>
            </div>
           
            <a class="btn btn-success " href="./pages/From" role="button">BOOKNOW</a>
            <br />

          </div>
        </body><br />
        <footer className="App-footer">
          Design Dolly Solution co,td
        </footer>
      </div>
    </>
  );
}
