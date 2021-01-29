import React, { useEffect } from "react";
//uuid
import { v4 as uuidv4 } from "uuid";
//Components
import Nav from "../Components/Nav";
import CreatePost from "../Components/CreatePost";
import PostList from "../Components/PostList";
import EditPost from "../Components/EditPost";
//Styles
import styled from "styled-components";
//Dispatch
import { useDispatch, useSelector } from "react-redux";
//Action
import findAllPosts from "../Store/actions/posts/findAllPosts";

const Home = () => {
  //Dispatch
  const dispatch = useDispatch();

  //Buscar os Posts
  const stateAllPosts = useSelector((state) => state.posts.allPosts);

  const fetchApi = () => {
    dispatch(findAllPosts());
  };

  useEffect(() => fetchApi(), []);

  return (
    <div>
      <Nav />

      <StyledContainer>
        <CreatePost />
        <PostList stateAllPosts={stateAllPosts} />
      </StyledContainer>
    </div>
  );
};

//Styled Components

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Home;
