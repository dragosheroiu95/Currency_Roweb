import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const width = Dimensions.get("window").width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(26, 255, 146, 0.5)'
    },
    metadataSectionContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        flex: 0.3
    },
    currencyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50
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
        backgroundColor: 'rgb(255,250,205)',
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
    date: {
    }
});
export default styles;
