import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 20, 
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30, 
  },
  backArrow: {
    fontSize: 28,
    color: '#000',
    lineHeight: 100,
    marginRight: 10,
  },
  backButtonText: {
    color: '#000',
    fontSize: 18,
  },
  content: {
    marginTop: 10, 
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
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
  btn: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnReset: {
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
});

export default styles;