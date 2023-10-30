import {
    View,
    Image,
    Text
} from 'react-native';
import { widthPercentageToDP as wp } from '../ResponsiveScreen';
import { getScaledFont } from '../FontSize';
import React from 'react';
import { AirbnbRating } from '@rneui/themed';
import { appThemeColour } from '../../../constants';
import { MenuCardParams } from '../../../models/commonModels';


const MenueItemCard: React.FC<MenuCardParams> = ({ title, price, imageUrl, rating, sectionEnd }: MenuCardParams) => {
    const ratingCompleted = (rating: number) => {
        console.log('Rating is: ' + rating);
    };
    return (
        <View style={{ width: '100%', height: 150,flexDirection: 'row',borderBottomWidth : sectionEnd ? 0 : 0.5,borderBottomColor: '#7f7f7f', alignItems: 'center', backgroundColor: '#FFFFFF', marginTop: 20 }}>
                <View style={{ width: '57%', padding: 10, paddingLeft: 0, rowGap: 10 }}>
                    <Text style={{ width: '100%', textAlign: 'left', fontSize: getScaledFont(16), fontWeight: '600', color: '#000000' }}>{title}</Text>
                    <Text style={{ fontSize: getScaledFont(14), color: '#000000', fontWeight: '600' }}>AED {price}</Text>
                    {/* <AirbnbRating
                    count={5}
                    reviews={[
                        'Bad',
                        'OK',
                        'Good',
                        'Very Good',
                    ]}
                    defaultRating={rating ?? 2.5}
                    size={15}
                    showRating
                    ratingContainerStyle={{ width: '30%', height: '15%' }}
                /> */}
                </View>
                <Image source={imageUrl ? { uri: imageUrl } : require('../../../assets/Images/food.jpg')} resizeMode='cover' style={{ width: '40%', height: undefined, aspectRatio: 1.11, marginRight : 5, borderRadius : wp('2.5%')}} />
        </View>
    )
}

export default MenueItemCard;