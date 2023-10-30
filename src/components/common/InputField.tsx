import { TextInput } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { getScaledFont } from "./FontSize";

const InputField = ({
    label = "label",
    containerStyle,
    disabledLabel,
    labelStyle,
    inputStyles,
    passwordField = false,
    handleChange,
    value,
    customLeftIcon = null,
    placeholder,
    disableLeftIcon
} : any) =>{
    // const [value,setValue] = useState<any>("");
    return(
        <View style={[styles.conatiner,containerStyle]}>
            {!disableLeftIcon && <Image source={require("../../assets/Icons/Vector.png")} style={{width : 20 , height : 20}}/>}
            {!disabledLabel && <Text style={[styles.label,labelStyle]}>{label}</Text>}
            <TextInput secureTextEntry={passwordField} placeholder={placeholder} onChangeText={handleChange} value={value} style={[styles.inputField,inputStyles]}/>
        </View>
    )
}
export default InputField;

const styles = StyleSheet.create({
    conatiner : {
        height : 60,
    },
    label : {
        fontSize : getScaledFont(14),
    },
    inputField :{
        height : '70%'
    }
})