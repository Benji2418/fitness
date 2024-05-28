import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fitness App</Text>
      <Image source={require("./assets/icon.png")} style={styles.icon}/>
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
  icon: {
    width: 200, // Specify the desired width
    height: 200, // Specify the desired height
  },
});
