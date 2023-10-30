import {
    View,
    Text,
} from 'react-native';
import { loginScreenStyles } from './Styles';
import InputField from '../../components/common/InputField';
import { widthPercentageToDP as wp } from '../../components/common/ResponsiveScreen';
import { getScaledFont } from '../../components/common/FontSize';
import { appThemeColour } from '../../constants';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { PersistStore } from '../../stores/PersistStore';


const LoginScreen = ({} : any) => {
    const navigation = useNavigation();
    const loginApi = PersistStore((state : any) => state.loginApi);

    return (
        <View style={[loginScreenStyles.container,]}>
            <InputField label="Email address" labelStyle={{ fontSize: getScaledFont(14), fontWeight: '500' }} containerStyle={{ width: wp('80%'), marginTop: '10%' }} />
            <InputField label="Password" labelStyle={{ fontSize: getScaledFont(14), fontWeight: '500' }} containerStyle={{ width: wp('80%') }} passwordField={true} />
            <Button onPress={() => { console.log('Forgot password') }} containerStyle={{ width: '90%', marginTop: 20 }}>
                <Text style={{ textAlign: 'left', color: appThemeColour, fontWeight: '600', fontSize: getScaledFont(16) }}>Forgot password</Text>
            </Button>
            <Button onPress={() => { 
                console.log('Login')
                loginApi('hahah')
                }} containerStyle={{ width: '90%', height : '15%', backgroundColor : appThemeColour, justifyContent : 'center' , marginTop: '20%', borderRadius : wp('10%') }}>
                <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: '600', fontSize: getScaledFont(16) }}>Login</Text>
            </Button>
        </View>
    )
}

export default LoginScreen;