import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "../../models/commonModels";
import { getScaledFont } from "./FontSize";
import { themeColor } from "../../constants";
import { widthPercentageToDP as wp } from "./ResponsiveScreen";

const Button = ({ text, onPress, containerStyle, textStyle, disabled, loading, children }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.buttonContainer,{opacity : disabled ? 0.6 : 1 }, containerStyle]}>
            {
                children ? children
                    :
                    loading ?
                        <ActivityIndicator size={'small'} />
                        :
                        <Text style={[styles.buttonTitle, textStyle]}>{text}</Text>
            }
        </TouchableOpacity>
    )
}
export default Button;

const styles = StyleSheet.create({
    buttonContainer : {
        backgroundColor: themeColor, 
        width: '70%', 
        height: 25, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: wp('5%')
    },
    buttonTitle : { 
        color: '#FFFFFF', 
        fontSize: getScaledFont(10) 
    }
})