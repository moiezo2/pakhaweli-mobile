import { Animated } from "react-native"
import SkeletonLoading from "."
import { widthPercentageToDP as wp } from "../common/ResponsiveScreen"

const FoodCardSkeleton = () => {
    return (
        <SkeletonLoading
            Component={({ opacityAnim }) =>
                <>
                    <Animated.View style={{ width: '65%', height: undefined, aspectRatio: 1, borderRadius: wp('50%'), position: 'absolute', top: '-11%', zIndex: 2, backgroundColor: '#d3d3d3', justifyContent: 'center', opacity: opacityAnim }} />
                    <Animated.View style={{ height: '80%', width: wp('60%'), backgroundColor: '#F2F2F2', borderRadius: wp('7%'), justifyContent: 'space-evenly', alignItems: 'center', opacity: opacityAnim }} />
                </>
            }
        />

    )
}
export default FoodCardSkeleton;