import {
    StyleSheet,
    Dimensions
} from 'react-native';

export const width = Dimensions.get("window").width
export const height = Dimensions.get("window").height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(26, 255, 146, 0.5)'
    },
    metadataSectionContainer: {
        flexDirection: 'column',
        padding: 20,
        paddingTop: 40,
        flex: 0.3
    },
    extraDetails: {
        fontStyle: 'italic',
        textAlign: 'right',
        padding: 5,
        fontSize: 12
    },
    currencyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
        borderRadius: 250,
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
    dateWrapper: {
        textAlign: 'center',
        fontSize: 20
    },
    date: {
    }
});
export default styles;
