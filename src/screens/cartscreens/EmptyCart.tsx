import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { getScaledFont } from '../../components/common/FontSize';
import { themeColor } from '../../constants';
import { widthPercentageToDP as wp } from '../../components/common/ResponsiveScreen';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const EmptyCart = ({

}) => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Image style={styles.emptyImage} source={require('../../assets/Icons/empty-cart.png')}/>
            <Text style={styles.title}>Cart</Text>
            <Text style={styles.description}>Your cart is empty, please add food from our store.</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Menu")} style={styles.buttonContainer}>
                <Text style={styles.buttonTitle}>Browse</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EmptyCart;

const styles = StyleSheet.create({
    container: {
        width : '100%',
        height : '100%', 
        justifyContent : 'flex-start',
        rowGap : 10,
        alignItems : 'center', 
        backgroundColor : '#FFFFFF'
    },
    emptyImage : {
        width : '55%',
        height : undefined, 
        aspectRatio : 1.15, 
        marginTop : '45%'
    },
    title : {
        fontWeight : '700', 
        fontSize : getScaledFont(19),
        color : '#393A3A',
        marginTop : '15%'
    },
    description : {
        fontWeight : '400', 
        fontSize : getScaledFont(14),
        color : '#393A3A', 
        width : '50%',
        textAlign : 'center'
    },
    buttonContainer : {
        backgroundColor : themeColor, 
        width : '75%', 
        height : 50, 
        justifyContent : 'center', 
        alignItems : 'center', 
        borderRadius : wp('7.5%'), 
        marginTop : 20
    },
    buttonTitle : {
        fontWeight : '700', 
        fontSize : getScaledFont(15),
        color : '#FFFFFF'
    }

})