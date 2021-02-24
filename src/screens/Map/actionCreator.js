import Actions from '../../redux/actionTypes';
import firebase from '../../../firebase';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export const setLocation = (location) => async (dispatch) => {
  try {
    if (location) {
      const newLocation = location;
      return dispatch({
        type: Actions.SET_LOCATION,
        payload: newLocation,
      });
    }
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    const newLocation = await Location.getCurrentPositionAsync({});
    if (status === 'granted') {
      return dispatch({
        type: Actions.SET_LOCATION,
        payload: newLocation,
      });
    }
    return dispatch({
      type: Actions.GO_SETTINGS_TO_SET_LOCATION,
    });
  } catch (error) {
    Sentry.captureException(error);
    return dispatch({
      type: Actions.GO_SETTINGS_TO_SET_LOCATION,
    });
  }
};