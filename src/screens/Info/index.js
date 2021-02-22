import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from '../../../assets/logoalcaldia.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
            <Image source={logo} style={styles.logo} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});