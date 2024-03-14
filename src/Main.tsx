import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CalculatorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});