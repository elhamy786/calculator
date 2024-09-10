export const CLEAR = 'CLEAR';
export const INPUT_NUMBER = 'INPUT_NUMBER';
export const INPUT_OPERATOR = 'INPUT_OPERATOR';
export const EVALUATE = 'EVALUATE';

export const clear = () => ({
  type: CLEAR,
});

export const inputNumber = (number) => ({
  type: INPUT_NUMBER,
  payload: number,
});

export const inputOperator = (operator) => ({
  type: INPUT_OPERATOR,
  payload: operator,
});

export const evaluate = () => ({
  type: EVALUATE,
});
