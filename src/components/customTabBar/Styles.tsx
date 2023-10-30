import { StyleSheet } from "react-native";
import { appBgColour } from "../../constants";

export const bottomTabBarstyles = StyleSheet.create({
    container: { 
        backgroundColor: appBgColour,
        flexDirection: 'row' 
    },
    tabContainer : {
        flex : 1, 
        height : 60
    },
    pressableStyle : {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        rowGap: 10,
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