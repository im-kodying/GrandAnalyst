import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextComponent, View} from 'react-native';
import SquareStyles from "./components/SquareStyles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import { useWindowDimensions } from 'react-native';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "react-bootstrap/Navbar";
import Logo from "./assets/GA.svg"

export default function App() {
    const [chessboardSize, setChessboardSize] = useState(undefined);
    const { height, width } = useWindowDimensions();
    //const [pgn, setPgn] = useState([]);
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
                  Grand Analyst
              </Navbar.Brand>
          </Container>
      </Navbar>
      <Container fluid>
          <Row>
              <Col></Col>
              <Col><SquareStyles/></Col>
              <Col></Col>
          </Row>
      </Container>
          </>
  );
}
