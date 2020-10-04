import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const width = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    metadataSectionContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        flex: 0.3
    },
    currencyContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencyImage: {
        width: 25,
        height: 25,
        marginHorizontal: 10
    },
    carouselContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    carouselItem: {
        backgroundColor: 'floralwhite',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width / 1.25,
        height: 250,
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
});
export default styles;
