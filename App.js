import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextComponent, View} from 'react-native';
import SquareStyles from "./components/SquareStyles";
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from "react";
import { useWindowDimensions } from 'react-native';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "react-bootstrap/Navbar";
import Logo from "./assets/GA.svg"
import ListGroup from "react-bootstrap/ListGroup";
import {ListGroupItem} from "react-bootstrap";

export default function App() {
    const [pgn, setPgn] = useState([]);
    let arr = pgn.reduce(function(result, value, index, array) {
        if (index % 2 === 0)
            result.push(array.slice(index, index + 2));
        return result;
    }, []);
    const list = arr.map((move, index) => <Row><Col>{index+1}.</Col><Col>{move[0]}</Col><Col>{move[1]}</Col></Row>);
    function addPgn(move){
        setPgn([...pgn, move]) //simple value
    }
  return (
      <>
          <Navbar bg="dark" variant="dark" sticky={"top"}>
          <Container>
              <Navbar.Brand href="#home">
                  <img
                      alt=""
                      src={Logo}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                  />{' '}
                  GrandAnalyst
              </Navbar.Brand>
          </Container>
      </Navbar>
      <Container fluid>
          <Row>
              <Col></Col>
              <Col><SquareStyles pgn={pgn} addPgn={addPgn}/></Col>
              <Col>{list}</Col>
          </Row>
      </Container>
          </>
  );
}
