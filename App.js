import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Plans from './screens/Plans'; 
import BuildPlans from './screens/BuildPlans';
import AddExercise from './screens/AddExercise';
import ChooseMuscles from './screens/ChooseMuscles';
import ChooseEquipment from './screens/ChooseEquipment';
import LoadScreen from './screens/LoadScreen';

const Stack = createStackNavigator();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={styles.container}>
      <LoadScreen visible={loading} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Plans" component={Plans}/>
            <Stack.Screen name="BuildPlans" component={BuildPlans} options={{ title: 'Build Plans' }}/>
            <Stack.Screen name="AddExercise" component={AddExercise} options={{ title: 'Add Exercises' }}/>
            <Stack.Screen name="ChooseMuscles" component={ChooseMuscles} options={{title: 'Choose Muscles'}}/>
            <Stack.Screen name="ChooseEquipment" component={ChooseEquipment} options={{title: 'Choose Equipment'}}/>
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
