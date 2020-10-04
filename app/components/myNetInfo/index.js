import React from 'react'
import NetInfo from "@react-native-community/netinfo";
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import actions from '../../actions/netInfo';
import styles from './styles'

class MyNetInfo extends React.PureComponent {
    constructor(props) {
        super(props)
        this.unsubscribe = null;
    }
    componentDidMount() {
        this.unsubscribe = NetInfo.addEventListener(this._handleConnectionChange)
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    _handleConnectionChange = (state) => {
        const isConnected = state ? state.isConnected : false;
        this.props.updateConnectionStatus(isConnected)
    }
    render() {
        const { netInfo } = this.props
        if (netInfo.isConnected) return <View />
        return (
            <View style={styles.connectionStatus}>
                <Text style={styles.connectionText}>{'No connection'}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        netInfo: state.netInfo,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateConnectionStatus: (isConnected) => actions.setStatus(dispatch, isConnected),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyNetInfo)