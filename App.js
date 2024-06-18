import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Plans from './screens/Plans'; // Import your new screen
import BuildPlans from './screens/BuildPlans';
import AddExercise from './screens/AddExercise';
import ChooseMusclesMan from './screens/ChooseMusclesMan';
import ChooseEquipment from './screens/ChooseEquipment';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Plans" component={Plans}/>
        <Stack.Screen name="BuildPlans" component={BuildPlans} options={{ title: 'Build Plans' }}/>
        <Stack.Screen name="AddExercise" component={AddExercise} options={{ title: 'Add Exercises' }}/>
        <Stack.Screen name="ChooseMusclesMan" component={ChooseMusclesMan} options={{title: 'Choose Muscles'}}/>
        <Stack.Screen name="ChooseEquipment" component={ChooseEquipment} options={{title: 'Choose Equipment'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
