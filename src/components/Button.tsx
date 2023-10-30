import {
    TouchableOpacity
} from 'react-native';

type Props = {
    children: any,
    onPress: () => void,
    containerStyle: object,
}


const Button = ({
    containerStyle = {},
    onPress = () => { console.log('Button Pressed') },
    children
}: Props) => (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
        {children}
    </TouchableOpacity>
)

export default Button;