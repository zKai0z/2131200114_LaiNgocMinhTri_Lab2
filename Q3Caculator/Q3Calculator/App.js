import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorInput = (op) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);
    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* First row */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberInput(7)} style={styles.button}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput(8)} style={styles.button}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput(9)} style={styles.button}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorInput('/')} style={styles.operatorButton}><Text style={styles.operatorText}>÷</Text></TouchableOpacity>
        </View>

        {/* Second row */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberInput(4)} style={styles.button}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput(5)} style={styles.button}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput(6)} style={styles.button}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorInput('*')} style={styles.operatorButton}><Text style={styles.operatorText}>×</Text></TouchableOpacity>
        </View>

        {/* Third row */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberInput(1)} style={styles.button}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput(2)} style={styles.button}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleNumberInput(3)} style={styles.button}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorInput('-')} style={styles.operatorButton}><Text style={styles.operatorText}>−</Text></TouchableOpacity>
        </View>

        {/* Fourth row */}
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleNumberInput(0)} style={styles.button}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleEqual} style={styles.equalButton}><Text style={styles.equalText}>=</Text></TouchableOpacity>
        </View>

        {/* Fifth row */}
        <View style={styles.row}>
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}><Text style={styles.clearText}>C</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => handleOperatorInput('+')} style={styles.operatorButton}><Text style={styles.operatorText}>+</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
