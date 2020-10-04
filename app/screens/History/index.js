import * as React from 'react';
import { Button, View, Text, Dimensions, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {
    LineChart,
    BarChart,
} from "react-native-chart-kit";
import moment from 'moment'

import actions from '../../actions/exchangeRatesAction'
import { SCREENS } from '../../helpers/constants';
import styles, { chartConfig, height, width } from './styles'


class HistoryScreen extends React.Component {

    componentDidMount() {
        const { fetchPastExchangeRates, navigation } = this.props;

        this._unsubscribeFocus = navigation.addListener('focus', () => {
            if (this.props.isConnected) {
                fetchPastExchangeRates(this.props.base);
            }
        });
    }

    componentWillUnmount() {
        this._unsubscribeFocus();
    }

    render() {
        const { pastExchangeRates, currencies, base, isFetchingPastRates } = this.props
        const start_at = moment().subtract(10, 'days').format('YYYY-MM-DD');
        const end_at = moment().format('YYYY-MM-DD');

        return isFetchingPastRates || !pastExchangeRates ?
            <View style={styles.activityIndicator}>
                <ActivityIndicator size='large'>
                </ActivityIndicator>
            </View> :
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}> EUR  {'<->'} RON  ({start_at} - {end_at})</Text>
                    <LineChart
                        data={{
                            labels: Object.keys(pastExchangeRates).map(day => moment(day).format('DD MMM')),
                            datasets: [{
                                data: Object.keys(pastExchangeRates).map(day => pastExchangeRates[day]['RON'])
                            }]
                        }}
                        width={width - 20}
                        height={height / 3.5}
                        chartConfig={{
                            ...chartConfig,
                            propsForDots: {
                                r: "3",
                                strokeWidth: "1",
                                stroke: "#ffa726"
                            }
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.header}> EUR  {'<->'} USD  ({start_at} - {end_at})</Text>
                    <BarChart
                        data={{
                            labels: Object.keys(pastExchangeRates).map(day => moment(day).format('DD MMM')),
                            datasets: [{
                                data: Object.keys(pastExchangeRates).map(day => pastExchangeRates[day]['USD'])
                            }]
                        }}
                        width={width - 20}
                        height={height / 3.5}
                        chartConfig={chartConfig}
                    />
                </View>
            </View>
    }
}

const mapStateToProps = (state) => {
    return {
        pastExchangeRates: state.exchangeRates.pastExchangeRates,
        isFetchingPastRates: state.exchangeRates.isFetchingPastRates,
        currencies: state.exchangeRates.currencies,
        base: state.exchangeRates.base,
        isConnected: state.netInfo.isConnected,
    }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    const { dispatch } = dispatchProps;

    return {
        ...ownProps,
        ...stateProps,
        fetchPastExchangeRates: () => {
            actions.fetchPastExchangeRates(dispatch)
        }
    }
}

export default connect(mapStateToProps, undefined, mergeProps)(HistoryScreen);
