import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image
} from 'react-native';

import MenuScreen from '../screens/menuscreens';
import CustomTabBar from '../components/customTabBar';
import HomeScreen from '../screens/homescreens';
import AppHeader from '../components/common/header/AppHeader';
import { getScaledFont } from '../components/common/FontSize';
import { appBgColour, themeColor } from '../constants';
import CartScreen from '../screens/cartscreens';
import { useCartStore } from '../stores/cartStore';

const TabBarNavigator = () =>{
    const Tab = createBottomTabNavigator();

    return(
          <Tab.Navigator
            tabBar={(props)=> <CustomTabBar {...props} animation={false}/>}
            screenOptions={() => ({              
              tabBarActiveTintColor: themeColor,
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
                headerShown: false,
                tabBarLabel : 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Image style={{
                    tintColor : color,
                    width : size,
                    height : undefined,
                    aspectRatio : 1.25,
                  }} source={require("../assets/tabBarIcons/home.png")}/>
                )
              }}
            />
            <Tab.Screen name="Menu" component={MenuScreen}
              options={{
                headerShown: false,
                tabBarLabel : 'Menu',
                tabBarIcon: ({ color, size }) => (
                  <Image style={{
                    tintColor : color,
                    width : size,
                    height : undefined,
                    aspectRatio : 1.25
                  }} source={require("../assets/tabBarIcons/Menu_icon.png")}/>
                )
              }}
            />
            <Tab.Screen name="Cart" component={CartScreen}
              options={{
                headerShown: false,
                tabBarLabel : 'Cart',
                tabBarBadge : useCartStore((state: any) => state.cart).length,
                tabBarIcon: ({ color, size }) => (
                  <Image style={{
                    tintColor : color,
                    width : size,
                    height : undefined,
                    aspectRatio : 1.25
                  }} source={require("../assets/tabBarIcons/cart.png")}/>
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