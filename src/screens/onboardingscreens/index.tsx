import {
    Image,
    View
} from 'react-native';
import { styles } from './Styles';
import { Text } from 'react-native';

const AppLogo = require('../../assets/splashscreenlogo_2x.png')

import { heightPercentageToDP as hp , widthPercentageToDP as wp } from '../../components/common/ResponsiveScreen';
import Button from '../../components/common/Button';
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
            </View>
            <Text style={{color : '#FFFFFF', fontWeight : '500', fontSize : getScaledFont(20),textAlign : 'center',marginBottom : '30%'}}>Your favorite food is just a tap away!</Text>

            <Button containerStyle={styles.button} onPress={()=>{
                setOnboardingStatus(true)
            }}>
                <Text style={styles.buttonTitle}>Get Started</Text>
            </Button>
        </View>
    )
}
export default OnBoardingScreen;