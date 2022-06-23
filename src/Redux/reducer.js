import { arr } from '../FakeBD';

const initialState = {
  arrCards: arr,
  filter: 'Show All',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_CATEGORY':
      return {
        ...state,
        filter: action.payload,
      };
    case 'DELETED_CARD':
      return {
        ...state,
        arrCards: state.arrCards.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
