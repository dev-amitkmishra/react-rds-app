
import * as actionTypes from "./actionTypes";

export const fetchRating = (fetchType) => {
    return {
        type: actionTypes.FETCH_RATING,
        payload: fetchType
    };
};


export const updateRating = (data) => {
    return {
        type: actionTypes.UPDATE_RATING,
        payload: data
    };
};


