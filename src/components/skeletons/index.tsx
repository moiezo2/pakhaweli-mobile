import React, {useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { widthPercentageToDP as wp } from '../common/ResponsiveScreen';

const SkeletonLoading = ({Component,containerStyle}) => {
    const pulseAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const sharedAnimationConfig = {
            duration: 1000,
            useNativeDriver: true,
        };
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    ...sharedAnimationConfig,
                    toValue: 1,
                    easing: Easing.out(Easing.ease),
                }),
                Animated.timing(pulseAnim, {
                    ...sharedAnimationConfig,
                    toValue: 0,
                    easing: Easing.in(Easing.ease),
                }),
            ])
        ).start();

        return () => {
            // cleanup
            pulseAnim.stopAnimation();
        };
    }, []);

    const opacityAnim = pulseAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.5, 1],
    });

    return (
        <View style={[styles.container,containerStyle]}>
            <Component opacityAnim = {opacityAnim}/>
        </View>
    )
}

export default SkeletonLoading;

const styles = StyleSheet.create({
    container: {
        height: '80%',
        width: wp('60%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    }
})