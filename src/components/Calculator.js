import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  inputDigit,
  inputOperator,
  calculateResult,
  clear,
} from '../redux/calculatorSlice';

const buttons = [
  { id: 'add', label: '+', type: 'operator' },
  { id: 'subtract', label: '-', type: 'operator' },
  { id: 'multiply', label: '*', type: 'operator' },
  { id: 'divide', label: '/', type: 'operator' },
  { id: 'seven', label: '7', type: 'digit' },
  { id: 'eight', label: '8', type: 'digit' },
  { id: 'nine', label: '9', type: 'digit' },
  { id: 'clear', label: 'C', type: 'action' },
  { id: 'four', label: '4', type: 'digit' },
  { id: 'five', label: '5', type: 'digit' },
  { id: 'six', label: '6', type: 'digit' },
  { id: 'equals', label: '=', type: 'action' },
  { id: 'one', label: '1', type: 'digit' },
  { id: 'two', label: '2', type: 'digit' },
  { id: 'three', label: '3', type: 'digit' },
  { id: 'decimal', label: '.', type: 'digit' },
  { id: 'zero', label: '0', type: 'digit' },

];

const Calculator = () => {
  const dispatch = useDispatch();
  const displayValue = useSelector((state) => state.calculator.displayValue);

  const handleButtonClick = (type, value) => {
    switch (type) {
      case 'operator':
        dispatch(inputOperator(value));
        break;
      case 'action':
        if (value === '=') {
          dispatch(calculateResult());
        } else if (value === 'C') {
          dispatch(clear());
        }
        break;
      case 'digit':
        dispatch(inputDigit(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      <div id="display">{displayValue}</div>
      <div className="buttons">
        {buttons.map(({ id, label, type }) => (
          <button key={id} id={id} type="button" onClick={() => handleButtonClick(type, label)}>
           {label} </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
