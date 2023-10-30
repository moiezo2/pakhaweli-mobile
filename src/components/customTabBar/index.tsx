import {
    Animated,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { widthPercentageToDP as wp } from "../common/ResponsiveScreen";
import { bottomTabBarstyles } from "./Styles";
import { getScaledFont } from "../common/FontSize";
import { useRef } from "react";



const CustomTabBar = ({ state, navigation, descriptors, animation, tabBarStyle, tabBarContainerStyle }: any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slide = (index: number) => {
        // Will change fadeAnim value to 1 in 5 seconds
        if (animation) {
            Animated.timing(fadeAnim, {
                toValue: index == 1 ? wp('50%') : 0,
                duration: 250,
                useNativeDriver: true,
            }).start();
        }
    };
    return (
        <View style={[{height : 60},tabBarContainerStyle]}>
            <View style={[bottomTabBarstyles.container,tabBarStyle]}>
                {
                    state.routes.map((route: any, index: number) => {
                        const { options } = descriptors[route.key];
                        const TabBarIcon = options.tabBarIcon;
                        const { tabBarActiveTintColor, tabBarInactiveTintColor, tabBarStyle } = options
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : null;

                        const isFocused = state.index === index;

                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                                canPreventDefault: true,
                            });

                            if (!isFocused && !event.defaultPrevented) {
                                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                                navigation.navigate({ name: route.name, merge: true });
                            }
                            if (animation) slide(index)
                        };

                        const onLongPress = () => {
                            navigation.emit({
                                type: 'tabLongPress',
                                target: route.key,
                            });
                        };

                        return (
                            <View key={route.key} style={[bottomTabBarstyles.tabContainer,tabBarStyle]}>
                                <TouchableOpacity onPress={onPress} style={bottomTabBarstyles.pressableStyle}>
                                    {TabBarIcon && <TabBarIcon color={isFocused ? tabBarActiveTintColor : tabBarInactiveTintColor} size={wp('7%')} />}
                                    {label && <Text style={{ color: isFocused ? tabBarActiveTintColor : tabBarInactiveTintColor, fontSize: getScaledFont(16), fontWeight: 'bold' }}>{label}</Text>}
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }


            </View>
            {animation && <Animated.View style={[bottomTabBarstyles.animationStyle,{ transform: [
                    { translateX: fadeAnim }
                ]
            }]} />}
        </View>
    )

}

export default CustomTabBar;