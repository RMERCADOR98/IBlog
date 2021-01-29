import { authInitialState } from "../../initialState/auth";
import { postsInitialState } from "../../initialState/posts";

//o getTstate vaibuscar um valor qualquer que queiramos que esteje no state, neste caso queremos o token
const SignOut = (history) => (dispatch, getState) => {
  const stateToken = getState().auth.token;
  if (stateToken !== "") {
    dispatch({
      type: "SIGN_OUT",
      payload: authInitialState,
    });
    dispatch({
      type: "CLEAN_POSTS",
      payload: postsInitialState,
    });
    history.push("/signIn2");
  }
};

export default SignOut;
