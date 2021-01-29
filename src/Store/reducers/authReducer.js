import { authInitialState } from "../initialState/auth";

export const authReducer = (state = authInitialState, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case "SIGN_OUT":
    case "SIGN_IN":
      return {
        ...state,
        token: payload.token,
        username: payload.username,
        id: payload.id,
      };
    default:
      return state;
  }
};
