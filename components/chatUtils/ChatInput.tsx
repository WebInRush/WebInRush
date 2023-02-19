import { useState, FormEvent, useEffect } from "react";
import styled from "styled-components";
import { IoMdSend } from "react-icons/io";
import { v4 as uuid } from "uuid";
import { Message } from "@/message";
import { useSession } from "next-auth/react";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const ChatForm = styled.footer`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  & form {
    display: flex;
    align-items: center;
    padding: 1rem;
    margin-inline: auto;
    width: 100%;
    box-shadow: 0 -2px 5px rgb(var(--dark-color), 0.25);
    background-color: rgb(var(--secondary-color), 0.25);
    transition: 0.15s;
    @media screen and (max-width: 70rem) {
      border-radius: 0;
      padding: 0.75rem;
    }
    & .form-control {
      display: flex;
      width: 100%;
      gap: 0.5rem;
      & input {
        width: 100%;
        height: 3rem;
        border: none;
        font-size: 1.25rem;
        border-radius: 1rem;
        padding: 0.5rem 1rem;
        background-color: rgb(var(--white-color), 0.75);
        color: rgb(var(--dark-color));
        &::placeholder {
          color: rgb(var(--dark-color), 0.5);
          font-size: 1rem;
        }
      }
      & button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        border: none;
        color: rgb(var(--white-color), 0.75);
        & svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`;

const uploadMessage = async (message: Message) => {
  await addDoc(collection(db, "messages"), {
    message,
  });
};

const ChatInput = () => {
  const [input, setInput] = useState("");
  const { data: session } = useSession();
  const addMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;
    const messageToSend = input;
    setInput("");
    const id = uuid();
    const message: Message = {
      id,
      message: messageToSend,
      createdAt: serverTimestamp(),
      username: session?.user?.name!,
      profilePic: session?.user?.image!,
      email: session?.user?.email!,
    };
    uploadMessage(message);
  };
  useEffect(() => {
    // scroll to bottom
    if (session) {
      const messageInput = document.getElementById("messageInput");
      messageInput?.focus();
    }
  }, [session]);
  return (
    <ChatForm>
      <form onSubmit={addMessage}>
        <div className="form-control">
          <input
            id="messageInput"
            type="text"
            value={input}
            spellCheck="false"
            title="Type a Message"
            placeholder="Type a Message"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" title="Send Message">
            <IoMdSend />
          </button>
        </div>
      </form>
    </ChatForm>
  );
};

export default ChatInput;
