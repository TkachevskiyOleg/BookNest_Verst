import { StyleSheet } from 'react-native';

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
  instructions: {
    marginBottom: 20,
  },
  instructionsText: {
    color: '#666',
    lineHeight: 22,
    textAlign: 'left',
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
  successText: {
    color: '#2E8B57',
    fontSize: 14,
    marginTop: 5,
  },
  btn: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  btnSend: {
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
  loginRedirect: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#333',
  },
  loginLink: {
    color: '#2E8B57',
    fontWeight: 'bold',
  },
});

export default styles;