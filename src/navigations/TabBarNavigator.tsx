import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image
} from 'react-native';

import ProfileScreen from '../screens/menuscreens';
import CustomTabBar from '../components/customTabBar';
import HomeScreen from '../screens/homescreens';
import AppHeader from '../components/common/header/AppHeader';
import { getScaledFont } from '../components/common/FontSize';
import { appBgColour, appThemeColour } from '../constants';
import AboutusScreen from '../screens/aboutscreens';

const TabBarNavigator = () =>{
    const Tab = createBottomTabNavigator();

    return(
          <Tab.Navigator
            tabBar={(props)=> <CustomTabBar {...props} animation={false}/>}
            screenOptions={() => ({              
              tabBarActiveTintColor: '#008143',
              tabBarInactiveTintColor: '#999999',
              header: ({ options ,route}) => {
                if(!options.headerShown) return;
                return (
                  <AppHeader
                    headerContainerStyle={{ width: '100%', alignItems: 'center',backgroundColor : appBgColour}}
                    title={route?.params?.title ?? options.headerTitle}
                    titleStyle={{fontSize : getScaledFont(22)}}
                    {...options}
                  />
                )
              }
            })}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              initialParams={{
                tabBarIcon : 'home',
              }}
              options={{
                headerShown: false, tabBarBadge: 3,
                tabBarLabel : 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Image style={{
                    tintColor : color,
                    width : size,
                    height : undefined,
                    aspectRatio : 1,
                  }} source={require("../assets/tabBarIcons/home.png")}/>
                )
              }}
            />
            <Tab.Screen name="Menu" component={ProfileScreen}
              options={{
                tabBarLabel : 'Menu',
                tabBarIcon: ({ color, size }) => (
                  <Image style={{
                    tintColor : color,
                    width : size,
                    height : undefined,
                    aspectRatio : 1.18
                  }} source={require("../assets/tabBarIcons/Menu_icon.png")}/>
                )
              }}
            />
            <Tab.Screen name="About-us" component={AboutusScreen}
              options={{
                headerShown: false,
                tabBarLabel : 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <Image style={{
                    tintColor : color,
                    width : size,
                    height : undefined,
                    aspectRatio : 1
                  }} source={require("../assets/tabBarIcons/user.png")}/>
                )
              }}
            />
            {/* <Tab.Screen name="History" component={ProfileScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Image style={{
                    tintColor : color,
                    width : size,
                    height : undefined,
                    aspectRatio : 1
                  }} source={require("../assets/tabBarIcons/ic_sharp-history.png")}/>
                )
              }}
            /> */}
          </Tab.Navigator>
    )
}

export default TabBarNavigator;