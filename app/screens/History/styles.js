import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { COLORS } from '../../helpers/config';

export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

export const chartConfig = {
    decimalPlaces: 4,
    backgroundGradientFrom: COLORS.MORNING_BLUE,
    backgroundGradientFromOpacity: 0.3,
    backgroundGradientTo: COLORS.CAMBRIDGE_BLUE,
    backgroundGradientToOpacity: 0.6,
    propsForHorizontalLabels: { fontSize: 10, color: COLORS.TEXT },
    propsForVerticalLabels: { fontSize: 10 },
    color: (opacity = 1) => COLORS.LIME,
    labelColor: (opacity = 1) => COLORS.TEXT,
    style: {
        borderRadius: 16
    },
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        backgroundColor: COLORS.CELADON
    },
    activityIndicator: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.LIME },
    header: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.TEXT
    },
    dateInterval: {
        fontWeight: 'normal',
        fontSize: 12,
        textAlign: 'center',
    }
});
export default styles;
