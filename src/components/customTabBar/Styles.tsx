import { StyleSheet } from "react-native";
import { appBgColour } from "../../constants";
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from "../common/ResponsiveScreen";

export const bottomTabBarstyles = StyleSheet.create({
    container: { 
        backgroundColor: '#E6E6E6',
        flexDirection: 'row',
        alignItems : 'center',
        alignSelf : 'center',
        height : hp('8%'),
        width : '90%',
        position : 'absolute',
        bottom : 15,
        borderRadius : wp('20%')
    },
    tabContainer : {
        flex : 1, 
        height : '50%',
        justifyContent : 'center',
        alignItems : 'center',
        borderRightWidth : 0.5
    },
    pressableStyle : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 2,
    },
    animationStyle : {
        flex: 0.7, 
        maxHeight: 60, 
        maxWidth: '30%', 
        borderBottomWidth: 2, 
        marginLeft: '10%',
        borderBottomColor: 'tomato'
    }
})