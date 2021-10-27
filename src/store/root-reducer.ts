import { combineReducers } from "redux";
import { LocationSlice } from "./Location";
import { ApplicationState } from "./types";

const clientsReducers = combineReducers<ApplicationState>(
    {
        locations: LocationSlice.reducer,
    }
);

export default clientsReducers;