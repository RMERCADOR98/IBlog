import React, { useState } from "react";
//styles
import styled from "styled-components";
//icons
import { Heart as HeartFill } from "@styled-icons/fa-solid/Heart";
import { Heart } from "@styled-icons/fa-regular/Heart";
import { DeleteOutline } from "@styled-icons/material/DeleteOutline";
import { Delete } from "@styled-icons/material/Delete";
import { EditOutline } from "@styled-icons/evaicons-outline/EditOutline";
import { Edit } from "@styled-icons/evaicons-solid/Edit";
//Components
import EditPost from "./EditPost";
//Dispatch
import { useDispatch, useSelector } from "react-redux";
//Action
import deletePosts from "../Store/actions/posts/deletePosts";
import likePost from "../Store/actions/like/likePost";
import dislikePost from "../Store/actions/like/dislikePost";

const Post = ({ post }) => {
  //dispatch
  const dispatch = useDispatch();

  //Selector
  const stateUserLikes = useSelector((state) => state.posts.userLikes);
  const stateUserId = useSelector((state) => state.auth.id);

  //State
  const [show, setShow] = useState(false);

  //Handlers

  const deleteHandler = (id) => {
    dispatch(deletePosts(id));
  };

  const closeHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      setShow(false);
    }
  };

  const likeHandler = (post) => {
    dispatch(likePost(post));
  };
  const dislikeHandler = (post) => {
    dispatch(dislikePost(post));
  };

  if (post.userId === stateUserId) {
    return (
      <StyledPost>
        <div>
          <h3>{post.title}</h3>
          <h4>{post.description}</h4>
          <h5>{post.id}</h5>
          <h5>likes:{post.likes}</h5>
        </div>

        <StyledIcons>
          {stateUserLikes.includes(post.id) ? (
            <StyledHeartFill onClick={() => dislikeHandler(post)} />
          ) : (
            <StyledHeart onClick={() => likeHandler(post)} />
          )}

          <StyledEditOutlined onClick={() => setShow(true)} />
          <StyledDeletedOutline onClick={() => deleteHandler(post.id)} />
        </StyledIcons>

        {show && (
          <EditPost closeHandler={closeHandler} post={post} setShow={setShow} />
        )}
      </StyledPost>
    );
  } else {
    return (
      <StyledPost>
        <div>
          <h3>{post.title}</h3>
          <h4>{post.description}</h4>
          <h5>{post.id}</h5>
          <h5>likes:{post.likes}</h5>
        </div>

        <StyledIcons>
          {stateUserLikes.includes(post.id) ? (
            <StyledHeartFill onClick={() => dislikeHandler(post)} />
          ) : (
            <StyledHeart onClick={() => likeHandler(post)} />
          )}
        </StyledIcons>
      </StyledPost>
    );
  }
};

//Styled Components
const StyledPost = styled.div`
  padding: 1.5rem 0rem;
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const StyledHeart = styled(Heart)`
  height: 1.4rem;
  cursor: pointer;
  color: #adadad;
  transition: 0.2s ease;
  &:hover {
    transition: 0.2 ease;
    transform: scale(1.1);
    color: rgb(124, 100, 251);
  }
`;

const StyledHeartFill = styled(HeartFill)`
  height: 1.4rem;
  cursor: pointer;
  transition: 0.2 ease;
  transform: scale(1);
  color: rgb(124, 100, 251);
  &:hover {
    transition: 0.2 ease;
    transform: scale(1.1);
  }
`;

const StyledDeletedOutline = styled(DeleteOutline)`
  height: 1.4rem;
  cursor: pointer;
  color: #adadad;
  transition: 0.2s ease;
  &:hover {
    transition: 0.2s ease;
    transform: scale(1.1);
    color: #f07272;
  }
`;
const StyledDeleted = styled(Delete)`
  height: 1.4rem;
  cursor: pointer;
  transition: 0.3s;
  transform: scale(1);
  color: #f07272;
  &:hover {
    transition: 0.3;
    transform: scale(1.1);
  }
`;

const StyledEditOutlined = styled(EditOutline)`
  height: 1.4rem;
  cursor: pointer;
  color: #adadad;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
    color: #f3e074;
  }
`;

const StyledEdit = styled(Edit)`
  height: 1.4rem;
  cursor: pointer;
  transition: 0.3s;
  transform: scale(1);
  color: #f07272;
  &:hover {
    transition: 0.3;
    transform: scale(1.1);
  }
`;

export default Post;
