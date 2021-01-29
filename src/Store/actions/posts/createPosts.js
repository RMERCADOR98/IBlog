import axios from "axios";

//o formdata é aquilo que vamos passar no dispatch do state do component para serem enviados para o backend
const CreatePosts = (FormData) => async (dispatch, getState) => {
  const stateToken = getState().auth.token;

  const base_url = "https://iblog-api.herokuapp.com/api/v1/posts";

  await axios
    .post(base_url, FormData, {
      headers: {
        Authorization: `Bearer ${stateToken}`,
      },
    })
    .then(({ data }) => {
      console.log(data);
      //if(data) -> tambem podia fazer so assim
      if (data) {
        dispatch({
          type: "CREATE_POST",
          payload: data,
        });
      }
    })
    .catch((err) => console.log(err));
};

export default CreatePosts;
