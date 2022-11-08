import axios from "axios";

const dislikePost = (post) => async (dispatch, getState) => {
  const stateToken = getState().auth.token;

  const postData = {
    id: post.id,
    title: post.title,
    description: post.description,
    content: post.content,
    userId: post.userId,
    likes: post.likes - 1,
  };

  const base_url = `https://iblogapi-production.up.railway.app/api/v1/likes/dislike/${postData.id}`;

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
          type: "REMOVE_LIKE",
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

export default dislikePost;
