import { useRef, useState, useEffect } from 'react';
import { Image, Animated } from 'react-native';
import { Easing } from "react-native";

const LazyImage = ({ style, imageUrl, dafaultImage }: any) => {
    const [loadingImage, setLoadingImage] = useState(true);
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
        outputRange: [0.05, 0.5],
    });

    return (
        <>
            {
                loadingImage &&
                <Animated.View style={[{ opacity: opacityAnim, backgroundColor: '#d3d3d3', position: 'absolute'}, style]} />

            }
            <Image onLoadEnd={() => {
                setLoadingImage(false)
            }} style={style} source={imageUrl ? { uri: imageUrl } : dafaultImage} />
        </>
    )
}
export default LazyImage;