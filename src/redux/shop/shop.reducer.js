import shopReducerTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  errorMessage: undefined,
  isFetching: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopReducerTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopReducerTypes.FECTH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case shopReducerTypes.FECTH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
