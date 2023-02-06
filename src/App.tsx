import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
function App() {
  return (
    <div>
        <div>
      <Navbar className="nav-bar">
            <Nav className="me-auto">
                <Navbar.Brand href="#home">
                    <img
                        src="./logo.svg"
                        width="50"
                        height="30"
                        className="d-inline-block align-top"
                        alt="David logo"
                    />
                </Navbar.Brand>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
      </Navbar>
        </div>
        <div className="full-div">
            <p className="large-font">Hello,</p>
            <p>I'm David</p>
            <p>I &lt;code/&gt;</p>
        </div>
    </div>
  );
}

export default App;
