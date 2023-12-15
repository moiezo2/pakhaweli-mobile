import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Linking,
    ScrollView,
    Alert
} from 'react-native';
import GetLocation from 'react-native-get-location';


import { getScaledFont } from '../../components/common/FontSize';
import { useCartStore } from '../../stores/cartStore';
import EmptyCart from './EmptyCart';
import CheckoutCard from '../../components/common/foodCards/CheckoutCards';
import { CheckoutCardParams, MenuCardParams } from '../../models/commonModels';
import Button from '../../components/common/Button';
import { widthPercentageToDP as wp } from '../../components/common/ResponsiveScreen';
import { PersistStore } from '../../stores/PersistStore';

const CartScreen = ({

}) => {
    const cart = useCartStore((state: any) => state.cart);
    const clearCart = useCartStore((state: any) => state.clearCart);
    const subTotal = useCartStore((state: any) => state.subTotal);
    const config = PersistStore((state: any) => state.config);
    const [checkoutLoading,setCheckoutLoading] = useState(false)

    return (
        <View style={styles.container}>
            {cart.length > 0 ? <>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>My Cart</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {
                        cart.map((val: CheckoutCardParams) => <CheckoutCard key={val.id} {...val} />)
                    }
                </ScrollView>
                <View style={styles.orderSummary}>
                    <View style={styles.orderSubContainer}>
                        <Text style={styles.orderSummaryTitle}>Order Summary</Text>
                        <Text style={styles.orderSummarytext}>Subtotal ({cart.length} items)</Text>
                    </View>
                    <View style={styles.orderSubContainer}>
                        <Text style={styles.orderSummarytext}>Price</Text>
                        <Text style={styles.orderSummarytext}>{subTotal} AED</Text>
                    </View>
                </View>
                <View style={styles.coupenContainer}>
                    <TextInput style={styles.coupenInput} placeholderTextColor={'#999999'} placeholder='Enter Voucher Code' onChange={()=>{}}/>
                    <Button containerStyle={styles.applyCoupen} text={"Apply"}/>
                </View>
                <Button loading={checkoutLoading} containerStyle={styles.checkoutButton} onPress={()=>{
                    let messageBody : any = ''
                    setCheckoutLoading(true);
                    cart.forEach((val,index) => messageBody = messageBody + `${index}. ${val.title}\n quantity : ${val.quantity}\n\n`);
                    GetLocation.getCurrentPosition({
                        enableHighAccuracy: true,
                        timeout: 60000,
                    })
                    .then(location => {
                        Linking.openURL(`whatsapp://send?phone=${config?.number ? config?.number :+971503834583}&text=${messageBody}\nlocation= ${location.latitude} ${location.longitude}`)
                        setCheckoutLoading(false);
                        setTimeout(()=>{
                            clearCart()
                        },1000) 
                    })
                    .catch(error => {
                        const { code, message } = error;
                        console.warn(code, message);
                        Alert.alert('Location','Enable location permission from settings')
                        setCheckoutLoading(false);
                    })
                   
                    }} textStyle={styles.checkoutButtonText} text={"Place order"}/>
            </> :
                <EmptyCart />
            }
        </View>
    )
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        rowGap: 10,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    titleContainer: {
        width: '30%',
        height: 50,
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#393A3A'
    },
    title: {
        color: '#393A3A',
        fontWeight: '700',
        fontSize: getScaledFont(20),
        lineHeight: 24
    },
    scrollContainer: {
        width: '90%',
        maxHeight: '51%'
    },
    orderSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    orderSubContainer: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    orderSummaryTitle : { 
        color: '#393A3A', 
        fontSize: getScaledFont(19), 
        fontWeight: '700',
    },
    orderSummarytext : { 
        color: '#393A3A', 
        fontSize: getScaledFont(13), 
        fontWeight: '400',
        marginTop : 5 
    },
    checkoutButton : {
        width : '70%',
        height : 45,
        marginTop : 10
    },
    checkoutButtonText : {
        fontWeight : '700',
        fontSize : getScaledFont(13),
    },
    coupenContainer : {
        flexDirection : 'row',
        width : '75%',
        justifyContent : 'space-between',
        backgroundColor : '#E6E6E6',
        borderRadius : wp('5%')
    },
    coupenInput : {
        height : 40,
        width : '60%',
        color : '#999999',
        padding : 10,
        fontSize : getScaledFont(11)
    },
    applyCoupen : {
        width : '30%',
        height : 40,
        borderRadius : wp('5%')
    }
})