import { createStore, combineReducers } from 'redux';
import { reducer as locations } from './Locations';
import { reducer as filters } from './Filter';
import { reducer as locationDetails } from './LocationDetails'
import { reducer as userPosition } from './UserPosition';

/**
 * Create a store managment to aplication, charge the reducers and 
 * store configuration with Redux.
 * 
 * @author Ricardo Bermúdez Bermúdez
 * @since  Oct 10th, 2019.
 */
export default createStore(
  combineReducers({
    locations,
    filters,
    locationDetails,
    userPosition,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);