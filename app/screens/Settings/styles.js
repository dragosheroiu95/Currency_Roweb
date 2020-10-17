import {
    StyleSheet,
    Dimensions
} from 'react-native';
import { COLORS } from '../../helpers/config';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.CELADON
    },
    refeshTimeTitle: {
     color: COLORS.TEXT   
    },
    currencyTitle: {
     color: COLORS.TEXT   
    },
    settingWrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickerStyle: {
        height: 50,
        width: 100
    }
});
export default styles;
