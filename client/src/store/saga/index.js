
import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import { fetchRatingList } from './ratingSaga'


export function* watchAuth() {
    yield takeEvery(actionTypes.FETCH_RATING, fetchRatingList);
}