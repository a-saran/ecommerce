import { put, takeLatest, all, call } from "redux-saga/effects";

import UserActionTypes from "./types";
import {
  googleProvider,
  auth,
  createUserProfile
} from "../../firebase/firebase.utils";
import { googleSignInFailure, googleSignInSuccess } from "./actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfile, user);
    const snapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({
        id: snapshot.id,
        ...snapshot.data()
      })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignStart)]);
}
