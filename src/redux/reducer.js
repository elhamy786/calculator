import { CLEAR, INPUT_NUMBER, INPUT_OPERATOR, EVALUATE } from './actions';

const initialState = {
  display: '0',
  previousValue: '',
  currentOperator: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR:
      return { ...state, display: '0', previousValue: '', currentOperator: null };

    case INPUT_NUMBER:
      return {
        ...state,
        display: state.display === '0' ? action.payload : state.display + action.payload,
      };

    case INPUT_OPERATOR:
      return {
        ...state,
        previousValue: state.display,
        display: '0',
        currentOperator: action.payload,
      };

    case EVALUATE:
      if (state.currentOperator && state.previousValue) {
        const result = eval(`${state.previousValue} ${state.currentOperator} ${state.display}`);
        return { ...state, display: String(result), previousValue: '', currentOperator: null };
      }
      return state;

    default:
      return state;
  }
};

export default reducer;
