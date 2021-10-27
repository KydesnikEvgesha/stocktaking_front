import { ApplicationState, LoadingState } from '../../store/types';
import { Location } from './types';

const locations = (state: ApplicationState): Location[] => state.locations.locations;

const isLoadingLocation = (state: ApplicationState): LoadingState =>
  state.locations.loading;
const locationsSelectors = { locations, isLoadingLocation };

export default locationsSelectors;