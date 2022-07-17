import {
  put, takeLatest, all, fork, select,
} from 'redux-saga/effects'

// eslint-disable-next-line no-unused-vars
function* fetchAction(action) {
  try {
    if (true) {
      yield put({
        type: 'SUCCESS',
      })
    } else {
      throw new Error('Could not eat donut')
    }
  } catch (e) {
    yield put({
      type: 'FAIL',
      message: e.message,
    })
  }
}

// eslint-disable-next-line no-unused-vars
function* watchGameObjectsCount(action) {
  try {
    const gCount = yield select((state) => state.gameObjectsCount)
    if (gCount > 1) {
      yield put({
        type: 'CHECK_COLLISIONS',
      })
    }
  } catch (e) {
    // yield put({
    //   type: 'FAIL',
    //   message: e.message,
    // })
  }
}

// redux actions and its trigger saga functions

function* watchGameObjects() {
  yield takeLatest('INIT_GAME_OBJECTx', watchGameObjectsCount)
}

function* watchAction() {
  yield takeLatest('WATCH_ACTION', fetchAction)
}

// used fork for executing functions at the same time
export default function* rootSaga() {
  yield all([fork(watchAction), fork(watchGameObjects)])
}
