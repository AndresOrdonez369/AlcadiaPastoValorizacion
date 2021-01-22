import Actions from '../../redux/actionTypes';

const STATE_INITIAL = {
  error: false,
  errorCode: '',
  errorMessage: '',
  isLoading: false,
};

export default (state = STATE_INITIAL, action) => {
  const { isLoading } = action;
  switch (action.type) {
    case Actions.SIGN_OUT:
      return STATE_INITIAL;
    case Actions.REGISTER_ERROR:
      return {
        ...state,
        error: true,
        errorCode: action.payload.errorCode,
        errorMessage: action.payload.errorMessage,
        isLoading,
      };
    default:
      return { ...state };
  }
};
