import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";

const index = ({}) => {
  return <div className="container">Dashboard</div>;
};

export default index;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return !session
    ? { redirect: { destination: "/auth/signin", permanent: false } }
    : { props: { session } };
};
