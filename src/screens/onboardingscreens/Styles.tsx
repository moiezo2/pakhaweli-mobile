import { StyleSheet } from "react-native";
import { themeColor } from "../../constants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "../../components/common/ResponsiveScreen";
import { getScaledFont } from "../../components/common/FontSize";

export const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : themeColor,
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
        width: '100%', 
        height: undefined, 
        aspectRatio: 1, 
        marginTop: '5%', 
        marginLeft: '0%', 
        justifyContent: 'center',
        alignItems: 'center' 
    },
    buttonTitle : {
        fontWeight : '700',
        fontSize : getScaledFont(17),
        color : themeColor
    }
}) 