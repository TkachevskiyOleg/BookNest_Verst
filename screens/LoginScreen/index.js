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
import { SafeAreaView } from 'react-native-safe-area-context';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = () => {
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError('Будь ласка, введіть дійсну адресу електронної пошти');
      valid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Пароль має містити принаймні 6 символів');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      console.log('Увійти з:', email, password);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Вхід</Text>
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
          </View>

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

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotPasswordText}>Забули пароль?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, styles.btnLogin, (!email || !password) && styles.btnDisabled]}
            onPress={handleLogin}
            disabled={!email || !password}
          >
            <Text style={styles.btnText}>Увійти</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Або</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialLogin}>
          <View style={styles.socialButtons}>
            <TouchableOpacity style={[styles.socialBtn, styles.googleBtn]}>
              <Ionicons name="logo-google" size={24} color="#f4424bff" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialBtn, styles.appleBtn]}>
              <Ionicons name="logo-apple" size={24} color="#000000" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialBtn, styles.facebookBtn]}>
              <Ionicons name="logo-facebook" size={24} color="#1877F2" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.registerRedirect}>
          <Text style={styles.registerText}>Ще не маєте акаунта? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>Реєстрація</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;