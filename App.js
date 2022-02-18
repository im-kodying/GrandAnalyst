import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SquareStyles from "./components/SquareStyles";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import { useWindowDimensions } from 'react-native';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
    const [chessboardSize, setChessboardSize] = useState(undefined);
    const { height, width } = useWindowDimensions();
  return (
      <Container fluid>
          <Row>
              <Col>1 of 2</Col>
              <Col>2 of 2</Col>
          </Row>
          <Row>
              <Col>1 of 3</Col>
              <Col>2 of 3</Col>
              <Col>3 of 3</Col>
          </Row>
      </Container>
  );
}
