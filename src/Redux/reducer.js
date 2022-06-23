import { arr } from '../FakeBD';

const initialState = {
  arrCards: arr,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_CATEGORY':
      const filterCards = () => {
        if (action.payload === 'Show All') return arr;
        return arr.filter((el) => {
          return el.category === action.payload;
        });
      };
      return {
        ...state,
        arrCards: filterCards(),
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
