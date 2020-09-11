import { takeLatest, call, put } from "redux-saga/effects";
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionSnapshotToObject } from "../../utils";

import ShopActionTypes from "./types";
import { fetchCollectionsSuccess, fetchCollectionsError } from "./actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionSnapshotToObject,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
