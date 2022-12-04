import { useState } from "react";
import styled from "styled-components";
import { BsChatText, BsX } from "react-icons/bs";
import botPicture from "../assets/bot-pic.jpg";

const ChatBubble = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: rgb(var(--primary-color));
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: 0.15s;
  z-index: 1;
  box-shadow: rgba(var(--primary-color), 0.15) 1.95px 1.95px 2.6px;
  transform-origin: bottom right;
  &:hover {
    scale: 1.05;
    box-shadow: rgba(var(--primary-color), 0.2) 0px 7px 29px 0px;
  }
  &.active {
    scale: 0;
    opacity: 0;
  }
  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: rgb(var(--light-color));
  }
`;

const ChatBoxStyled = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 20rem;
  height: 20rem;
  border-radius: 1rem;
  background-color: rgb(var(--dark-color));
  display: grid;
  place-content: center;
  transition: 0.15s;
  z-index: 1;
  box-shadow: rgba(var(--dark-color) 0.15) 1.95px 1.95px 2.6px;
  overflow: hidden;
  scale: 0;
  opacity: 0;
  transform-origin: bottom right;
  &.active {
    scale: 1;
    opacity: 1;
  }
  & .chatbox-container {
    position: relative;
    width: 20rem;
    height: 20rem;
    & .chatbox-header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3rem;
      padding: 0 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: rgb(var(--primary-color));
      & .chatbox-header-img {
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        background-color: rgb(var(--dark-color));
        display: grid;
        place-content: center;
        & img {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
      }
      & .chatbox-header-title {
        font-size: 1.25rem;
        font-weight: 600;
        color: rgb(var(--light-color));
      }
      & .chatbox-header-close {
        margin-left: auto;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: 0.15s;
        border-radius: 1rem;
        &:hover {
          scale: 1.05;
          background-color: rgb(var(--dark-color), 0.15);
        }
        & svg {
          width: 2rem;
          height: 2rem;
          color: rgb(var(--light-color));
        }
      }
    }
  }
`;

const ChatBox = () => {
  const [chatBox, setChatBox] = useState(false);
  return (
    <>
      <ChatBubble
        className={chatBox ? "active" : ""}
        onClick={() => {
          setChatBox((prev) => !prev);
        }}
      >
        <BsChatText />
      </ChatBubble>
      <ChatBoxStyled className={`${chatBox && "active"} `}>
        <div className="chatbox-container">
          <header className="chatbox-header">
            <div className="chatbox-header-img">
              <img src={botPicture} alt="Bot" />
            </div>
            <h1 className="chatbox-header-title">How can we help?</h1>
            <div
              className="chatbox-header-close"
              onClick={() => {
                setChatBox((prev) => !prev);
              }}
            >
              <BsX />
            </div>
          </header>
        </div>
      </ChatBoxStyled>
    </>
  );
};

export default ChatBox;
