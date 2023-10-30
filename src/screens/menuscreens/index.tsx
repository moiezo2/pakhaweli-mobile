import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import { appBgColour, menuDummyData } from '../../constants';
import MenueItemCard from '../../components/common/foodCards/MenuItemCard';
import InputField from '../../components/common/InputField';
import { getScaledFont } from '../../components/common/FontSize';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from '../../components/common/ResponsiveScreen';
import { useMenuStore } from '../../stores/menuStore';


type SectionProps = PropsWithChildren<{
    navigation: any;
}>;

const MenuScreen = ({ navigation }: SectionProps) => {
    const menuData = useMenuStore((state: any) => state.menu)
    const [menu, setMenu] = useState(menuData.data);
    useEffect(() => {
        setMenu(menuData.data)
    }, [menuData])
    return (
        <View style={{ backgroundColor: appBgColour, flex: 1, alignItems: 'center' }}>
            <View style={{backgroundColor : '#FFFFFF'}}>
                <InputField disabledLabel inputStyles={{ height: '100%', width: '80%', fontSize: getScaledFont(20), fontWeight: '400' }} placeholder='Search' containerStyle={styles.searchField} />
            </View>
           { menuData.loading ? <ActivityIndicator style={{marginTop : 20}} size={'large'}/> : <ScrollView showsVerticalScrollIndicator={false} style={{ maxHeight: hp('100%'), width: '100%' }}>
                {
                    menu.map((val, index) => (
                        <View id={`${index}`} style={{ backgroundColor: '#FFFFFF', marginTop: index == 0 ? 0 : 20, paddingLeft: '5%' }}>
                            <Text style={{ width: '88%', fontSize: getScaledFont(18), fontWeight: '800', color: '#000000', marginVertical: 10 }}>{val.type}</Text>
                            {val.data.map((value, index) => (
                                <MenueItemCard {...value} sectionEnd={index == val.data.length - 1} />
                            ))}
                        </View>
                    ))
                }
            </ScrollView>}
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