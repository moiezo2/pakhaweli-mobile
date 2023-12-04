import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { Skeleton } from '@rneui/themed';
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    TextInput,
    ScrollView,
    Image,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';

import { getScaledFont } from '../../components/common/FontSize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from '../../components/common/ResponsiveScreen';
import FoodCard from '../../components/common/foodCards/FoodCard';
import { useMenuStore } from '../../stores/menuStore';
import SkeletonLoading from '../../components/skeletons';
import FoodCardSkeleton from '../../components/skeletons/FoodCardSkeleton';

type SectionProps = PropsWithChildren<{
    navigation: NavigationProp<any>;
}>;

const HomeScreen = ({ navigation }: SectionProps) => {
    const loading = useMenuStore((state: any) => state.deals.loading);
    const fetchMenu = useMenuStore((state: any) => state.getMenu);
    const fetchDeals = useMenuStore((state: any) => state.getDeals);
    const dealsData = useMenuStore((state: any) => state.deals.data);

    const [dealsLoading,setDealsLoading] = useState(loading)

    const _renderItem = ({ item, index }) => {
        return (
            <View style={{flex : 1, height : '100%', width : '100%'}}>
                <Image style={{width : '100%',height :undefined ,aspectRatio : 2.05}} resizeMode='cover' source={{uri : 'https://firebasestorage.googleapis.com/v0/b/pak-haweli-resturant.appspot.com/o/Mask%20group.png?alt=media&token=361528ad-f2c7-4ef9-b900-15aac9d835e4'}}/>
            </View>
        );
    }


    useEffect(() => {
        fetchDeals()
        fetchMenu()
    }, [])
    useEffect(()=>{
        setDealsLoading(loading)
    },[loading])
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, minHeight: hp('10%'), rowGap: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: getScaledFont(32), fontWeight: 'bold', color: '#000000', width: wp('50%'), marginTop: hp('3%'),alignSelf : 'flex-start',marginLeft : '2.5%' }}><Text style={{color : '#008143'}}>Delicious</Text> food for you</Text>
                <Carousel
                    // ref={(c) => { this._carousel = c; }}
                    data={["Hello","hahaha"]}
                    renderItem={_renderItem}
                    sliderWidth={wp('100%')}
                    itemWidth={wp('100%')}
                    layout={'default'}
                    layoutCardOffset={`500`}
                    autoplay={true}
                    autoplayDelay={500}
                    loop={true}
                />
                {/* <InputField disabledLabel inputStyles={{height : '100%', width : '90%', fontSize : getScaledFont(20), fontWeight : 'bold'}} placeholder='Search' containerStyle={styles.searchField}/> */}
            </View>
            <Text style={{ textAlign: 'left', width: '95%', fontSize: getScaledFont(24), fontWeight: '700', color: '#000000' }}><Text style={{color : '#008143'}}>Exclusive</Text> Deals</Text>
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', columnGap: 20, height: hp('45%') }} horizontal style={{ flex: 1, flexDirection: 'row', paddingVertical: '5%' }}>
                {
                    !dealsLoading ?
                    dealsData.map(data => (
                        <FoodCard {...data} />
                    ))
                    : [1,2,3].map(() => <FoodCardSkeleton/>)
                }
            </ScrollView>
        </View>
    );
};


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginHorizontal: 10,
        maxHeight: hp('100%'),
        // paddingLeft: '2.5%',
        paddingBottom : '20%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
})
