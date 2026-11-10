
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8066A6',
  },

  keyboard: {
    flex: 1,
  },

  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 35,
    paddingBottom: 35,
    paddingHorizontal: 20,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },

  logo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#17121C',
    fontStyle: 'italic',
  },

  dotRed: {
    color: '#E53935',
    fontSize: 24,
    marginHorizontal: 1,
  },

  dotBlue: {
    color: '#29B6F6',
    fontSize: 24,
    marginHorizontal: 1,
  },

  dotYellow: {
    color: '#FBC02D',
    fontSize: 24,
    marginHorizontal: 1,
  },

  subtitle: {
    color: '#29202F',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 2.5,
    marginBottom: 30,
    textAlign: 'center',
  },

  frameOuter: {
    width: '100%',
    maxWidth: 370,
    backgroundColor: '#C99A3D',
    padding: 12,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#E8C66A',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  frameInner: {
    backgroundColor: '#8066A6',
    borderWidth: 5,
    borderColor: '#A87529',
    borderRadius: 21,
    paddingHorizontal: 20,
    paddingVertical: 28,
    alignItems: 'center',
  },

  cornerTopLeft: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#E8C66A',
    top: -9,
    left: -5,
    zIndex: 1,
  },

  cornerTopRight: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#E8C66A',
    top: -9,
    right: -5,
    zIndex: 1,
  },

  cornerBottomLeft: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#E8C66A',
    bottom: -9,
    left: -5,
    zIndex: 1,
  },

  cornerBottomRight: {
    position: 'absolute',
    width: 28,
    height: 28,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#E8C66A',
    bottom: -9,
    right: -5,
    zIndex: 1,
  },

  smallTitle: {
    color: '#35233F',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 3,
    marginBottom: 5,
  },

  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#17121C',
    letterSpacing: 1.5,
    textAlign: 'center',
  },

  line: {
    width: 60,
    height: 4,
    backgroundColor: '#C99A3D',
    marginTop: 15,
    marginBottom: 18,
    borderRadius: 5,
  },

  description: {
    color: '#29202F',
    fontSize: 13,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 27,
  },

  field: {
    width: '100%',
    marginBottom: 19,
  },

  label: {
    color: '#30223B',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 9,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F7F0FC',
    borderWidth: 2,
    borderColor: '#BBA8D2',
    borderRadius: 11,
    paddingHorizontal: 14,
    fontSize: 13,
    color: '#30223B',
  },

  button: {
    width: '100%',
    backgroundColor: '#C99A3D',
    borderWidth: 2,
    borderColor: '#E8C66A',
    borderRadius: 11,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    elevation: 4,
  },

  buttonText: {
    color: '#241A0D',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 2,
  },

  hint: {
    color: '#35233F',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginTop: 23,
  },

  footerDecor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27,
  },

  footerLine: {
    height: 1,
    width: 24,
    backgroundColor: '#D9BD78',
    marginHorizontal: 10,
  },

  footer: {
    color: '#29202F',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default styles;
