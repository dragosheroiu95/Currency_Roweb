import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { COLORS } from '../../helpers/config';

export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.CELADON
    },
    metadataSectionContainer: {
        flexDirection: 'column',
        padding: 20,
        paddingTop: 40,
        flex: 0.3
    },
    extraDetails: {
        textAlign: 'right',
        paddingBottom: 5,
        paddingRight: 5,
        fontSize: 12,
        color: COLORS.TEXT,
    },
    currencyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: COLORS.TEXT
    },
    currencyContainerTitle: {
        fontSize: 30,
    },
    currencyImage: {
        width: 40,
        height: 40,
        marginHorizontal: 10
    },
    carouselContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    carouselItem: {
        backgroundColor: COLORS.LIME,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width / 3,
        height: width / 1.5,
        width: width / 1.5,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
    },
    carouselItemImage: {
        width: 50,
        height: 50
    },
    carouselItemDetailsWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    carouselItemTitle: {
        fontSize: 30,
        color: 'black'
    },
    dateWrapper: {
        color: COLORS.TEXT,
        textAlign: 'center',
        fontSize: 20
    },
    date: {
        color: COLORS.TEXT,
    }
});
export default styles;
