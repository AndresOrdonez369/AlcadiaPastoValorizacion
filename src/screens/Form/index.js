import React, { useState } from 'react';

import {
  Dimensions, StyleSheet, View, TouchableHighlight, Text, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CountryPicker from 'react-native-country-picker-modal';
import AlertMessage from '../../components/AlertMessage';
import InputBasic from '../../components/InputBasic/inputBasic';
import ButtonBasic from '../../components/ButtonBasic/ButtonBasic';


const { height, width } = Dimensions.get('screen');

const Form = () => {
    
    const [alert, setAlert] = useState({
        show: false,
        message: 'Hubo un error',
      });
    const [validation, setValidation] = useState(false);
    const [input, setInput] = useState({
        name: '',
        municipio: '',
        barrio: '',
        email: '',
        solicitud: '',
      });
    const validate = (value) => {
        if (value !== undefined) setValidation(true); else setValidation(false);
      };
      return(
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.inputsContainer}>
          <InputBasic
            placeholder="Nombre Completo"
            validation="name"
            containerStyle={styles.input}
            changeText={(text, err) => {
              setInput({ ...input, name: text });
              validate(err);
            }}
          />
          <InputBasic
            placeholder="Municipio"
            validation="name"
            containerStyle={styles.input}
            changeText={(text, err) => {
              setInput({ ...input, municipio: text });
              validate(err);
            }}
          />
          <InputBasic
            placeholder="Barrio"
            validation="name"
            containerStyle={styles.input}
            changeText={(text, err) => {
              setInput({ ...input, Barrio: text });
              validate(err);
            }}
          />
          <InputBasic
            keyboardType="email-address"
            placeholder="E-mail"
            validation="email"
            containerStyle={styles.input}
            changeText={(text, err) => {
              setInput({ ...input, email: text });
              validate(err);
            }}
          />
        <InputBasic
            keyboardType="Solicitud"
            placeholder="Solicitud"
            containerStyle={styles.input}
            changeText={(text, err) => {
              setInput({ ...input, Solicitud: text });
              validate(err);
            }}
          />
         
        </View>
        {alert.show && <AlertMessage message={alert.message} />}
        <ButtonBasic
          text="Regístrate"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textButton}
          onPress={() => registryMain()}
        />
        <TouchableHighlight onPress={handleOpenWithLinking} underlayColor="#ffc4c4">
          <Text style={styles.textTerms}>
            Al registrarte aceptas nuestras Condiciones y Política de privacidad.
          </Text>
        </TouchableHighlight>
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  container: {
    height,
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#221033',
  },
  icon: {
    alignItems: 'flex-start',
    width,
    left: width * 0.05,
  },
  inputsContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    margin: height * 0.02,
  },
  flagContainer: {
    flexDirection: 'row',
    height: height * 0.06,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  flag: {
    height: height * 0.1,
    width: width * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.06,
    width: width * 0.7,
    borderRadius: 8,
    marginBottom: height * 0.04,
    backgroundColor: '#E3EFF1',
    shadowColor: 'rgba(0,0,0, .4)',
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
  },
  textButton: {
    color: '#514848',
    fontSize: height * 0.025,
    fontWeight: 'bold',
  },
  textTerms: {
    fontSize: height * 0.02,
    marginLeft: width * 0.08,
    marginRight: width * 0.08,
    marginBottom: height * 0.03,
    textAlign: 'center',
    color: '#2672FF',
  },
});

export default Form;
