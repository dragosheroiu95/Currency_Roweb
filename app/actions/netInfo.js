import { connect } from 'react-redux';

import * as Actions from './actionTypes';


const actions = {
    setStatus: async (dispatch, status) => {
        dispatch({ type: Actions.SET_NETINFO_STATUS, isConnected: status })
    }
};

export default actions;

