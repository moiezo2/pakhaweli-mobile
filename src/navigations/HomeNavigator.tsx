import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBarNavigator from './TabBarNavigator';


const HomeNavigator = () => {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen options={{
        headerShown : false,
      }} name='HomeScreen' component={TabBarNavigator}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default HomeNavigator;