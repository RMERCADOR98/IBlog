import React, { useState } from "react";
//Styled
import styled from "styled-components";
//uuid
import { v4 as uuidv4 } from "uuid";
//icons
import { Send } from "@styled-icons/ionicons-solid/Send";
//react-redux
import { useDispatch } from "react-redux";
//Actions
import CreatePosts from "../Store/actions/posts/createPosts";

const CreatePost = () => {
  //Dispatch
  const dispatch = useDispatch();

  //state
  const [FormData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
  });

  //Handlers
  const writeHandler = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };
  const submitPostHandler = (e) => {
    e.preventDefault();

    dispatch(CreatePosts(FormData));
    setFormData({
      title: "",
      description: "",
      content: "",
    });
  };

  return (
    <StyledTextBox>
      <StyledInput>
        <input
          type="text"
          placeholder="Insert title"
          onChange={writeHandler}
          name="title"
          value={FormData.title}
        />
        <input
          type="text"
          placeholder="Insert a description"
          onChange={writeHandler}
          name="description"
          value={FormData.description}
        />
        <textarea
          type="text"
          placeholder="Write your post here"
          onChange={writeHandler}
          name="content"
          value={FormData.content}
        />
        <StyledIcon>
          <StyledSend onClick={submitPostHandler} />
        </StyledIcon>
      </StyledInput>
    </StyledTextBox>
  );
};

const StyledTextBox = styled.div`
  height: 10vh;
  width: 40vw;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const StyledInput = styled.div`
  padding: 0.8rem;
  border: 2px solid #d4d4d4;
  border-radius: 5px;
  input {
    height: 2vh;
    width: 100%;
    outline: none;
    border: 2.2px solid transparent;
    margin-bottom: 1rem;
    transition: 0.2s;
    &:focus {
      transition: 0.2s;
      border-bottom: 2.2px solid rgb(124, 100, 251);
    }
  }
  textarea {
    height: 4vh;
    width: 100%;
    outline: none;
    resize: none;
    border: 2.2px solid transparent;
    margin-bottom: 0.3rem;
    transition: 0.3s;
    &:focus {
      transition: 0.3s;
      border-bottom: 2.2px solid rgb(124, 100, 251);
    }
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledSend = styled(Send)`
  height: 1.4rem;
  cursor: pointer;
  color: rgb(124, 100, 251);
  -webkit-transition: -webkit-transform 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  &:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export default CreatePost;
