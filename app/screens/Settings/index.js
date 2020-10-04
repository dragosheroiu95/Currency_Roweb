import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Picker } from '@react-native-community/picker';

import actions from '../../actions/exchangeRatesAction'
import { SCREENS } from '../../helpers/constants';
import styles from './styles'

class SettingsScreen extends React.Component {

    render() {
        const {
            currencies,
            base,
            selectBase,
            selectTimer,
            timer,
            availableIntervals
        } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.settingWrapper}>
                    <Text>Monedă</Text>
                    <Picker
                        selectedValue={base}
                        style={styles.pickerStyle}
                        onValueChange={(itemValue, itemIndex) =>
                            selectBase(itemValue)
                        }>
                        {currencies.map(currency => <Picker.Item key={currency} label={currency} value={currency} />)}
                    </Picker>
                </View>

                <View style={styles.settingWrapper}>
                    <Text>Timpul de reîmprospătare (secunde)</Text>
                    <Picker
                        selectedValue={timer}
                        style={styles.pickerStyle}
                        onValueChange={(itemValue, itemIndex) =>
                            selectTimer(itemValue)
                        }>
                        {availableIntervals.map((timer, index) => <Picker.Item key={index} label={(timer / 1000).toString()} value={timer} />)}
                    </Picker>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.exchangeRates.currencies,
        base: state.exchangeRates.base,
        timer: state.exchangeRates.timer,
        availableIntervals: state.exchangeRates.availableIntervals,
    }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
    const { base } = stateProps;
    const { dispatch } = dispatchProps;

    return {
        ...ownProps,
        ...stateProps,
        selectTimer: (timer) => {
            actions.selectTimer(dispatch, timer)
        },
        selectBase: (base) => {
            actions.selectBase(dispatch, base)
        }
    }
}

export default connect(mapStateToProps, undefined, mergeProps)(SettingsScreen);

