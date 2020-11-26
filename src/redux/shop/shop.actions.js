import shopReducerTypes from "./shop.types";

export const updateCollections = (collectionsToMap) => ({
  type: shopReducerTypes.UPDATE_COLLECTIONS,
  payload: collectionsToMap,
});
