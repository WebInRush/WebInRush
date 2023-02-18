import { Skeleton } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--dark-color), 0.5);
  -webkit-backdrop-filter: blur(0.5rem);
  backdrop-filter: blur(0.5rem);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export default function Loader() {
  return (
    <Loading>
      <Skeleton
        variant="rounded"
        width={"80%"}
        height={"30%"}
        style={{
          background: "rgba(0,0,0, 0.1)",
        }}
      />
      <Skeleton
        variant="rounded"
        width={"80%"}
        height={60}
        style={{
          background: "rgba(0,0,0, 0.1)",
        }}
      />
      <Skeleton
        variant="rounded"
        width={"80%"}
        height={"30%"}
        style={{
          background: "rgba(0,0,0, 0.1)",
        }}
      />
      <Skeleton
        variant="rounded"
        width={"80%"}
        height={60}
        style={{
          background: "rgba(0,0,0, 0.1)",
        }}
      />
    </Loading>
  );
}
