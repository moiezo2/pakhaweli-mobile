import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Animated,
    Easing
} from 'react-native';
import { AirbnbRating } from '@rneui/themed';

import HeartIcon from '../../../assets/Icons/heartIcon.svg';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../ResponsiveScreen';
import { getScaledFont } from '../FontSize';
import { MenuCardParams } from '../../../models/commonModels';
import LazyImage from '../LazyImage';
import { themeColor } from '../../../constants';
import { useCartStore } from '../../../stores/cartStore';



const FoodCard: React.FC<MenuCardParams> = ({ title, description, price, imageUrl,rating }: MenuCardParams) => {
    
    const addToCart = useCartStore((state: any) => state.addToCart)


    return (
        <View style={styles.container}>
            <LazyImage default={require('../../../assets/Images/Dish1.png')} style={{ width: '65%', height: undefined, aspectRatio: 1, borderRadius: wp('50%'), position: 'absolute', top: '-11%', zIndex: 1 }} imageUrl={imageUrl} />
            <View style={{ height: '80%', width: wp('60%'), backgroundColor: '#F2F2F2', borderRadius: wp('7%'), justifyContent: 'space-evenly', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '40%' }}>
                    <Text numberOfLines={1} style={{ width: '85%', textAlign: 'left', fontSize: getScaledFont(13), fontWeight: '600', color: '#000000' }}>{title}</Text>
                    <HeartIcon fill={false ? themeColor : "none"} stroke={'#888888'} />
                </View>
                <AirbnbRating
                    count={5}
                    reviews={[
                        'Bad',
                        'OK',
                        'Good',
                        'Very Good',
                    ]}
                    reviewSize={5}
                    isDisabled
                    defaultRating={rating ?? 2.5}
                    size={8}
                    selectedColor='#393A3A'
                    showRating
                    starContainerStyle={{ justifyContent: 'center', alignItems: 'center', padding: 0, width: '15%', height: '100%' }}
                    ratingContainerStyle={{ width: '70%', height: 1, justifyContent: 'flex-end', alignItems: 'flex-start' }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%' }}>
                    <Text style={{ fontSize: getScaledFont(14), color: themeColor, fontWeight: '600' }}>{price}</Text>
                    <TouchableOpacity onPress={()=> addToCart({title, description, price, imageUrl,rating })} style={{ backgroundColor: themeColor, width: '30%', height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: wp('5%') }}>
                        <Text style={{ color: '#FFFFFF', fontSize: getScaledFont(10) }}>Add Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default FoodCard;

const styles = StyleSheet.create({
    container: {
        height: '80%',
        width: wp('60%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    }
})