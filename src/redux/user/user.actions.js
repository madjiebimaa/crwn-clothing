import { userReducerTypes } from "./user.types";
export const setCurrentUser = (user) => ({
  type: userReducerTypes.SET_CURRENT_USER,
  payload: user,
});
