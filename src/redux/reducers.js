import { combineReducers } from 'redux';
import ReducerFeed from '../screens/Feed/reducer';
import ReducerForm from '../screens/Form/reducer';
import ReducerInfo from '../screens/Info/reducer';
import ReducerMap from '../screens/Map/reducer';

const combineReducer = combineReducers({
    ReducerFeed,
    ReducerForm,
    ReducerInfo,
    ReducerMap,
  });
  
  export default combineReducer;