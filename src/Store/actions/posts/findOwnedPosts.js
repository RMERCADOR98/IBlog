// import axios from "axios";

// const findOwnedPosts = () => async (dispatch, getState) => {
//   const stateToken = getState().auth.token;
//   const base_url = "http://localhost:3002/api/v1/posts/find";

//   await axios
//     .get(base_url, {
//       headers: {
//         Authorization: `Bearer ${stateToken}`,
//       },
//     })
//     .then(({ data }) => {
//       if (data.length >= 1) {
//         dispatch({
//           type: "GET_POSTS",
//           payload: data,
//         });
//       }
//     })
//     .catch((err) => console.log(err));
// };

// export default findOwnedPosts;
