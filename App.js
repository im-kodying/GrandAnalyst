import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SquareStyles from "./components/SquareStyles";

export default function App() {
  return (
    <View style={styles.container}>
      <h2>Move Options</h2>
      <SquareStyles boardWidth={1080} />
        <br />
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
