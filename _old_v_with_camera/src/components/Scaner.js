import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, CameraRoll } from 'react-native';
import { RNCamera } from 'react-native-camera';

class Scaner extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          // onGoogleVisionBarcodesDetected={({ barcodes }) => {
          //   console.log(barcodes);
          //   alert(barcodes);
          // }}
          onBarCodeRead={this._onBarCodeRead}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
            <Text style={{ fontSize: 14 }}> Наведи на штрих код </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      alert(data.uri);
    }
  };
  _onBarCodeRead = function(e) {
    alert('Barcode Found!' + 'Type: ' + e.type + '\nData: ' + e.data);
  };
  // ({ data, rawData, type }) => {
  //   console.log(data, rawData, type);
  //   return alert(type + ' - ' + data);
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

export { Scaner };
