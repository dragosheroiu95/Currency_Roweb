import * as React from 'react';
import { connect } from 'react-redux';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationEvents } from 'react-navigation';
import Carousel from 'react-native-snap-carousel';
import moment from 'moment';

import styles, { width } from './styles'
import actions from '../../actions/exchangeRatesAction'
import { CURRENCY_FLAG } from '../../helpers/config';


class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    componentDidMount() {
        const { fetchExchangeRates, navigation } = this.props;

        this._unsubscribeFocus = navigation.addListener('focus', () => {
            if (this.props.isConnected) {
                // Fetch exchange rates on screen focus
                fetchExchangeRates(this.props.base);
            }
            if (this.interval) {
                clearInterval(this.interval);
            }
            // Fetch every ${timer} seconds
            this.interval = setInterval(() => {
                if (!this.props.isFetching && this.props.isConnected) {
                    fetchExchangeRates(this.props.base)
                }
            }, this.props.timer);
        });

        this._unsubscribeBlur = navigation.addListener('blur', () => {
            clearInterval(this.interval);
        });
    }

    componentWillUnmount() {
        this._unsubscribeFocus();
        this._unsubscribeBlur();
    }

    _renderItem({ item, index }) {
        const { exchangeRates } = this.props;
        return (
            <View key={item} style={styles.carouselItem}>
                <Image
                    style={styles.carouselItemImage}
                    source={{ uri: CURRENCY_FLAG(item) }}
                ></Image>
                <View style={styles.carouselItemDetailsWrapper}>
                    <Text style={styles.carouselItemTitle}>{item}</Text>
                    <Text>{exchangeRates ? exchangeRates[item] : '- -'}</Text>
                </View>
            </View>

        )
    }

    render() {
        const { fetchedDate, exchangeRates, currencies, base, timer, isConnected } = this.props;
        const currenciesToShow = currencies.filter(currency => currency !== base);

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.metadataSectionContainer}>
                    <View style={styles.currencyContainer}>
                        <Image
                            style={styles.currencyImage}
                            source={{ uri: CURRENCY_FLAG(base) }}
                        ></Image>
                        <Text style={styles.currencyContainerTitle}>{base}</Text>
                    </View>
                    <Text>Dată: <Text style={styles.date}>{fetchedDate ? moment(fetchedDate).format('DD MMM YYYY, HH:mm:ss') : ''}</Text></Text>
                    <Text>Date actualizate la fiecare {timer / 1000} secunde</Text>
                    <Text>Status: {isConnected ? 'Online' : 'Offline'}</Text>
                </View>
                <View style={styles.carouselContainer}>
                    <Carousel
                        layout={'default'}
                        ref={ref => this.carousel = ref}
                        data={currenciesToShow}
                        sliderWidth={width / 1.25}
                        itemWidth={width / 1.25}
                        renderItem={({ item, index }) => this._renderItem({ item, index })}
                        onSnapToItem={index => this.setState({ activeIndex: index })} />
                </View>
            </SafeAreaView >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        exchangeRates: state.exchangeRates.exchangeRates,
        isFetching: state.exchangeRates.isFetching,
        fetchedDate: state.exchangeRates.fetchedDate,
        currencies: state.exchangeRates.currencies,
        base: state.exchangeRates.base,
        timer: state.exchangeRates.timer,
        isConnected: state.netInfo.isConnected,
    }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    const { dispatch } = dispatchProps;

    return {
        ...ownProps,
        ...stateProps,
        fetchExchangeRates: (base) => {
            actions.fetchExchangeRates(dispatch, base)
        }
    }
}

export default connect(mapStateToProps, undefined, mergeProps)(HomeScreen);