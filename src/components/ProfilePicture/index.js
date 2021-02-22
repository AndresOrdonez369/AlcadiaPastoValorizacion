import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Overlay, Text, Divider, Button, Icon,
} from 'react-native-elements';
import {
  Image, View, ActivityIndicator, StyleSheet, Dimensions,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { userUploadImage, showModalProfile } from '../../screens/Profile/actionCreator';

import defaultAvatar from '../../../assets/busyPosition.png';

const { width, height } = Dimensions.get('window');

const ProfilePicture = () => {
  const [image, setImagen] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== 'granted') {
      dispatch(showModalProfile('Necesitamos permisos para acceder a la  galería', 'error'));
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      setImagen(result);
      setOverlayVisible(true);
    } else {
      dispatch(showModalProfile('Has cancelado la carga de imagen', 'error'));
    }
  };

  const uploadProfileImage = async () => {
    setIsLoading(true);
    await dispatch(userUploadImage(image.uri));
    setIsLoading(false);
    setOverlayVisible(!overlayVisible);
  };

  const { uploadPhotoError } = useSelector((state) => state.ReducerProfile);
  const imgUser = defaultAvatar;
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <>
      {uploadPhotoError !== '' && dispatch(showModalProfile('Error desconocido, inténtalo más tarde', 'error'))}
      <View style={styles.generalView}>
        <Image
          source={imgUser}
          style={styles.image(210)}
        />
        <View style={styles.iconContainer}>
          <Icon
            name="camera"
            size={20}
            color="black"
            type="font-awesome"
            iconStyle={styles.coverIcon}
            onPress={() => pickImage()}
          />
        </View>

        <Overlay isVisible={overlayVisible} overlayStyle={styles.overlay}>
          <View style={styles.overlayView}>
            <Text style={styles.modalTextTitle}>
              ¿Quieres guardar esta imagen?
            </Text>
            <Divider />
            <View style={styles.buttonView}>
              <Button
                buttonStyle={styles.buttonSaveStyle}
                type="outline"
                title="Guardar foto"
                titleStyle={{ color: 'white' }}
                icon={(
                  <Icon
                    name="check-box"
                    size={24}
                    color="white"
                    type="material"
                  />
                  )}
                onPress={() => uploadProfileImage()}
              />
              <Button
                buttonStyle={styles.buttonDiscardStyle}
                type="outline"
                title=""
                titleStyle={{ color: 'white' }}
                icon={
                  <Icon name="cancel" size={24} color="white" type="material" />
                  }
                onPress={() => setOverlayVisible(!overlayVisible)}
              />
            </View>
          </View>
        </Overlay>
      </View>
    </>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  textName: {
    marginTop: height * -0.05,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 55,
    lineHeight: 55,
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
  },
  generalView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.13,
  },
  buttonView: {
    margin: 0,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSaveStyle: {
    width: width * 0.3,
    borderRadius: 20,
    backgroundColor: 'green',
  },
  buttonDiscardStyle: {
    width: width * 0.3,
    borderRadius: 20,
    backgroundColor: 'gray',
  },
  modalTextTitle: {
    fontSize: height * 0.03,
    color: 'grey',
    margin: 12,
    marginTop: height * 0.08,
  },
  overlay: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#E7EBE1',
    position: 'absolute',
    height: height * 0.65,
    top: height * 0.45,
    width,
  },
  imgModal: {
    height: 170,
    width: 170,
    position: 'absolute',
    top: height * -0.079,
    alignSelf: 'center',
  },
  cover: {
    width,
    height: width * 0.66,
  },
  coverIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  iconContainer: {
    justifyContent: 'center',
    backgroundColor: '#4DCDDB',
    height: height * 0.05,
    width: height * 0.05,
    borderRadius: height * 0.05,
    marginTop: height * -0.06,
    marginLeft: height * 0.18,
  },
  containerText: (size) => ({
    marginTop: size / 4,
  }),
  image: (size) => ({
    height: size,
    width: size,
    marginTop: height * -0.01,
  }),
});
