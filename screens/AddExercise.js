import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from 'expo-checkbox';
import { exercises } from './ExerciseData.js'; 

const { width, height } = Dimensions.get('window');

// Custom Button Component
const CustomButtonMuscles = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.buttonMuscles}
    activeOpacity={0.7}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const CustomButtonEquipment = ({ onPress, title }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.buttonEquipment}
    activeOpacity={0.7}
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

const AddExercise = ({ navigation }) => {
  const handleMusclePress = () => {
    navigation.navigate('ChooseMusclesMan');
  };
  
  const handleEquipmentPress = () => {
    navigation.navigate('ChooseEquipment');
  };

  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState({});
  const [selectedMuscles, setSelectedMuscles] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const handlePress = (id) => {
    setIsChecked(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  const filteredExercises = exercises.filter(exercise => {
    const muscleMatch = selectedMuscles.length === 0 || exercise.muscles.some(muscle => selectedMuscles.includes(muscle));
    const equipmentMatch = !selectedEquipment || exercise.equipment === selectedEquipment;
    const searchTextMatch = exercise.title.toLowerCase().includes(text.toLowerCase());
    return muscleMatch && equipmentMatch && searchTextMatch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Choose exercises:</Text>
          <TextInput
            style={styles.input}
            placeholder="Search"
            onChangeText={setText}
            value={text}
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
            handlePress={() => handlePress(exercise.id)}
            image={exercise.image}
            title={exercise.title}
            isChecked={isChecked[exercise.id] || false}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonMuscles: {
    width: '42%',
    height: height * 0.06,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonEquipment: {
    width: '47%',
    height: height * 0.06,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: width * 0.04,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginLeft: 20,
    marginRight: 20,
  },
  exerciseContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
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
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
});

export default AddExercise;
