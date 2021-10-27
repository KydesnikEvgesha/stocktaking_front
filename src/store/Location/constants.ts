import { LoadingState } from '../../store/types';
import { LocationsState } from './types';

export const initialState: LocationsState = {
  locations: [],
  loading: LoadingState.IDLE,
};
export const nameReducer = 'Locations';