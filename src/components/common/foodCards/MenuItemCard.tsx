import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp } from '../ResponsiveScreen';
import { getScaledFont } from '../FontSize';
import React from 'react';
import { AirbnbRating } from '@rneui/themed';
import { appThemeColour } from '../../../constants';
import { MenuCardParams } from '../../../models/commonModels';
import HeartIcon from '../../../assets/Icons/heartIcon.svg';
import LazyImage from '../LazyImage';


const MenueItemCard: React.FC<MenuCardParams> = ({ title, price, imageUrl, rating, sectionEnd }: MenuCardParams) => {
    const ratingCompleted = (rating: number) => {
        console.log('Rating is: ' + rating);
    };
    return (
        <View style={{ width: '100%', height: 125, flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }}>
            <LazyImage imageUrl={imageUrl} dafaultImage={require('../../../assets/Images/food.jpg')} resizeMode='cover' style={{ width: undefined, height: '100%', aspectRatio: 1, marginRight: 5, borderTopLeftRadius: wp('7%'), borderBottomLeftRadius: wp('7%') }} />
            <View style={{ width: '64%', padding: 10, rowGap: 10, backgroundColor: '#F2F2F2', height: '100%', borderTopRightRadius: wp('7%'), borderBottomRightRadius: wp('7%') }}>
                <View style={{ flexDirection: 'row', width : '95%', justifyContent : 'space-between', alignItems : 'flex-end' }}>
                    <Text numberOfLines={1} style={{ width: '85%', textAlign: 'left', fontSize: getScaledFont(13), fontWeight: '600', color: '#000000' }}>{title}</Text>
                    <HeartIcon fill={false ? "#008143" : "none"} stroke={'#888888'} />
                </View>
                <Text style={{ fontSize: getScaledFont(10), color: '#393A3A' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod.</Text>
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
                    starContainerStyle={{justifyContent : 'center',alignItems : 'center',padding : 0,width : '15%', height : '100%'}}
                    ratingContainerStyle={{ width: '33%',height : 1,justifyContent : 'flex-end' }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems : 'center' }}>
                    <Text style={{ fontSize: getScaledFont(14), color: '#008143', fontWeight: '600' }}>AED {price}</Text>
                    <TouchableOpacity style={{ backgroundColor: '#008143', width: '30%', height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: wp('5%') }}>
                        <Text style={{ color: '#FFFFFF', fontSize: getScaledFont(10) }}>Add Cart</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
        </View>
    )
}

export default MenueItemCard;