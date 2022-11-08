import axios from "axios";

const deletePosts = (id) => async (dispatch, getState) => {
  const stateToken = getState().auth.token;
  const base_url = `https://iblogapi-production.up.railway.app/api/v1/posts/${id}`;

  console.log(id);

  await axios
    .delete(base_url, {
      headers: {
        Authorization: `Bearer ${stateToken}`,
      },
    })
    .then(({ data }) => {
      console.log(data);
      const val = data.status;
      if (!val) {
        dispatch({
          type: "DELETE_POST",
          payload: id,
        });
      }
    })
    .catch((err) => console.log(err));
};

export default deletePosts;
