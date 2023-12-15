import {
    View,
    Image,
    Text,
    TouchableOpacity,
    Pressable
} from 'react-native';
import { widthPercentageToDP as wp } from '../ResponsiveScreen';
import { getScaledFont } from '../FontSize';
import React from 'react';
import { AirbnbRating } from '@rneui/themed';
import {themeColor } from '../../../constants';
import { MenuCardParams } from '../../../models/commonModels';
import HeartIcon from '../../../assets/Icons/heartIcon.svg';
import LazyImage from '../LazyImage';
import { useCartStore } from '../../../stores/cartStore';
import { useNavigation } from '@react-navigation/native';


const MenueItemCard: React.FC<MenuCardParams> = ({ title, price, imageUrl, rating, description, id,variation }: MenuCardParams) => {
    const ratingCompleted = (rating: number) => {
        console.log('Rating is: ' + rating);
    };
    const navigation = useNavigation()
    const addToCart = useCartStore((state: any) => state.addToCart);

    return (
        <Pressable style={{ width: '100%', height: 125, flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }} 
        // onPress={()=> navigation.navigate('MenuDetailScreen',{title, price, imageUrl, rating, description, id,variation})}
        >
            <LazyImage imageUrl={imageUrl} dafaultImage={require('../../../assets/Images/food.jpg')} resizeMode='cover' style={{ width: undefined, height: '100%', aspectRatio: 1, marginRight: 5, borderTopLeftRadius: wp('7%'), borderBottomLeftRadius: wp('7%') }} />
            <View style={{ width: '64%', padding: 10, rowGap: 10, backgroundColor: '#F2F2F2', height: '100%', borderTopRightRadius: wp('7%'), borderBottomRightRadius: wp('7%') }}>
                <View style={{ flexDirection: 'row', width : '95%', justifyContent : 'space-between', alignItems : 'flex-end' }}>
                    <Text numberOfLines={1} style={{ width: '85%', textAlign: 'left', fontSize: getScaledFont(13), fontWeight: '600', color: '#000000' }}>{title}</Text>
                    <HeartIcon fill={false ? themeColor : "none"} stroke={'#888888'} />
                </View>
                <Text numberOfLines={3} style={{ fontSize: getScaledFont(10), color: '#393A3A', height : '34%',overflow : 'scroll' }}>{description ? description : 'Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod.'}</Text>
                    <AirbnbRating
                    count={5}
                    reviews={[
                        'Bad',
                        'OK',
                        'Good',
                        'Very Good',
                    ]}
                    reviewSize={5}
                    defaultRating={rating ?? 2.5}
                    size={8}
                    selectedColor='#393A3A'
                    showRating
                    isDisabled
                    starContainerStyle={{justifyContent : 'center',alignItems : 'center',padding : 0,width : '15%', height : '100%'}}
                    ratingContainerStyle={{ width: '30%',height : 1,justifyContent : 'flex-end' }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems : 'center' }}>
                    <Text style={{ fontSize: getScaledFont(14), color: themeColor, fontWeight: '600' }}>AED {price}</Text>
                    <TouchableOpacity onPress={()=> variation ? navigation.navigate('MenuDetailScreen',{title, price, imageUrl, rating, description, id,variation}) : addToCart({ title, price, imageUrl, rating, description,id })} style={{ backgroundColor: themeColor, width: '30%', height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: wp('5%'),marginRight : 5 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: getScaledFont(10) }}>Add Cart</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
        </Pressable>
    )
}

export default MenueItemCard;