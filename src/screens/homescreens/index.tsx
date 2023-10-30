import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    TextInput,
    ScrollView
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
// import { Button } from '@rneui/themed';
import { useUserStore } from '../../stores/usersStore';
import { getScaledFont } from '../../components/common/FontSize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../components/common/ResponsiveScreen';
import { appBgColour, appThemeColour } from '../../constants';
import InputField from '../../components/common/InputField';
import FoodCard from '../../components/common/foodCards/FoodCard';
import { useMenuStore } from '../../stores/menuStore';

const dummyFavouriteFoodData = [
    {
        title: "Qeema mutor",
        price: "10 Aed",
        description: "Its a very speacial dish with muttors"
    },
    {
        title: "Chicken Qarahi",
        price: "10 Aed",
        description: "Its a very speacial dish with muttors"
    }
]




type SectionProps = PropsWithChildren<{
    navigation: NavigationProp<any>;
}>;

const HomeScreen = ({ navigation }: SectionProps) => {
    const loading = useMenuStore((state : any) => state.menu.loading);
    const fetchDeals = useMenuStore((state : any) => state.getMenu);
    const deleteUsers = useMenuStore((state : any) => state.removeMenu);


    useEffect(() => {
        fetchDeals()
    }, [])
    return (
        <View style={styles.container}>
            <View style={{flex : 1,minHeight : hp('10%'), rowGap : 20,alignItems : 'center'}}>
                    <Text style={{fontSize: getScaledFont(32), fontWeight: 'bold', color: '#000000', width: wp('50%'), marginTop : hp('5%'),marginRight : '45%' }}>Delicious food for you</Text>
                    {/* <InputField disabledLabel inputStyles={{height : '100%', width : '90%', fontSize : getScaledFont(20), fontWeight : 'bold'}} placeholder='Search' containerStyle={styles.searchField}/> */}
            </View>
            <Text style={{textAlign : 'left', width : '100%', fontSize : getScaledFont(24), fontWeight : '700',color : '#000000'}}>Exclusive Deals</Text>
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ justifyContent : 'center',alignItems : 'center',columnGap : 20, height : hp('45%')}} horizontal style={{flex : 1, flexDirection : 'row',paddingVertical : '5%'}}>
                {
                    dummyFavouriteFoodData.map(data => (
                        <FoodCard {...data}/>
                    ))
                }

            </ScrollView>
        </View>
    );
};


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal : 10,
        maxHeight : hp('100%'),
        paddingLeft : '2.5%',
        backgroundColor : appBgColour,
        justifyContent: 'center',
        alignItems : 'center'
    },
})
