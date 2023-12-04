import React, { useEffect, useState, useRef } from 'react';
import type { PropsWithChildren } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    ActivityIndicator,
    FlatList
} from 'react-native';
import { appBgColour, menuDummyData } from '../../constants';
import MenueItemCard from '../../components/common/foodCards/MenuItemCard';
import InputField from '../../components/common/InputField';
import { getScaledFont } from '../../components/common/FontSize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../components/common/ResponsiveScreen';
import { useMenuStore } from '../../stores/menuStore';
import { TouchableOpacity } from 'react-native';
import MenuCardSkeleton from '../../components/skeletons/MenuItemSkeleton';


type SectionProps = PropsWithChildren<{
    navigation: any;
}>;

const MenuScreen = ({ navigation }: SectionProps) => {
    const menuData = useMenuStore((state: any) => state.menu)
    const [menu, setMenu] = useState(menuData.data);
    const [activeType, setActiveType] = useState(0);
    const flatlistRef = useRef(null)
    const ViewableItemsChanged = ({ changed }) => {
        setActiveType(changed[0].index)
    };
    const viewabilityConfig = { viewAreaCoveragePercentThreshold: 100 }
    const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged: ViewableItemsChanged }]);
    useEffect(() => {
        setMenu(menuData.data)
    }, [menuData])

    const renderItem = ({ item, index }) => (
        <View id={`${index}`} style={{ backgroundColor: '#FFFFFF', marginTop: index == 0 ? 0 : 20, marginBottom: index == menu.length - 1 ? '21%' : 0, width: '95%' }}>
            <View style={{ width: '88%', marginVertical: 10, flexDirection: 'row', columnGap: 5 }}>{item.type.split(' ').map((value, index) => <Text style={{ color: index == item.type.split(' ').length - 1 ? '#008143' : '#393A3A', fontSize: getScaledFont(18), fontWeight: '700' }}>{value}</Text>)}</View>
            {item.data.map((value, subIndex) => (
                <MenueItemCard {...value} sectionEnd={subIndex == item.data.length - 1} />
            ))}
        </View>
    )

    const renderSkeleton = () => (
        <View style={{ width: '100%', height: '100%' }}>
            {[1, 2, 3, 4, 5].map((val, index) => <MenuCardSkeleton index={index} />)}
        </View>
    )

    return (
        <View style={{ backgroundColor: '#FFFFFF', flex: 1, alignItems: 'center' }}>
            <View style={{ backgroundColor: '#FFFFFF' }}>
                <InputField disabledLabel inputStyles={{ height: '100%', width: '80%', fontSize: getScaledFont(20), fontWeight: '400' }} placeholder='Search' containerStyle={styles.searchField} />
            </View>
            {menuData.loading ? renderSkeleton()
                : <FlatList
                    data={menu}
                    ref={flatlistRef}
                    stickyHeaderIndices={[0]}
                    style={{ maxHeight: '100%' }}
                    ListHeaderComponentStyle={{ height: 35, width: wp('97.5%'), backgroundColor: '#FFFFFF' }}
                    contentContainerStyle={{ width: wp('100%'), alignItems: 'center', justifyContent: 'center' }}
                    ListHeaderComponent={() => (<ScrollView horizontal style={{ height: '100%' }} contentContainerStyle={{ alignItems: 'flex-start', columnGap: 10 }} >{menu.map((val, index) => (
                        <TouchableOpacity onPress={() => flatlistRef?.current?.scrollToIndex({
                            animated: true,
                            index: index,
                        })} style={{ height: '85%', paddingVertical: 5, paddingHorizontal: 10, borderRadius: wp('2.5%'), backgroundColor: index == activeType ? '#008143' : '#FAFAFA' }}>
                            <Text style={{ color: index == activeType ? '#FFFFFF' : '#666666', fontSize: getScaledFont(14) }}>{val.type}</Text>
                        </TouchableOpacity>
                    ))
                    }</ScrollView>)}
                    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                    initialNumToRender={1}
                    keyExtractor={item => item.type}
                    renderItem={renderItem} />
            }
        </View>
    );
};

export default MenuScreen;

const styles = StyleSheet.create({
    searchField: {
        borderWidth: 0,
        borderRadius: wp('10%'),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%',
        columnGap: 10,
        height: hp('7%'),
        width: '100%',
        backgroundColor: '#EFEEEE',
        margin: 20
    }
})