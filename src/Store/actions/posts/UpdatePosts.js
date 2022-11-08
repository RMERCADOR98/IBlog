import axios from "axios";

const UpdatePost = (FormData) => async (dispatch, getState) => {
  const stateToken = getState().auth.token;

  const base_url = `https://iblogapi-production.up.railway.app/api/v1/posts/${FormData.id}`;

  const form = {
    title: FormData.title,
    description: FormData.description,
    content: FormData.content,
  };
  await axios
    .put(base_url, form, {
      headers: {
        Authorization: `Bearer ${stateToken}`,
      },
    })
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: "UPDATE_POST",
          payload: data,
        });
      }
    })
    .catch((err) => console.log(err));
};

export default UpdatePost;
