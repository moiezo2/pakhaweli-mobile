import {
    View,
    Text
} from 'react-native';
import { signUpScreenStyles } from './Styles';
import InputField from '../../components/common/InputField';
import Button from '../../components/Button';
import { getScaledFont } from '../../components/common/FontSize';
import { appThemeColour } from '../../constants';
import { widthPercentageToDP as wp } from '../../components/common/ResponsiveScreen';
import { PersistStore } from '../../stores/PersistStore';
import { Formik } from 'formik';


const SignUpScreen = () => {
    const signupApi = PersistStore((state: any) => state.registerApi);

    return (
        <Formik
            initialValues={{ email: '',password : '', confirmPassword : '' }}
            onSubmit={values => {
                if(values.password == values.confirmPassword){
                    signupApi({
                        userEmail : values.email,
                        password : values.password
                    })
                }
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={signUpScreenStyles.container}>
                    <InputField handleChange={handleChange('email')} value={values.email} label="Email address" labelStyle={{ fontSize: getScaledFont(14), fontWeight: '500' }} containerStyle={{ width: wp('80%'), marginTop: '10%' }} />
                    <InputField handleChange={handleChange('password')} value={values.password} label="Password" labelStyle={{ fontSize: getScaledFont(14), fontWeight: '500' }} containerStyle={{ width: wp('80%') }} passwordField={true} />
                    <InputField handleChange={handleChange('confirmPassword')} value={values.confirmPassword} label="Confirm password" labelStyle={{ fontSize: getScaledFont(14), fontWeight: '500' }} containerStyle={{ width: wp('80%') }} passwordField={true} />

                    <Button onPress={() => {
                        console.log('SignUp',values)
                        handleSubmit()
                        // signupApi({})
                    }} containerStyle={{ width: '90%', height: '15%', backgroundColor: appThemeColour, justifyContent: 'center', marginTop: '20%', borderRadius: wp('10%') }}>
                        <Text style={{ textAlign: 'center', color: '#FFFFFF', fontWeight: '600', fontSize: getScaledFont(16) }}>Login</Text>
                    </Button>
                </View>
            )}
        </Formik>
    )
}

export default SignUpScreen;