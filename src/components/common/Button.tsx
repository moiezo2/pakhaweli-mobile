import { Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "../../models/commonModels";
import { getScaledFont } from "./FontSize";
import { themeColor } from "../../constants";
import { widthPercentageToDP as wp } from "./ResponsiveScreen";

export const Button = ({ text, action, containerStyle, textStyle,disabled }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={action} disabled={disabled} style={[{ backgroundColor: themeColor, width: '70%', height: 25, alignItems: 'center', justifyContent: 'center', borderRadius: wp('5%') },containerStyle]}>
            <Text style={[{ color: '#FFFFFF', fontSize: getScaledFont(10) },textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}