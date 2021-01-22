import { combineReducers } from 'redux';
import ReducerFeed from '../screens/Feed/reducer';
import ReducerForm from '../screens/Form/reducer';
import ReducerInfo from '../screens/Info/reducer';

const combineReducer = combineReducers({
    ReducerFeed,
    ReducerForm,
    ReducerInfo,
  });
  
  export default combineReducer;