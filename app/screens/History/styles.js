import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height
export const chartConfig = {
    decimalPlaces: 4,
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column' },
    activityIndicator: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: { fontSize: 15, fontWeight: 'bold' },
});
export default styles;
