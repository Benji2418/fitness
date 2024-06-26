import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from 'expo-checkbox'
import { exercises } from './ExerciseData.js'; 

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();
// Custom Button Component
const CustomButtonMuscles = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.buttonMuscles}
    activeOpacity={0.7} // Adjusts the opacity of the button when pressed
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const CustomButtonEquipment = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.buttonEquipment}
    activeOpacity={0.7} // Adjusts the opacity of the button when pressed
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const CustomButtonExercises = ({ handlePress, image, title, isChecked }) => (
  <View style={styles.exerciseContainer}>
      <TouchableOpacity 
        style={styles.touchable}
        onPress={handlePress}
        >
          <Image
              source={image}
              style={styles.icons}
          />
          <Text style={styles.equipmentText}>{title}</Text>
          <CheckBox 
            value={isChecked}
            onValueChange={handlePress}
            style={styles.checkbox}
          />
      </TouchableOpacity>
  </View>
);


const AddExercise = ({navigation}) => {
  const handleMusclePress = () => {
    navigation.navigate('ChooseMusclesMan');
  };
  const handleEquipmentPress = () => {
    navigation.navigate('ChooseEquipment');
  };
  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  const filteredExercises = exercises.filter(exercise => {
    const muscleMatch = selectedMuscles.length === 0 || exercise.muscles.some(muscle => selectedMuscles.includes(muscle));
    const equipmentMatch = !selectedEquipment || exercise.equipment === selectedEquipment;
    return muscleMatch && equipmentMatch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Choose exercises:</Text>
            <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={setText} // Updates the state variable 'text' whenever the input changes
            value={text} // Binds the input value to the state variable 'text'
            />
        </View>
        <View style={styles.buttonContainer}>
            <View style={styles.buttonMuscles}>
                <CustomButtonMuscles onPress={handleMusclePress} title="Muscles" />
            </View>
            <View style={styles.buttonEquipment}>
                <CustomButtonEquipment onPress={handleEquipmentPress} title="Equipment" />
            </View>
        </View>
        {filteredExercises.map(exercise => (
          <CustomButtonExercises 
            key={exercise.id}
            handlePress={handlePress}
            image={exercise.image}
            title={exercise.title}
            muscles={exercise.muscles}
            equipment={exercise.equipment}
            isChecked={isChecked}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
// Define the styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Occupies the full screen
    paddingHorizontal: 16,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonMuscles: {
    width: '42%', // Width as a percentage of the container's width
    height: height * 0.06, // Height as a percentage of the device's height
    backgroundColor: '#007BFF', // Button background color
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    borderRadius: 10, // Rounded corners
  },
  buttonEquipment: {
    width: '47%', // Width as a percentage of the container's width
    height: height * 0.06, // Height as a percentage of the device's height
    backgroundColor: '#007BFF', // Button background color
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    borderRadius: 10, // Rounded corners
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: width * 0.04, // Font size as a percentage of the device's width
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
  exerciseContainer:{
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between'
  },
  icons: {
    marginLeft: 5,
    height: 60,
    width: 60,
  },
  checkbox: {
    marginRight: 20,
  },
  equipmentText: {
    fontSize: 15,
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
export default AddExercise;
