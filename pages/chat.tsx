import About from "@/components/chatUtils/About";
import ChatInput from "@/components/chatUtils/ChatInput";
import Header from "@/components/chatUtils/Header";
import MessageList from "@/components/chatUtils/MessageList";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { ReactElement, useState } from "react";
import styled from "styled-components";

const ChatStyle = styled.div<{ isInfo: boolean }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  & .chat {
    flex: 1;
    overflow: hidden;
    transition: 0.15s;
    @media screen and (max-width: 50rem) {
      translate: ${({ isInfo }) => (isInfo ? "-100vw" : "0")};
    }
  }
`;

const Chat = () => {
  const [info, setInfo] = useState(false);
  return (
    <ChatStyle isInfo={info}>
      <Head>
        <title>Chat | WebInRush 🚀</title>
      </Head>
      <div className="chat">
        <Header isInfo={info} setInfo={setInfo} />
        <MessageList />
        <ChatInput />
      </div>
      <About isInfo={info} setInfo={setInfo} />
    </ChatStyle>
  );
};

export default Chat;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return !session
    ? { redirect: { destination: "/auth/signin", permanent: false } }
    : { props: { session } };
};

Chat.getLayout = function pageLayout(page: ReactElement) {
  return <>{page}</>;
};
