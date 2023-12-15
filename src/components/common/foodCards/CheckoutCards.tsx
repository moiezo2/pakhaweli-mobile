import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp } from '../ResponsiveScreen';
import { getScaledFont } from '../FontSize';
import React from 'react';
import { themeColor } from '../../../constants';
import { CheckoutCardParams } from '../../../models/commonModels';
import LazyImage from '../LazyImage';
import { useCartStore } from '../../../stores/cartStore';
import Button from '../Button';


const CheckoutCard: React.FC<CheckoutCardParams> = ({ title, price, imageUrl, quantity, description, id }: CheckoutCardParams) => {

    const removeFromCart = useCartStore((state: any) => state.removeFromCart);
    const reduceQuantity = useCartStore((state: any) => state.reduceQuantity);
    const addQuantity = useCartStore((state: any) => state.addQuantity);
    return (
        <View style={styles.container}>
            <LazyImage imageUrl={imageUrl} dafaultImage={require('../../../assets/Images/food.jpg')} resizeMode='cover' style={styles.image} />
            <View style={styles.subContainer}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Text numberOfLines={2} style={styles.description}>{description ? description : 'Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod.'}</Text>

                <View style={styles.section3}>
                    <Button text={'Delete'} onPress={() => removeFromCart(id)} />
                    <View style={styles.quntityContainer}>
                        <Button textStyle={{ color: '#393A3A', fontWeight: '400', fontSize: getScaledFont(14) }} disabled={quantity < 2} onPress={() => reduceQuantity(id)} text={'-'} containerStyle={styles.quantityButton} />
                        <Text style={{ fontSize: getScaledFont(14), color: '#393A3A', fontWeight: '700' }}>{quantity}</Text>
                        <Button textStyle={{ color: '#393A3A', fontWeight: '400', fontSize: getScaledFont(14) }} text={'+'} onPress={() => addQuantity(id)} containerStyle={styles.quantityButton} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CheckoutCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 115,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
        justifyContent: 'space-between'
    },
    image: {
        width: '30%',
        height: '100%',
        // aspectRatio: 0.85,
        marginRight: 5,
        borderTopLeftRadius: wp('7%'),
        borderBottomLeftRadius: wp('7%')
    },
    subContainer: {
        width: '67.5%',
        padding: 10,
        rowGap: 10,
        backgroundColor: '#F2F2F2',
        height: '100%',
        borderTopRightRadius: wp('7%'),
        borderBottomRightRadius: wp('7%')
    },
    title : { 
        width: '85%', 
        textAlign: 'left', 
        fontSize: getScaledFont(13), 
        fontWeight: '600', 
        color: '#000000' 
    },
    description : { 
        fontSize: getScaledFont(10), 
        color: '#393A3A', 
        height: '35%', 
        overflow: 'scroll' 
    },
    section3 : { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '60%' 
    },
    quntityContainer : { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    quantityButton : { 
        backgroundColor: 'transparent', 
        width: '30%', 
        height: 25, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
})