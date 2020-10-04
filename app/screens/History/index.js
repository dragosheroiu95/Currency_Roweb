import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { SCREENS } from '../../helpers/constants';

export default class HistoryScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>History Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate(SCREENS.DASHBOARD_SCREEN)}
                />
            </View>
        )
    }
}

