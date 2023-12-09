import {
    Animated,
    Keyboard,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { widthPercentageToDP as wp } from "../common/ResponsiveScreen";
import { bottomTabBarstyles } from "./Styles";
import { getScaledFont } from "../common/FontSize";
import { useEffect, useRef, useState } from "react";
import { themeColor } from "../../constants";



const CustomTabBar = ({ state, navigation, descriptors, animation, tabBarStyle, tabBarContainerStyle }: any) => {
    const [hideOnKeyboard, setHideonKeyBoard] = useState(false);
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
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', (val) => {
            setHideonKeyBoard(true)
        })
        Keyboard.addListener('keyboardDidHide', () => {
            setHideonKeyBoard(false)
        })
        return () => {
            Keyboard.removeAllListeners('keyboardDidShow')
            Keyboard.removeAllListeners('keyboardDidHide')

        }
    }, [])
    return (
        // <View style={[{height : 60},tabBarContainerStyle]}>
        !hideOnKeyboard && <View style={[bottomTabBarstyles.container, tabBarStyle]}>
            {
                state.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const TabBarIcon = options.tabBarIcon;
                    const { tabBarActiveTintColor, tabBarInactiveTintColor, tabBarStyle, tabBarBadge } = options;
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
                        <View key={route.key} style={[bottomTabBarstyles.tabContainer, tabBarStyle, { borderRightWidth: index == state.routes.length - 1 ? 0 : 0.5 }]}>
                            {tabBarBadge > 0 && <View style={styles.badgeIconContainer}><Text style={{ color: '#FFFFFF', fontSize : getScaledFont(11) }}>{tabBarBadge}</Text></View>}
                            <TouchableOpacity onPress={onPress} style={bottomTabBarstyles.pressableStyle}>
                                {TabBarIcon && <TabBarIcon color={isFocused ? tabBarActiveTintColor : tabBarInactiveTintColor} size={wp('7%')} />}
                                {label && <Text style={{ color: isFocused ? tabBarActiveTintColor : tabBarInactiveTintColor, fontSize: getScaledFont(12) }}>{label}</Text>}
                            </TouchableOpacity>
                        </View>
                    )
                })
            }

        </View>
        //     {animation && <Animated.View style={[bottomTabBarstyles.animationStyle,{ transform: [
        //             { translateX: fadeAnim }
        //         ]
        //     }]} />}
        // </View>
    )

}

export default CustomTabBar;

const styles = StyleSheet.create({
    badgeIconContainer: {
        width: '17%',
        height: undefined,
        aspectRatio: 1,
        position: 'absolute',
        backgroundColor: themeColor,
        top: -12,
        right: '28%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('5%'),
        zIndex: 1
    }
})