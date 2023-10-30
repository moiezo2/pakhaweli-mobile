import { StyleSheet } from "react-native";
import { appThemeColour } from "../../constants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../../components/common/ResponsiveScreen";
import { getScaledFont } from "../../components/common/FontSize";

export const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : appThemeColour,
        padding : '10%'
    },
    button : {
        backgroundColor : '#FFFFFF',
        height : '9%',
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : hp('7%')
    },
    image : { 
        width: '70%', 
        height: undefined, 
        aspectRatio: 1 
    },
    imageContainer : { 
        backgroundColor: '#FFFFFF', 
        width: '25%', 
        height: undefined, 
        aspectRatio: 1, 
        borderRadius: wp('25%'), 
        marginTop: '5%', 
        marginLeft: '0%', 
        justifyContent: 'center',
        alignItems: 'center' 
    },
    buttonTitle : {
        fontWeight : '700',
        fontSize : getScaledFont(17),
        color : appThemeColour
    }
}) 