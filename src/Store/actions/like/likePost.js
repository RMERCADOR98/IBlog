import axios from "axios";

const likePost = (post) => async (dispatch, getState) => {
  const stateToken = getState().auth.token;

  const postData = {
    id: post.id,
    title: post.title,
    description: post.description,
    content: post.content,
    userId: post.userId,
    likes: post.likes + 1,
  };

  const base_url = `https://iblog-api.herokuapp.com/api/v1/likes/like/${postData.id}`;

  await axios
    .patch(
      base_url,
      {},
      {
        headers: {
          Authorization: `Bearer ${stateToken}`,
        },
      }
    )
    .then(({ data }) => {
      if (data) {
        dispatch({
          type: "GIVE_LIKE",
          payload: data,
        });
        dispatch({
          type: "UPDATE_POST",
          payload: postData,
        });
      }
    })
    .catch((err) => console.log(err));
};

export default likePost;
