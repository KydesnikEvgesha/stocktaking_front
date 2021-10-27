import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../store/types';

interface Location {
    id: number;
    nameOffice: string;
    address: string;
  };

  interface LocationsState {
    locations: Location[];
    loading: LoadingState;
  };

  type ReducerFunction<T = null | undefined> = CaseReducer<
  LocationsState,
  PayloadAction<T>
    >;
  export type { Location, LocationsState, ReducerFunction };