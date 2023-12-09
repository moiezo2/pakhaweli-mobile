import {
    Image,
    View
} from 'react-native';
import { styles } from './Styles';
import { Text } from 'react-native';

const AppLogo = require('../../assets/splashscreenlogo_2x.png')

import { heightPercentageToDP as hp , widthPercentageToDP as wp } from '../../components/common/ResponsiveScreen';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { PersistStore } from '../../stores/PersistStore';
import { getScaledFont } from '../../components/common/FontSize';

const OnBoardingScreen = () => {

    const setOnboardingStatus = PersistStore((state : any) => state.setOnboardingStatus);

    return (
        <View style={styles.container}>
            <View style={{flex : 1, rowGap : 15}}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={AppLogo} />
                </View>
                <Text style={{color : '#FFFFFF', fontWeight : 'bold', fontSize : getScaledFont(30),textAlign : 'center'}}>Welcome</Text>
            </View>
            <Button containerStyle={styles.button} onPress={()=>{
                setOnboardingStatus(true)
            }}>
                <Text style={styles.buttonTitle}>Get Started</Text>
            </Button>
        </View>
    )
}
export default OnBoardingScreen;