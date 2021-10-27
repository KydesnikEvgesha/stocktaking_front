import { LoadingState } from "../../store/types";
import { ReducerFunction, Location } from "./types";

const getLocations: ReducerFunction = (state) => {
  state.loading = LoadingState.LOADING;
};

const getLocationSuccess: ReducerFunction<{ locations: Location[] }> = (
  state,
  { payload }
) => {
  state.loading = LoadingState.RESOLVE;
  state.locations = payload.locations;
};

const getLocationFail: ReducerFunction = (state) => {
  state.loading = LoadingState.RESOLVE;
};

// const addLocation: ReducerFunction<{ location: Location; group_id: string }> = (
//   state
// ) => {
//   state.loading = LoadingState.LOADING;
// };

// const addNewDialogSuccess: ReducerFunction = (state) => {
//   state.loading = LoadingState.RESOLVE;
// };

// const addNewDialogFail: ReducerFunction = (state) => {
//   state.loading = LoadingState.REJECT;
// };

const deleteLocation: ReducerFunction<{
  id: number;
}> = () => {};
const deleteLocationSuccess: ReducerFunction = () => {};
const deleteLocationFail: ReducerFunction = () => {};

export default {
  getLocations,
  getLocationSuccess,
  getLocationFail,
  deleteLocation,
  deleteLocationSuccess,
  deleteLocationFail,
};
