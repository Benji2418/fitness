import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Dimensions, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const BuildPlans = ({navigation}) => {
  const handlePress = () => {
    navigation.navigate('AddExercise');
  };
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Choose Exercises:</Text>
            <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={setText} // Updates the state variable 'text' whenever the input changes
            value={text} // Binds the input value to the state variable 'text'
            />
        </View>
        <View style={styles.exerciseContainer}>
            <CustomButton onPress={handlePress} title="Add Exercises" />
        </View>
    </SafeAreaView>
  );
};
// Define the styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupies the full screen
    justifyContent: 'space-between', // Centers content vertically
    paddingHorizontal: 16,
  },
  exerciseContainer: {
    marginBottom: 20, // Adds some space at the bottom
    alignItems: 'center'
  },
  button: {
    width: '80%', // Width as a percentage of the container's width
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
  inputContainer: {
    marginTop: 20, // Adds space below the input container
  },
  label: {
    fontSize: 18, // Sets the font size for the label
    marginBottom: 8, // Adds space below the label
    marginLeft: 20, // Adds a margin to the left side
    marginRight: 20, // Adds a margin to the right side
  },
  input: {
    height: 40, // Sets the height for the input box
    borderColor: 'gray', // Sets the border color
    borderWidth: 1, // Sets the border width
    paddingHorizontal: 8, // Adds padding inside the input box
    marginLeft: 20, // Adds a margin to the left side
    marginRight: 20, // Adds a margin to the right side
  },
  displayText: {
    fontSize: 18, // Sets the font size for the display text
  },
});

// Export the component as default
export default BuildPlans;
