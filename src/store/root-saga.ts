import { all, fork } from "@redux-saga/core/effects";
import { LocationSaga } from "./Location";
import { GeneratorSagaType } from "./types";

function* rootSaga(): GeneratorSagaType<void>{
    yield all([
        fork(LocationSaga),
    ]);
}

export default rootSaga;