import axios from "axios";

const findAllPosts = () => async (dispatch, getState) => {
  const stateToken = getState().auth.token;
  const base_url = "https://iblog-api.herokuapp.com/api/v1/posts/find";

  if (stateToken === "") {
    await axios
      .get(base_url)
      .then(({ data }) => {
        // console.log(data);
        if (data) {
          dispatch({
            type: "NONE_USER",
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));
  } else {
    await axios
      .get(base_url, {
        headers: {
          Authorization: `Bearer ${stateToken}`,
        },
      })
      .then(({ data }) => {
        // console.log(data);
        if (data) {
          dispatch({
            type: "GET_POSTS",
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));
  }
};

export default findAllPosts;
