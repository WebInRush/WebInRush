import { db } from "@/firebase";
import { collection } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "styled-components";
import Message from "./Message";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { useEffect } from "react";

TimeAgo.addLocale(en);

const ChatsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 1rem 0 2rem 0;
  margin: auto;
  width: 100%;
  height: calc(100vh - 10.1rem);
  overflow-y: auto;
  @media screen and (max-width: 50rem) {
    height: calc(100vh - 9.6rem);
  }
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: rgb(var(--dark-color), 0.25);
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(var(--dark-color), 0.5);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(var(--dark-color), 0.75);
  }
`;

const MessageList = () => {
  const { data: session } = useSession();
  const [messages] = useCollection(session && collection(db, "messages"));
  const chats = messages?.docs?.map((doc) => ({
    ...doc.data().message,
    id: doc.id,
  }));
  // sort message by createdAt
  chats?.sort((a, b) => b.createdAt?.seconds! - a.createdAt?.seconds!);
  useEffect(() => {
    // scroll to bottom
    if (chats?.length) {
      const chat = document.querySelector(".chats");
      chat?.scrollTo(0, chat.scrollHeight);
    }
  }, [chats?.length]);

  return (
    <ChatsStyle className="chats">
      {chats?.reverse()?.map((chat) => (
        <Message key={chat.id} id={chat.id} chatMessage={chat} />
      ))}
    </ChatsStyle>
  );
};

export default MessageList;
