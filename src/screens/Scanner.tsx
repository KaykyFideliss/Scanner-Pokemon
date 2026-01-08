import { View, Text, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useEffect, useState } from 'react';

export default function Scanner({ navigation }: any) {
  const devices = useCameraDevices();
  const device = devices.back;
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    Camera.requestCameraPermission().then(status => {
      setPermission(status === 'authorized');
    });
  }, []);

  if (!device || !permission) {
    return <Text>Carregando câmera...</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
  );
}
