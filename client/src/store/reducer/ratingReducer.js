import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ratings: [],
    loading: false
};

const updateRatingList = (state, action) => {
    return updateObject(state, { ratings: action.payload })
}

const toggleLoader = (state, action) => {
    return updateObject(state, { loading: !state.loading })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_RATING: return updateRatingList(state, action);
        case actionTypes.TOGGLE_LOADING: return toggleLoader(state, action);
        default:
            return state;
    }
};

export default reducer;