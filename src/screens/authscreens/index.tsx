import {
    View,
    Image
} from 'react-native';
import { styles } from './Styles';
import TopTabBar from '../../components/customTabBar/TopTabBar';

const tabContent = [
    {
        title : 'Login',
    },
    {
        title : 'SignUp',
    },
]


const AuthScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.65, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: undefined, aspectRatio: 1, width: '30%' }} source={require('../../assets/AppLogo.png')} />

            </View>
            <TopTabBar tabsContent={tabContent} />
        </View>
    )
}

export default AuthScreen;