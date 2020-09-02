import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col } from 'react-bootstrap'
import MyCard from './MyCard'

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
         <MyCard src="https://www.ucamc.com/images/react_icon.png" title="1" text="1"/>
        </Col>
        <Col>
        <MyCard src="https://www.ucamc.com/images/react_icon.png" title="2" text="2"/>
        </Col>
        <Col>
        <MyCard src="https://www.ucamc.com/images/react_icon.png" title="3" text="3"/>
        </Col>
      </Row>

    </div>
  );
}

export default App;
