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
    fontSize: 35,
    fontWeight: '700',
    textAlign: 'center',
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 24,
  },
  emailText: {
    fontSize: 16,
    color: '#2E8B57',
    textAlign: 'center',
    marginBottom: 32,
    fontWeight: '600',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  resendButton: {
    alignSelf: 'center',
    marginBottom: 32,
  },
  resendButtonText: {
    color: '#2E8B57',
    fontSize: 16,
  },
  btn: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
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