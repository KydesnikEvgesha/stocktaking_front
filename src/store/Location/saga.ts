import { call, put, takeEvery, all } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { GeneratorSagaType } from "../../store/types";
import { API } from "../../utils/API";
// import history from 'utils/history';
import locationActions from "./actions";
import { initialState } from "./constants";
import { Location } from "./types";

function* getLocationWorker(action: {}) {
  try {
    const response: AxiosResponse<Location[]> = yield call(() =>
      API.get(`/location/all`)
    );

    if (response.status === 200) {
      yield put(
        locationActions.getLocationSuccess({
          locations: response.data,
        })
      );
    } else if (response.status === 204) {
      yield put(
        locationActions.getLocationSuccess({
          locations: initialState.locations,
        })
      );
    }
  } catch {
    yield put(locationActions.getLocationFail());
  }
}

// function* addNewDialogWorker(action: {
//   payload: { dialog: Dialog; group_id: string };
// }) {
//   try {
//     const { dialog, group_id } = action.payload;
//     const response: AxiosResponse = yield call(() =>
//       API.put(`/office/${group_id}/dialog`, {
//         ...dialog,
//       })
//     );
//     if (response.status === 201) {
//       history.push(`/office/${group_id}`);
//       yield put(dialogActions.addNewDialogSuccess());
//     }
//   } catch {
//     yield put(dialogActions.addNewDialogFail());
//   }
// }

function* deleteLocationWorker(action: { payload: { id: number } }) {
  try {
    const { id } = action.payload;
    const response: AxiosResponse = yield call(() =>
      API.delete(`/location/delete/${id}`, {
        data: { id },
      })
    );
    if (response.status === 200) {
      yield put(locationActions.getLocations());
    }
  } catch {
    yield put(locationActions.getLocationFail());
  }
}

function* sagaWatcher(): GeneratorSagaType<never> {
  yield all([
    takeEvery(locationActions.getLocations, getLocationWorker),
    // takeEvery(dialogActions.addNewDialog, addNewDialogWorker),
    takeEvery(locationActions.deleteLocation, deleteLocationWorker),
  ]);
}

export default sagaWatcher;
