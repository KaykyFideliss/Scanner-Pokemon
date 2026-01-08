import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';



export default function Scanner({ navigation }: any) {
  const device = useCameraDevice('back');
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission]);

const codeScanner = useCodeScanner({
  codeTypes: ['qr'],
  onCodeScanned: codes => {
    if (codes.length === 0) return;

 const value = codes[0].value;
if (!value) return;

console.log('QR VALUE BRUTO:', value);

// remove espaços e divide por / ou :
const cleanedValue = value.trim();
const parts = cleanedValue.split(/\/|:/);

// pega o último valor
const pokemonId = parts[parts.length - 1].trim();

console.log('ID FINAL:', pokemonId);

if (!isNaN(Number(pokemonId))) {
  navigation.navigate('Pokemon', {
    pokemonId,
  });
}else {
      console.log('QR SEM ID VÁLIDO');
    }
  },
});



  if (!device || !hasPermission) {
    return (
      <View style={styles.center}>
        <Text>Carregando câmera...</Text>
      </View>
    );
  }



  return (
      <View style={StyleSheet.absoluteFill}>
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      codeScanner={codeScanner}
    />
  

      <View style={styles.overlay}>
        <View style={styles.scanBox} />
        <Text style={styles.text}>Apontea câmera para o codigo QR</Text>
      </View>
   
  </View>
  );
}

  const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanBox: {
    width: 250,
    height: 250,
    borderWidth: 3,
    borderColor: '#97979765', 
    borderRadius: 12,
    backgroundColor: 'transparent',
  },

  text: {
    marginTop: 20,
    color: '#97979765',
    fontSize: 16,
  },
});
