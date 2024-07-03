import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, Dimensions, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from 'expo-checkbox'

const Stack = createStackNavigator();

const EquipmentCheckBox = ({ handlePress, image, title, isChecked }) => (
  <View style={styles.equipmentContainer}>
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

const ChooseEquipment = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SafeAreaView style={styles.container}>
        <EquipmentCheckBox
          onPress={handlePress}
          image={require('../assets/equipment_icons/dumbbell-icon.png')}
          title="Dumbbells" 
          isChecked="false"
        />
        <EquipmentCheckBox
          onPress={handlePress}
          image={require('../assets/equipment_icons/barbell-icon.png')}
          title="Barbells" 
          isChecked="false"
        />
        <EquipmentCheckBox
          onPress={handlePress}
          image={require('../assets/equipment_icons/kettlebell-icon.png')}
          title="Kettlebell" 
          isChecked="false"
        />
        <EquipmentCheckBox
          onPress={handlePress}
          image={require('../assets/equipment_icons/weight-plate-icon.png')}
          title="Plate" 
          isChecked="false"
        />
        <EquipmentCheckBox
          onPress={handlePress}
          image={require('../assets/equipment_icons/cable-icon.png')}
          title="Cables" 
          isChecked="false"
        />
        <EquipmentCheckBox
          onPress={handlePress}
          image={require('../assets/equipment_icons/machine-icon.png')}
          title="Machines" 
          isChecked="false"
        />
        <EquipmentCheckBox
          onPress={handlePress}
          image={require('../assets/equipment_icons/bodyweight-icon.png')}
          title="Bodyweight" 
          isChecked="false"
        />
        <EquipmentCheckBox
          onPress={handlePress}
          image={require('../assets/equipment_icons/cardio-icon.png')}
          title="Cardio" 
          isChecked="false"
        />
        <EquipmentCheckBox
          onPress={handlePress}
          image={require('../assets/equipment_icons/harness-icon.png')}
          title="Harness" 
          isChecked="false"
        />
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
