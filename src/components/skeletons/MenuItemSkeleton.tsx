import { Animated } from "react-native"
import SkeletonLoading from "."
import { getScaledFont } from "../common/FontSize";
import { widthPercentageToDP as wp } from "../common/ResponsiveScreen";
import { View } from "react-native";

const MenuCardSkeleton = ({ index }) => {
    return (
        <SkeletonLoading
            Component={({ opacityAnim }) => (
                <>
                    {index === 0 && <Animated.View style={{ backgroundColor: '#F2F2F2',width : '35%',height : 30,  opacity: opacityAnim,alignSelf : 'flex-start' }} />}
                    <View style={{ width: '100%', height: 125, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Animated.View style={{ backgroundColor: '#F2F2F2', height: '100%', aspectRatio: 1, marginRight: 0, borderTopLeftRadius: wp('7%'), borderBottomLeftRadius: wp('7%'), opacity: opacityAnim }} />
                        <Animated.View style={{ width: '64%', padding: 10, rowGap: 10, backgroundColor: '#F2F2F2', height: '100%', borderTopRightRadius: wp('7%'), borderBottomRightRadius: wp('7%'), opacity: opacityAnim }}>
                            <Animated.View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between', alignItems: 'flex-end', opacity: opacityAnim }}>
                                <Animated.View style={{ width: '85%', backgroundColor: '#d3d3d3', height: 20 }} />
                            </Animated.View>
                            <Animated.View style={{ width: '95%', backgroundColor: '#d3d3d3', height: 50 }} />
                            <Animated.View style={{ width: '20%', backgroundColor: '#d3d3d3', height: 20 }} />
                        </Animated.View>
                    </View>
                </>
            )}
            containerStyle={{ width: '95%', height:index === 0 ? 175 : 125,marginTop: 20, alignItems: 'center', justifyContent: 'space-between' }}
        />
    )
}

export default MenuCardSkeleton;