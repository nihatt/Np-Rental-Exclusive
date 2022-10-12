import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import * as Device from 'expo-device';
import { Text } from 'react-native-paper';
import Constants from "expo-constants"
const InfoModal = (props) => {
    const version = Constants.manifest.version
  return (
    <Portal>
      <Dialog visible={props.visible} onDismiss={props.hideDialog}>
        <Dialog.Icon icon="alert" color='red' size={32} />
        <Dialog.Title style={styles.title}>Cihaz ve Uygulama Bilgisi</Dialog.Title>
        <Dialog.Content>
       <View style={{alignSelf:'center'}}>
        <Text variant="titleMedium">Marka : {Device.brand == null ? "Tespit Edilemedi " : Device.brand}</Text>
        <Text variant="titleMedium">Sistem : {Device.osName}</Text>
        <Text variant="titleMedium">İşletim Sistemi : {Device.osVersion}</Text>
        <Text variant="titleMedium">Ram : { Math.round(Device.totalMemory/1000000000) >= 0.5 ? <Text style={{color:'green'}}>Hafıza Yeterli  {Math.round(Device.totalMemory/1000000000)} GB  </Text>   : <Text style={{color:'red'}}>Hafıza Yetersiz </Text>}</Text>
        <Text variant="titleMedium">Sürüm : {version} - Canlı</Text>
        </View>
        </Dialog.Content>
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
})

export default InfoModal;