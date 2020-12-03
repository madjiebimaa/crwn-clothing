import { takeEvery, call, put } from "redux-saga/effects";

import shopReducerTypes from "./shop.types";
import {
  firestore,
  convertedCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";

export function* fetchCollectionsAsyn() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertedCollectionsSnapshotToMap,
      snapShot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    shopReducerTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsyn
  );
}
