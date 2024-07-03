import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Plans from './screens/Plans'; // Import your new screen
import BuildPlans from './screens/BuildPlans';
import AddExercise from './screens/AddExercise';
import ChooseMusclesMan from './screens/ChooseMuscles';
import ChooseEquipment from './screens/ChooseEquipment';
import ChooseMuscles from './screens/ChooseMuscles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Plans" component={Plans}/>
        <Stack.Screen name="BuildPlans" component={BuildPlans} options={{ title: 'Build Plans' }}/>
        <Stack.Screen name="AddExercise" component={AddExercise} options={{ title: 'Add Exercises' }}/>
        <Stack.Screen name="ChooseMuscles" component={ChooseMuscles} options={{title: 'Choose Muscles'}}/>
        <Stack.Screen name="ChooseEquipment" component={ChooseEquipment} options={{title: 'Choose Equipment'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
