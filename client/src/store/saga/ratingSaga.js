import { put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions/index";

export function* fetchRatingList(action) {
    yield put(actions.toggleLoading());
    const response = yield axios.get(`http://localhost:3001/measures?shoppingChannel=${action.payload}`);
    yield put( actions.updateRating(response.data));
    yield put(actions.toggleLoading());
}