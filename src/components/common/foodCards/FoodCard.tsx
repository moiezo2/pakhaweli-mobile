import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../ResponsiveScreen';
import { getScaledFont } from '../FontSize';
import { foodCardParams } from '../../../models/commonModels';



const FoodCard : React.FC<foodCardParams> = ({title,description,price}: foodCardParams) =>{
    return(
        <View style={styles.container}>
            <Image style={{width : '100%', height : undefined , aspectRatio : 1, position : 'absolute',top : '-11%',zIndex : 1}} source={require('../../../assets/Images/Dish1.png')}/>
            <View style={{height : '80%', width : wp('60%'), backgroundColor : '#FFFFFF',borderRadius : wp('7%'), justifyContent : 'space-evenly', alignItems : 'center'}}>
                <Text style={{marginTop : '40%',color : 'black', fontWeight : '500', fontSize : getScaledFont(24), height : '20%', width : '90%', textAlign : 'center'}}>{title}</Text>
                <Text style={{color : 'black', fontWeight : '400', fontSize : getScaledFont(18), height : '20%', width : '90%', textAlign : 'center'}}>{price}</Text>
            </View>
        </View>
    )
}

export default FoodCard;

const styles = StyleSheet.create({
    container : {
        height : '80%',
        width : wp('60%'),
        alignItems : 'center',
        justifyContent : 'center'
    }
})