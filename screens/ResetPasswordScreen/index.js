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
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ResetPasswordScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleResetPassword = () => {
    let valid = true;

    if (password.length < 6) {
      setPasswordError('Пароль має містити принаймні 6 символів');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Паролі не співпадають');
      valid = false;
    } else {
      setConfirmPasswordError('');
    }

    if (valid) {
      console.log('Пароль успішно змінено');
      navigation.navigate('Login');
    }
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
            <Text style={styles.headerText}>Створіть новий пароль</Text>
          </View>

          <Text style={styles.subtitle}>
            Ваш новий пароль має відрізнятися від паролів, що використовувалися раніше.
          </Text>

          <View style={styles.form}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Пароль</Text>
              <View style={styles.passwordField}>
                <TextInput
                  style={[styles.input, passwordError ? styles.inputError : null]}
                  placeholder="Ваш пароль"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  style={styles.togglePassword}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#777"
                  />
                </TouchableOpacity>
              </View>
              {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Підтвердження паролю</Text>
              <View style={styles.passwordField}>
                <TextInput
                  style={[styles.input, confirmPasswordError ? styles.inputError : null]}
                  placeholder="Підтвердьте свій пароль"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity
                  style={styles.togglePassword}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Ionicons
                    name={showConfirmPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#777"
                  />
                </TouchableOpacity>
              </View>
              {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
            </View>

            <TouchableOpacity
              style={[styles.btn, styles.btnReset, (!password || !confirmPassword) && styles.btnDisabled]}
              onPress={handleResetPassword}
              disabled={!password || !confirmPassword}
            >
              <Text style={styles.btnText}>Скинути пароль</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordScreen;