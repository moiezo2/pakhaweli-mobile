import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native"
import TabBarNavigator from "./navigations/TabBarNavigator";
import AuthNavigator from "./navigations/AuthNavigator";
import OnBoardingScreen from "./screens/onboardingscreens";
import { PersistStore } from "./stores/PersistStore";
import { heightPercentageToDP } from "./components/common/ResponsiveScreen";
import HomeNavigator from "./navigations/HomeNavigator";



const Loading = () => {
    const token = PersistStore((state: any) => state.token);
    const onBoardingDone = PersistStore((state: any) => state.onBoardingDone);
    const _hasHydrated = PersistStore((state: any) => state._hasHydrated);
    if (!_hasHydrated) return;


    return (
        <KeyboardAvoidingView style={{ flex : 1, backgroundColor : 'black' }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {
                onBoardingDone
                    ? true
                        ?
                        <HomeNavigator />
                        :
                        <AuthNavigator />
                    :
                    <OnBoardingScreen />
            }
        </KeyboardAvoidingView>
    )
}

export default Loading;