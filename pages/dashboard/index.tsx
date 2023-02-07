import ChatInput from "@/components/DashboardUtils/ChatInput";
import Header from "@/components/DashboardUtils/Header";
import MessageList from "@/components/DashboardUtils/MessageList";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { ReactElement } from "react";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <MessageList />
      <ChatInput />
    </div>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return !session
    ? { redirect: { destination: "/auth/signin", permanent: false } }
    : { props: { session } };
};

Dashboard.getLayout = function pageLayout(page: ReactElement) {
  return <>{page}</>;
};
