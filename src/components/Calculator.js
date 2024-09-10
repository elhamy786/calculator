import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  inputDigit,
  inputDecimal,
  handleOperator,
  clear,
  equal,
} from '../redux/calculatorSlice';

const Calculator = () => {
  const dispatch = useDispatch();
  const displayValue = useSelector((state) => state.calculator.displayValue);

  return (
    <div className="calculator">
      <div id="display" className="display">
        {displayValue}
      </div>
      <button id="clear" onClick={() => dispatch(clear())}>
        AC
      </button>
      <button id="divide" onClick={() => dispatch(handleOperator('/'))}>
        /
      </button>
      <button id="multiply" onClick={() => dispatch(handleOperator('*'))}>
        *
      </button>
      <button id="seven" onClick={() => dispatch(inputDigit('7'))}>
        7
      </button>
      <button id="eight" onClick={() => dispatch(inputDigit('8'))}>
        8
      </button>
      <button id="nine" onClick={() => dispatch(inputDigit('9'))}>
        9
      </button>
      <button id="subtract" onClick={() => dispatch(handleOperator('-'))}>
        -
      </button>
      <button id="four" onClick={() => dispatch(inputDigit('4'))}>
        4
      </button>
      <button id="five" onClick={() => dispatch(inputDigit('5'))}>
        5
      </button>
      <button id="six" onClick={() => dispatch(inputDigit('6'))}>
        6
      </button>
      <button id="add" onClick={() => dispatch(handleOperator('+'))}>
        +
      </button>
      <button id="one" onClick={() => dispatch(inputDigit('1'))}>
        1
      </button>
      <button id="two" onClick={() => dispatch(inputDigit('2'))}>
        2
      </button>
      <button id="three" onClick={() => dispatch(inputDigit('3'))}>
        3
      </button>
      <button id="equals" onClick={() => dispatch(equal())}>
        =
      </button>
      <button id="zero" onClick={() => dispatch(inputDigit('0'))}>
        0
      </button>
      <button id="decimal" onClick={() => dispatch(inputDecimal())}>
        .
      </button>
    </div>
  );
};

export default Calculator;
