import React, { useState } from 'react';
import { Image, Text } from "react-native";
import { StyleSheet, View } from "react-native"
import Button from "../../components/common/Button";
import { getScaledFont } from "../../components/common/FontSize";
import { CheckBox, Icon } from '@rneui/themed';
import { themeColor } from '../../constants';
import { heightPercentageToDP, widthPercentageToDP as wp } from '../../components/common/ResponsiveScreen';
import { useCartStore } from '../../stores/cartStore';

const MenuDetailScreen = ({ route, navigation }) => {
    // const navigation = useNavigation();
    const addToCart = useCartStore((state: any) => state.addToCart);

    const { imageUrl, title, description, variation, id, rating } = route.params;
    const [selectedIndex, setIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    console.log('check--->', route)

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.optionContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description ? description : 'Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod.'}</Text>
                <View style={{ backgroundColor: '#F2F2F2', padding: 10, paddingVertical: 20, borderRadius: wp('2.5%') }}>
                    <View style={styles.variationTitleContainer}>
                        <Text style={styles.variationText}>Variation</Text>
                        <Text style={styles.variationRequired}>Required</Text>
                    </View>
                    <Text style={styles.selectOne}>Select one</Text>
                    {
                        variation?.map((val, index) => (
                            <View key={index} style={styles.checkboxContainer}>
                                <CheckBox
                                    checked={selectedIndex === index}
                                    onPress={() => setIndex(index)}
                                    containerStyle={styles.radioContainer}
                                    title={`${val?.title}`}
                                    checkedColor={themeColor}
                                    iconType="material-community"
                                    checkedIcon="radiobox-marked"
                                    uncheckedIcon="radiobox-blank"
                                />
                                <Text style={styles.optionPrice}>AED {val.price}</Text>
                            </View>
                        ))
                    }
                </View>


            </View>
            <View style={styles.quantityContainer}>
                <Text style={styles.qunatityTitle}>Quantity :</Text>
                <View style={styles.qunatityBody}>
                    <Button disabled={quantity == 1 ? true : false} onPress={()=> setQuantity(quantity - 1)} text={'-'} textStyle={styles.quantitySign} containerStyle={styles.quantityButton}/>
                    <Text style={styles.qunatity}>{quantity}</Text>
                    <Button onPress={()=> setQuantity(quantity + 1)} text={'+'} textStyle={styles.quantitySign} containerStyle={styles.quantityButton}/>
                </View>
            </View>
            <Button onPress={() => {
                addToCart({ title: `${title} (${variation[selectedIndex]?.title})`, price: variation[selectedIndex]?.price * quantity, imageUrl, rating, description, id })
                navigation.goBack()
            }} text={'Add to cart'} textStyle={{ fontSize: getScaledFont(18) }} containerStyle={{ width: '90%', height: 50, borderRadius: 10, position: 'absolute', bottom: 10 }} />
        </View>
    )
}

export default MenuDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.5
    },
    optionContainer: {
        width: '100%',
        paddingHorizontal: '5%',
        paddingVertical: 10,
        rowGap: 10
    },
    title: {
        textAlign: 'left',
        width: '100%',
        fontWeight: '700',
        fontSize: getScaledFont(24),
        color: '#393A3A'
    },
    description: {
        textAlign: 'left',
        width: '100%',
        fontWeight: '400',
        fontSize: getScaledFont(14),
        color: '#393A3A',
        paddingVertical: 10,
    },
    variationText: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: getScaledFont(16),
        color: '#393A3A'
    },
    variationRequired: {
        textAlign: 'left',
        fontWeight: '400',
        fontSize: getScaledFont(16),
        color: '#999999',
        marginRight: 10
    },
    selectOne: {
        textAlign: 'left',
        fontWeight: '400',
        fontSize: getScaledFont(12),
        color: '#999999',
        marginRight: 20
    },
    variationTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 20
    },
    quantityContainer : {
        flexDirection: 'row', 
        height: '10%', 
        justifyContent: 'space-between', 
        width: '90%', 
        alignItems: 'center'
    },
    qunatityTitle : { 
        color: '#000000',
        fontWeight : '700' 
    },
    qunatityBody : { 
        flexDirection: 'row', 
        height: '100%', 
        justifyContent: 'center', 
        width: '20%', 
        alignItems: 'center', 
        columnGap : 10 
    },
    quantityButton : {
        width : '40%',
        borderRadius : wp('70%'), 
        height : undefined,
        aspectRatio : 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    quantitySign : {
        fontSize : getScaledFont(16)
    },
    qunatity : { 
        color: '#000000' 
    },
    radioContainer : {
        backgroundColor: '#F2F2F2', 
        width: '50%', 
        marginLeft: 0, 
        margin: 0, 
        paddingHorizontal: 0 
    },
    checkboxContainer : { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingRight: 20 
    },
    optionPrice : { 
        width: '50%', 
        color: '#999999', 
        textAlign: 'right' 
    }
})