import React, { useState } from 'react';

import {
  Dimensions, StyleSheet, View, TouchableHighlight, Text, ScrollView, Image
} from 'react-native';
/* import { SafeAreaView } from 'react-native-safe-area-context'; */
import AlertMessage from '../../components/AlertMessage';
import InputBasic from '../../components/InputBasic';
import ButtonBasic from '../../components/ButtonBasic';
import logo from '../../../assets/logoalcaldia.png';
import { register } from './actionCreator';

const { height, width } = Dimensions.get('screen');

const Form = () => {
    
    const [alert, setAlert] = useState({
        show: false,
        message: 'Hubo un error',
      });
    const [isLoading, setIsLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [input, setInput] = useState({
        name: '',
        municipio: '',
        barrio: '',
        email: '',
        ceular: 0,
        solicitud: '',
      });
   /*  const regitry = useSelector((state) => state.ReducerRegistry);
    const { error, errorCode } = regitry; */
    const handleOpenWithLinking = () => {
        //  Linking.openURL('https://.com/');
        console.log('terminoooooos');
      };
      const checkEmptyInputs = (Email, Municipio, Name, Barrio, Celular, Solicitud) => {
        if (Email.trim() === '' || Municipio.trim() === '' || Celular.trim() === ''
             || Name.trim() === ''|| Solicitud.trim() === '' || Barrio.trim() === '') return true;
        return false;
      };  
    const validate = (value) => {
        if (value !== undefined) setValidation(true); else setValidation(false);
      };
      const pressRegistry = async (Name, Municipio, Barrio, Email, Celular, Solicitud, err, ErrorCode, val) => {
        if (checkEmptyInputs(Name, Municipio, Barrio, Email, Celular, Solicitud)) setAlert({ show: true, message: 'No pueden haber campos vacíos' });
        if (val) setAlert({ show: true, message: 'Ingresaste información incorrecta en algún campo' });
        if (val === false && !checkEmptyInputs(Name, Municipio, Barrio, Email, Celular, Solicitud)) {
          setIsLoading(true);
          await dispatch(register(Email, Password, Name, UserName, Country, CountryCode));
          setIsLoading(false);
        }
        if (err) setAlert({ show: true, message: checkErrorType(ErrorCode) });
      };
      const registryMain = () => {
        const {
          name, municipio, barrio, email, celular, solicitud,
        } = input;
         pressRegistry(name, municipio, barrio, email, celular, solicitud, error, errorCode, validation);
      };
      return(
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
           <View style={styles.textContainer}>
            <Text style={styles.text}>Pasto con infrastructura para el bienestar</Text>
          </View>
        </View>
        <View style={styles.textContainerInfo}>
            <Text style={styles.textInfo}>En el siguiente formulario la población en general participará enviando diferentes solicitudes a la secretaria de infrastructura y valorización de acuerdo a las necesidades</Text>
          </View>
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
            keyboardType="numeric"
            placeholder="Celular"
            validation="cellphone"
            containerStyle={styles.input}
            changeText={(text, err) => {
              setInput({ ...input, celular: text });
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
          text="Enviar información"
          buttonStyle={styles.buttonStyle}
          textStyle={styles.textButton}
          onPress={() => registryMain()}
        />
        <TouchableHighlight onPress={handleOpenWithLinking} underlayColor="#ffc4c4">
          <Text style={styles.textTerms}>
            Al enviar la información aceptas las Condiciones y P olítica de privacidad, click para más información.
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
    },
    textInfo:{
     width: width * 0.6,
     height: height * 0.0001,
     },
     textInfoStyle:{
       color: 'red' 
     },
  headerContainer:{
    marginTop: height*0.03 ,
    height:height*0.1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    },
  inputsContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: height *0.5,
   },
    logoContainer:{
    width: width * 0.2,
    marginLeft: width *0.05,
  },
  textContainer:{
    width: width * 0.8,
    margin: width * 0.01,
  },
  textContainerInfo:{
    width: width * 0.9,
   },
  logo: {
    maxWidth: width * 0.15,
    maxHeight: height * 0.25,
    resizeMode: 'contain',
    marginLeft: width * 0.04,
  },
  text: {
    marginRight: height * 0.017,
    color: '#3c73f4',
    fontSize: height * 0.025,
    fontWeight: '700',
    textAlign: 'center',
  },
  textInfo: {
    marginRight: height * 0.017,
    color: '#3c73f4',
    fontSize: height * 0.02,
    fontWeight: '500',
    textAlign: 'center',
  },
  input: {
    margin: height * 0.01,
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
    textAlign: 'center',
    color: '#2672FF',
    marginBottom: height * 0.14,
  },
});

export default Form;
