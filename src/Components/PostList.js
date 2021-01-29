import React from "react";
//Components
import Post from "./Post";
//styles
import styled from "styled-components";

const PostList = ({ stateAllPosts }) => {
  return (
    <StyledList>
      {stateAllPosts.map((post) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </StyledList>
  );
};

const StyledList = styled.div`
  height: 10vh;
  width: 40vw;
`;

export default PostList;
