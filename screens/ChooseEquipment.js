import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Dimensions, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from 'expo-checkbox'

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();

const ChooseEquipment = () => {
  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.equipmentContainer}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={handlePress}
            >
            <Image
                source={require('../assets/equipment_icons/dumbbell-icon.png')}
                style={styles.icons}
            />
            <Text style={styles.equipmentText}>Dumbbells</Text>
            <CheckBox 
              value={isChecked}
              onValueChange={handlePress}
              style={styles.checkbox}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.equipmentContainer}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={handlePress}
            >
            <Image
                source={require('../assets/equipment_icons/barbell-icon.png')}
                style={styles.icons}
            />
            <Text style={styles.equipmentText}>Barbells</Text>
            <CheckBox 
              value={isChecked}
              onValueChange={handlePress}
              style={styles.checkbox}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.equipmentContainer}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={handlePress}
            >
            <Image
                source={require('../assets/equipment_icons/kettlebell-icon.png')}
                style={styles.icons}
            />
            <Text style={styles.equipmentText}>Kettlebell</Text>
            <CheckBox 
              value={isChecked}
              onValueChange={handlePress}
              style={styles.checkbox}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.equipmentContainer}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={handlePress}
            >
            <Image
                source={require('../assets/equipment_icons/cable-icon.png')}
                style={styles.icons}
            />
            <Text style={styles.equipmentText}>Cables</Text>
            <CheckBox 
              value={isChecked}
              onValueChange={handlePress}
              style={styles.checkbox}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.equipmentContainer}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={handlePress}
            >
            <Image
                source={require('../assets/equipment_icons/machine-icon.png')}
                style={styles.icons}
            />
            <Text style={styles.equipmentText}>Machines</Text>
            <CheckBox 
              value={isChecked}
              onValueChange={handlePress}
              style={styles.checkbox}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.equipmentContainer}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={handlePress}
            >
            <Image
                source={require('../assets/equipment_icons/bodyweight-icon.png')}
                style={styles.icons}
            />
            <Text style={styles.equipmentText}>Bodyweight</Text>
            <CheckBox 
              value={isChecked}
              onValueChange={handlePress}
              style={styles.checkbox}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.equipmentContainer}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={handlePress}
            >
            <Image
                source={require('../assets/equipment_icons/cardio-icon.png')}
                style={styles.icons}
            />
            <Text style={styles.equipmentText}>Cardio</Text>
            <CheckBox 
              value={isChecked}
              onValueChange={handlePress}
              style={styles.checkbox}
            />
          </TouchableOpacity>
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
  equipmentContainer:{
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  icons: {
    marginLeft: 10,
    height: 40,
    width: 40,
  },
  checkbox: {
    marginRight: 20,
  },
  equipmentText: {
    fontSize: 18,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
});

// Export the component as default
export default ChooseEquipment;
