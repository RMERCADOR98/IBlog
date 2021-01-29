import React, { useState } from "react";
//Styles
import styled from "styled-components";
//icons
import { Send } from "@styled-icons/ionicons-solid/Send";
//action
import UpdatePost from "../Store/actions/posts/UpdatePosts";
//Dispatch
import { useDispatch } from "react-redux";

const EditPost = ({ post, closeHandler, setShow }) => {
  //state
  const [form, setForm] = useState({
    title: post.title,
    description: post.description,
    content: post.content,
  });

  //dispatch
  const dispatch = useDispatch();
  // console.log(post);

  //Handlers

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = () => {
    const initState = {
      id: post.id,
      title: form.title,
      description: form.description,
      content: form.content,
    };
    dispatch(UpdatePost(initState));
    setForm({
      title: "",
      description: "",
      content: "",
    });
    setShow(false);
  };

  return (
    <StyledCardShadow onClick={closeHandler} className="shadow">
      <StyledEdit>
        <div className="form">
          <StyledInput>
            <input
              type="text"
              placeholder="Insert title"
              value={form.title}
              name="title"
              onChange={onChangeHandler}
            />
            <br />
            <input
              type="text"
              placeholder="Insert a description"
              value={form.description}
              name="description"
              onChange={onChangeHandler}
            />
            <textarea
              type="text"
              placeholder="Write your post here"
              value={form.content}
              name="content"
              onChange={onChangeHandler}
            />
            <StyledIcon>
              <StyledSend onClick={submitHandler} />
            </StyledIcon>
          </StyledInput>
        </div>
      </StyledEdit>
    </StyledCardShadow>
  );
};

const StyledCardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;
const StyledEdit = styled.div`
  margin-top: 15rem;
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
`;

const StyledInput = styled.div`
  padding: 0.8rem;
  border: 2px solid black;
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
`;

export default EditPost;
