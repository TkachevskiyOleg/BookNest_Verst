import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: width * 0.9,
    maxWidth: 353,
    height: 340,
    marginBottom: 24,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    maxWidth: 353,
    alignItems: 'center',
  },
  welcomeSection: {
    marginBottom: 32,
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000000',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  authOptions: {
    width: '100%',
  },
  btn: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogin: {
    backgroundColor: '#2E8B57',
  },
  btnRegister: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#8fc9b9',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
  },
  btnRegisterText: {
    color: '#2E8B57',
  },
});

export default styles;