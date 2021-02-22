import Actions from '../../redux/actionTypes';
/* import firebase from '../../../firebase'; */

/* export const IsLoading = (isLoading = true) => ({
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
}; */
/* export const userUploadImage = (imagenURL, uid) => async (dispatch) => {
  try {
    const user = firebase.auth().currentUser;
    const userPhothoURL = `/Users/profilePhotos/${user.uid}.png`;
    const storage = firebase.storage().ref();
    const imagePath = storage.child(userPhothoURL);
    // eslint-disable-next-line no-undef
    const response = await fetch(imagenURL);
    const imagenBlob = await response.blob();
    await imagePath.put(imagenBlob);

    const url = await storage
      .child(userPhothoURL)
      .getDownloadURL();

    const dbh = firebase.firestore();
    const uidCollection = dbh.collection('users').doc(user.uid);

    await user.updateProfile({
      displayName: user.displayName,
      photoURL: url,
    });
    
    await uidCollection.update({ photoURL: url });

    return dispatch({
      type: Actions.USER_UPDATE_IMAGEN_URL,
      payload: url,
    });
  } catch (error) {
    return dispatch({
      type: Actions.USER_UPDATE_IMAGEN_ERROR,
      payload: error,
    });
  }
}; */
export const register = (name, municipio, barrio, email, celular, solicitud) => async (dispatch) => {
  dispatch(IsLoading(true));
  await firebase.auth().createUserWithEmailAndPassword(email)
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatch(IsLoading(false));
      return dispatch({
        type: Actions.REGISTER_ERROR,
        payload: { errorCode, errorMessage },
      });
      // ...
    }).then(async ({ user }) => {
      dispatch(IsLoading(false));
      const { uid } = await firebase.auth().currentUser;
      const dbh = firebase.firestore();
      const usersCollection = dbh.collection('users');
      await usersCollection.doc(user.uid).set({
        name,
        municipio,
        barrio,
        celular, 
        solicitud,
        uid,
        photoURL,
        email,
      })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          return dispatch({
            type: Actions.REGISTER_ERROR,
            payload: { errorCode, errorMessage },
          });
        });
    })
};

export const registerToken = (
  token, email, name, userName, country, countryCode, uidg,
) => async (dispatch) => {
  dispatch(IsLoading(false));
  await dispatch(loginWithCredential(token))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return dispatch({
        type: Actions.REGISTER_ERROR,
        payload: { errorCode, errorMessage },
      });
    })
    .then(async () => {
      const { uid, photoURL } = await firebase.auth().currentUser;
      await firebase.auth().signOut();
      const dbh = firebase.firestore();
      const usersCollection = dbh.collection('users');

      await usersCollection.doc(uid).set({
        name,
        municipio,
        barrio,
        celular, 
        solicitud,
        uid,
        photoURL,
        email,
      })
        .then(() => dispatch(loginWithCredential(token)));
      await firebase.auth().currentUser.updateProfile({ displayName: name });
    });
};
export const showModalProfile = (message, type) => ({
  type: Actions.SHOW_MODAL_PROFILE,
  payload: { message, type },
});

export const hideModalProfile = () => ({
  type: Actions.HIDE_MODAL_PROFILE,
});

export const userUpdateImageURL = (url) => ({
  type: Actions.USER_UPDATE_IMAGEN_URL,
  payload: url,
});