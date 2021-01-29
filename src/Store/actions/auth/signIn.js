import axios from "axios";

const SignIn = (FormData, history) => async (dispatch) => {
  //Fetch

  const base_url = "https://iblog-api.herokuapp.com/api/v1/auth/signin";

  await axios
    .post(base_url, FormData)
    .then(({ data }) => {
      // console.log(data);
      if (data.token) {
        dispatch({
          type: "SIGN_IN",
          payload: data,
        });
        history.push("/");
      }
    })
    .catch((err) => console.log(err));
};

export default SignIn;
