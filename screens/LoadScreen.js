// LoadingScreen.js
import React from 'react';
import { Modal, View, Image, StyleSheet } from 'react-native';

const LoadingScreen = ({ visible }) => {
  return (
    <Modal
      transparent={false}
      animationType={'fade'}
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <Image
          source={require('../assets/icon.png')} 
          style={styles.image}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', 
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default LoadingScreen;
