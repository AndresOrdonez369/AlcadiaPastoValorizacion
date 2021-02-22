import Actions from '../../redux/actionTypes';

const STATE_INITIAL = {
  news: [],
};

export default (state = STATE_INITIAL, action) => {
  switch (action.type) {
    case Actions.GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return { ...state };
  }
};
