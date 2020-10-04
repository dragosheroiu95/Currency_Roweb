import * as Actions from '../actions/actionTypes';

const initialState = {
    isConnected: true
};

const NetinfoReducer = (state = initialState, action) => {

    const { isConnected } = action;

    switch (action.type) {
        case Actions.SET_NETINFO_STATUS: {
            return {
                isConnected
            }
        }
        default:
            return state;
    }
}
export default NetinfoReducer;
