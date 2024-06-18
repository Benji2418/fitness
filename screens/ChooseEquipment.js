import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Dimensions, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();

const ChooseEquipment = () => {
  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Choose exercises:</Text>
            <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={setText} // Updates the state variable 'text' whenever the input changes
            value={text} // Binds the input value to the state variable 'text'
            />
        </View>
    </SafeAreaView>
  );
};
// Define the styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupies the full screen
    paddingHorizontal: 16,
  },
  inputContainer: {
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
export default ChooseEquipment;
