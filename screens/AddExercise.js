import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Dimensions, Button, StyleSheet, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();

// Custom Button Component
const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.button}
    activeOpacity={0.7} // Adjusts the opacity of the button when pressed
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const AddExercise = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('BuildPlans');
  };

  return (
    <View style={styles.container}>
      <CustomButton onPress={handlePress} title="+ Build" />
    </View>
  );
};
// Define the styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupies the full screen
    justifyContent: 'flex-end', // Centers content vertically
    alignItems: 'flex-end', // Centers content horizontally
    paddingBottom: 16,
    paddingRight: 16
  },
  button: {
    width: '35%', // Width as a percentage of the container's width
    height: height * 0.07, // Height as a percentage of the device's height
    backgroundColor: '#007BFF', // Button background color
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    borderRadius: 10, // Rounded corners
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: width * 0.05, // Font size as a percentage of the device's width
  },
});

// Export the component as default
export default AddExercise;