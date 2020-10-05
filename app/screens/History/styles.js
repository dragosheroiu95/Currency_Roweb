import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height
export const chartConfig = {
    decimalPlaces: 4,
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0.3,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.6,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
        backgroundColor: 'rgba(26, 255, 146, 0.5)'
    },
    activityIndicator: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: { fontSize: 15, fontWeight: 'bold', color: '#08130D' },
});
export default styles;
