import React from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './InputModal.style';

import Button from '../Button';
import Input from '../Input';

const InputModal = ({
  isVisible,
  onClose,
  onPress,
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <Input
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
          />
        </View>
        <Button name={'Gönder'} onPress={onPress} />
      </View>
    </Modal>
  );
};

export default InputModal;
