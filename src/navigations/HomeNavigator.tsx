import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBarNavigator from './TabBarNavigator';
import MenuDetailScreen from '../screens/menuscreens/MenuDetailScreen';


const HomeNavigator = () => {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen options={{
        headerShown : false,
      }} name='HomeScreen' component={TabBarNavigator}/>
      <Stack.Screen options={{
        headerShown : false,
      }} name='MenuDetailScreen' component={MenuDetailScreen}/>
    </Stack.Navigator>
  );
}

export default HomeNavigator;