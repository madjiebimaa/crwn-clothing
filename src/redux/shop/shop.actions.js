import shopReducerTypes from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: shopReducerTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: shopReducerTypes.FECTH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsSuccess = (collectionsToMap) => ({
  type: shopReducerTypes.FECTH_COLLECTIONS_SUCCESS,
  payload: collectionsToMap,
});
