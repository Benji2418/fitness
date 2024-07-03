import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from 'expo-checkbox'

const Stack = createStackNavigator();

const MuscleCheckBox = ({ handlePress, image, title, isChecked }) => (
  <View style={styles.equipmentContainer}>
      <TouchableOpacity 
        style={styles.touchable}
        onPress={handlePress}
        >
          <Text style={styles.muscleText}>{title}</Text>
          <CheckBox 
            value={isChecked}
            onValueChange={handlePress}
            style={styles.checkbox}
          />
      </TouchableOpacity>
  </View>
);

const ChooseMuscles = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <MuscleCheckBox
          onPress={handlePress}
          title="Chest" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Shoulders" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Triceps" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Middle Back" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Lower Back" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Lats" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Traps" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Biceps" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Forearms" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Quadriceps" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Hamstrings" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Glutes" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Calves" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Core" 
          isChecked="false"
        />
        <MuscleCheckBox
          onPress={handlePress}
          title="Neck" 
          isChecked="false"
        />
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
  muscleText: {
    fontSize: 18,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 15,
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
});

// Export the component as default
export default ChooseMuscles;
