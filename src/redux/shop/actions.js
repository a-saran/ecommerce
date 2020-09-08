import ShopActionTypes from "./types";
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionSnapshotToObject } from "../../utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsError = errorMsg => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMsg
});

export const fetchCollectionsStartAsync = () => dispatch => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionsStart());

  collectionRef
    .get()
    .then(snapshot => {
      const collectionMap = convertCollectionSnapshotToObject(snapshot);
      dispatch(fetchCollectionsSuccess(collectionMap));
    })
    .catch(err => dispatch(fetchCollectionsError(err.message)));
};
