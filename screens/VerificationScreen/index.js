import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const VerificationScreen = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const focusNextField = (index) => {
    if (index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const focusPreviousField = (index, value) => {
    if (value === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleChangeText = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text !== '') {
      focusNextField(index);
    } else {
      focusPreviousField(index, text);
    }
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const verificationCode = code.join('');
    console.log('Код підтвердження:', verificationCode);
  };

  const handleResendCode = () => {
    console.log('Надіслати код повторно');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}>

        <Text style={styles.backArrow}>{'\u2039'}</Text>
        <Text style={styles.backButtonText}>Назад</Text>
</TouchableOpacity>


        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Код підтвердження</Text>
          </View>

          <Text style={styles.subtitle}>
            Будь ласка, введіть код, який ми щойно надіслали на електронну пошту.
          </Text>

          <Text style={styles.emailText}>Love.books@gmail.com</Text>

          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.codeInput}
                value={digit}
                onChangeText={(text) => handleChangeText(text, index)}
                onKeyPress={(event) => handleKeyPress(event, index)}
                keyboardType="number-pad"
                maxLength={1}
                ref={(ref) => (inputs.current[index] = ref)}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
            <Text style={styles.resendButtonText}>Повторно надіслати код</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, code.join('').length !== 4 && styles.btnDisabled]}
            onPress={handleVerify}
            disabled={code.join('').length !== 4}
          >
            <Text style={styles.btnText}>Підтвердити</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default VerificationScreen;