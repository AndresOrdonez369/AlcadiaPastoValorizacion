import Actions from '../../redux/actionTypes';
import firebase from '../../../firebase';
import loginEmailAndPassword from '../LoginEandP/actionCreator';

export const IsLoading = (isLoading = true) => ({
  type: Actions.SET_LOADER_REGISTRY,
  isLoading,
});

// eslint-disable-next-line max-len
export const register = (name, municipio, barrio,email,solicitud) => async (dispatch) => {
    const dbh = firebase.firestore();
    const usersCollection = dbh.collection('users');
    await usersCollection.doc(user.uid).set({
        name,
        municipio,
        barrio,
        email,
        solicitud,
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          return dispatch({
            type: Actions.REGISTER_ERROR,
            payload: { errorCode, errorMessage },
          });
        });
    .then(dispatch(loginEmailAndPassword(email, password)));
  await firebase.auth().currentUser.updateProfile({ displayName: name });
};
