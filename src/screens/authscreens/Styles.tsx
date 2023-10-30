import { StyleSheet } from "react-native";
import { appBgColour } from "../../constants";
import { widthPercentageToDP as wp } from "../../components/common/ResponsiveScreen";

export const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : appBgColour,
    }
})

export const loginScreenStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : appBgColour,
        width : wp('100%'),
        alignItems : 'center',
        padding : 10,
        paddingHorizontal : 20,
        rowGap : 10,
        // justifyContent : 'center'
    }
})

export const signUpScreenStyles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : appBgColour,
        width : wp('100%'),
        alignItems : 'center',
        padding : 10,
        paddingHorizontal : 20,
        rowGap : 15,
        // justifyContent : 'center'
    }
})