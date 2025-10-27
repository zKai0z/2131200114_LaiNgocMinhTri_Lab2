import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    alignItems: 'flex-end',
    padding: 20,
  },
  displayText: {
    fontSize: 60,
    fontWeight: '200',
    color: '#000',
  },
  buttonContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  operatorButton: {
    backgroundColor: '#eee',
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  equalButton: {
    backgroundColor: '#f39c12',
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 28,
    color: '#000',
  },
  operatorText: {
    fontSize: 28,
    color: '#f39c12',
  },
  equalText: {
    fontSize: 28,
    color: '#fff',
  },
  clearButton: {
    flex: 1,
    backgroundColor: '#ccc',
    borderRadius: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  clearText: {
    fontSize: 22,
    color: '#000',
  },
});
