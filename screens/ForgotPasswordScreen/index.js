import React, { useState } from 'react';
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

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSendInstructions = () => {
    if (!validateEmail(email)) {
      setEmailError('Будь ласка, введіть дійсну адресу електронної пошти');
      return;
    }
    setEmailError('');
    setSuccessMessage('Інструкції відправлено на вашу електронну пошту');
    console.log('Відправити інструкції на:', email);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Забули пароль?</Text>
        </View>

        <View style={styles.instructions}>
          <Text style={styles.instructionsText}>
            Введіть вашу електронну пошту, і ми надішлемо вам інструкції для відновлення пароля.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Електронна пошта</Text>
            <TextInput
              style={[styles.input, emailError ? styles.inputError : null]}
              placeholder="Ваша електронна пошта"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
            {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}
          </View>

          <TouchableOpacity
            style={[styles.btn, styles.btnSend, !email && styles.btnDisabled]}
            onPress={handleSendInstructions}
            disabled={!email}
          >
            <Text style={styles.btnText}>Надіслати інструкції</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginRedirect}>
          <Text style={styles.loginText}>Повернутися до </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>входу</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;