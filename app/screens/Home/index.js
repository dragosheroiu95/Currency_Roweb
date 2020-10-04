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

import styles from './styles'
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
            <View key={item} style={{
                backgroundColor: 'floralwhite',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 250,
                height: 250,
                padding: 50,
                marginLeft: 25,
                marginRight: 25,
            }}>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: CURRENCY_FLAG(item) }}
                ></Image>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, color: 'black' }}>{item}</Text>
                    <Text>{exchangeRates[item] || '- -'}</Text>
                </View>
            </View>

        )
    }

    render() {
        const { fetchedDate, exchangeRates, currencies, base, timer, isConnected } = this.props;
        const currenciesToShow = currencies.filter(currency => currency !== base);

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', padding: 20, flex: 0.5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>Monedă:</Text>
                        <Image
                            style={{ width: 25, height: 25, marginHorizontal: 10 }}
                            source={{ uri: CURRENCY_FLAG(base) }}
                        ></Image>
                        <Text>{base}</Text>
                    </View>
                    <Text>Dată: {fetchedDate}</Text>
                    <Text>Date actualizate la fiecare {timer / 1000} secunde</Text>
                    <Text>Status: {isConnected ? 'Online' : 'Offline'}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Carousel
                        layout={'default'}
                        ref={ref => this.carousel = ref}
                        data={currenciesToShow}
                        sliderWidth={300}
                        itemWidth={300}
                        renderItem={({ item, index }) => this._renderItem({ item, index, exchangeRates })}
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