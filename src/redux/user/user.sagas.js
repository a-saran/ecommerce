import { put, takeLatest, all, call } from "redux-saga/effects";

import UserActionTypes from "./types";
import {
  googleProvider,
  auth,
  createUserProfile,
  getCurrentUser
} from "../../firebase/firebase.utils";
import { signInFailure, signInSuccess } from "./actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfile, user);
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data()
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfile, user);
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data()
      })
    );
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();

    if (!userAuth) return;

    const userRef = yield call(createUserProfile, userAuth);
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data()
      })
    );
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* onGoogleSignStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckUSerSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignStart),
    call(onEmailSignInStart),
    call(onCheckUSerSession)
  ]);
}
