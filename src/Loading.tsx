import { useEffect } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native"
import TabBarNavigator from "./navigations/TabBarNavigator";
import AuthNavigator from "./navigations/AuthNavigator";
import OnBoardingScreen from "./screens/onboardingscreens";
import { PersistStore } from "./stores/PersistStore";
import { heightPercentageToDP } from "./components/common/ResponsiveScreen";
import HomeNavigator from "./navigations/HomeNavigator";
import SplashScreen from "react-native-splash-screen";



const Loading = () => {
    const token = PersistStore((state: any) => state.token);
    const onBoardingDone = PersistStore((state: any) => state.onBoardingDone);
    const _hasHydrated = PersistStore((state: any) => state._hasHydrated);
    const fetchConfig = PersistStore((state: any) => state.fetchConfig);
    useEffect(()=>{
        if (!_hasHydrated) return;
        fetchConfig();
        setTimeout(()=>{
            SplashScreen.hide();
    
    
        },0)
    },[_hasHydrated]) 
    return (
        <KeyboardAvoidingView style={{ flex : 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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