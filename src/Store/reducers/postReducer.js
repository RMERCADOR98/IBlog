import { postsInitialState } from "../initialState/posts";

export const postsReducer = (state = postsInitialState, { type, payload }) => {
  // console.log(payload);
  switch (type) {
    case "NONE_USER":
      return {
        ...state,
        allPosts: payload,
      };
    case "CLEAN_POSTS":
      return {
        ...state,
        allPosts: payload.allPosts,
        userLikes: payload.userLikes,
      };
    case "GET_POSTS":
      return {
        ...state,
        allPosts: payload.posts,
        userLikes: payload.userLikes,
      };
    case "CREATE_POST":
      return {
        ...state,
        allPosts: [payload, ...state.allPosts],
      };
    case "DELETE_POST":
      return {
        ...state,
        allPosts: state.allPosts.filter(({ id }) => id !== payload),
      };
    case "UPDATE_POST":
      return {
        ...state,
        allPosts: state.allPosts.map((post) => {
          if (post.id === payload.id) {
            return payload;
          } else {
            return post;
          }
        }),
      };

    case "GIVE_LIKE":
    case "REMOVE_LIKE":
      return {
        ...state,
        userLikes: payload,
      };
    default:
      return state;
  }
};
