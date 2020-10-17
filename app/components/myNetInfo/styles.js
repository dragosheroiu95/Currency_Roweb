import { StyleSheet } from 'react-native'
import { COLORS } from '../../helpers/config'

export default styles = StyleSheet.create({
    connectionStatus: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: COLORS.LIME,
        alignItems: 'center',
    },
    connectionText: {
        color: COLORS.TEXT,
        fontSize: 8,
        fontWeight: 'bold',
    },
})