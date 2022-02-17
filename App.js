import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SquareStyles from "./components/SquareStyles";
import {useState, useEffect} from "react";
import { useWindowDimensions } from 'react-native';

export default function App() {
    const [chessboardSize, setChessboardSize] = useState(undefined);
    const [selectedBoard, setSelectedBoard] = useState('PlayVsRandom');
    const { height, width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <SquareStyles boardWidth={width/2} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
