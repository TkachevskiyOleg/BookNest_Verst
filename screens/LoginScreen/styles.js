import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  form: {
    marginBottom: 32,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 16,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff3860',
  },
  errorText: {
    color: '#ff3860',
    fontSize: 14,
    marginTop: 5,
  },
  passwordField: {
    position: 'relative',
  },
  togglePassword: {
    position: 'absolute',
    right: 12,
    top: '50%',
    marginTop: -12,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginTop: -10,
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#2E8B57',
    fontSize: 14,
  },
  btn: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnLogin: {
    backgroundColor: '#2E8B57',
  },
  btnDisabled: {
    backgroundColor: '#b9e9cd',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    paddingHorizontal: 15,
    color: '#777',
    fontSize: 14,
  },
  socialLogin: {
    marginBottom: 30,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  socialBtn: {
    width: 90,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerRedirect: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#333',
  },
  registerLink: {
    color: '#2E8B57',
    fontWeight: 'bold',
  },
});

export default styles;