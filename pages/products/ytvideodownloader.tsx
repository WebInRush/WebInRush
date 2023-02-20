import { CircularProgress, Skeleton } from "@mui/material";
import axios from "axios";
import { FormEvent, useState } from "react";
import styled from "styled-components";

const YtVideoDownloaderStyle = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & h1 {
    font-size: 2rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    @media screen and (max-width: 50rem) {
      gap: 0;
    }
    & span {
      color: rgb(var(--white-color));
      display: flex;
      align-items: flex-end;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      &.small {
        position: relative;
        top: -0.5rem;
        font-size: 0.8rem;
        color: rgb(var(--white-color), 0.75);
        @media screen and (max-width: 50rem) {
          top: 0;
          align-items: center;
        }
      }
    }
    @media screen and (max-width: 50rem) {
      flex-direction: column;
    }
  }
  & form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column;
    }
    & input {
      flex: 1;
      width: 100%;
      padding: 1rem 1.5rem;
      border: 1px solid rgb(var(--white-color), 0.1);
      border-radius: 0.5rem;
    }
    & button {
      width: fit-content;
      padding: 1rem 1.5rem;
      border: 1px solid rgb(var(--white-color), 0.1);
      border-radius: 0.5rem;
      background-color: #fff;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      & span {
        margin-left: 10px;
      }
    }
  }
  & p {
    color: rgb(var(--red-color));
  }
  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & h2 {
      font-size: 1.2rem;
      font-weight: 600;
      color: rgb(var(--white-color), 0.75);
      text-align: center;
    }
    & div.videos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      place-items: center;
      gap: 1rem;
      & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        & video {
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
        }
        & a {
          padding: 0.5rem 1rem;
          width: fit-content;
          border: 1px solid rgb(var(--white-color), 0.1);
          color: rgb(var(--white-color));
          border-radius: 5rem;
          cursor: pointer;
          &:hover {
            background-color: rgb(var(--white-color), 0.1);
          }
          &:active {
            background-color: rgb(var(--white-color), 0.2);
          }
        }
      }
    }
  }
  & .loader {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    & span {
      border-radius: 0.5rem;
      overflow: hidden;
    }
    & > div {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
      gap: 1rem;
      @media screen and (max-width: 50rem) {
        grid-template-columns: 1fr;
      }
      & > div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        & .buttonLoader {
          border-radius: 5rem;
          overflow: hidden;
        }
      }
    }
  }
`;

const YtVideoDownloader = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [video, setVideo] = useState<{
    title: string;
    video: [
      {
        qualityLabel: string;
        url: string;
      }
    ];
  }>({
    title: "",
    video: [
      {
        qualityLabel: "",
        url: "",
      },
    ],
  });
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await axios
      .get(`/api/ytVideoDownloader?url=${videoUrl}`)
      .then((res) => {
        setVideo(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  };
  return (
    <YtVideoDownloaderStyle className="container">
      <h1>
        <span>Youtube Video Downloader</span>
        <span className="small">from WEBINRUSH</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the URL of the video"
          spellCheck="false"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button type="submit" disabled={!!loading}>
          {!!loading && <CircularProgress color="inherit" size={"1rem"} />}
          <span>Download</span>
        </button>
      </form>
      {!!error && <p>{error}</p>}
      {!!loading && (
        <div className="loader">
          <Skeleton
            variant="rounded"
            width={"100%"}
            height={"4rem"}
            style={{
              background: "rgba(255,255,255, 0.1)",
            }}
          />
          <div>
            {Array(2)
              .fill(0)
              .map((x, index) => (
                <div key={index}>
                  <Skeleton
                    variant="rounded"
                    width={"100%"}
                    height={"20rem"}
                    style={{
                      background: "rgba(255,255,255, 0.1)",
                    }}
                  />
                  <Skeleton
                    className="buttonLoader"
                    variant="rounded"
                    width={"10rem"}
                    height={"4rem"}
                    style={{
                      background: "rgba(255,255,255, 0.1)",
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
      {!!video.video.length && !loading && !!video.video[0].url && (
        <div>
          <h2>{video.title}</h2>
          <div className="videos">
            {video.video.map((item: any, index) => (
              <div key={index}>
                <video src={item.url}></video>
                <a download={item.url} target="_blank" rel="noreferrer">
                  Download {item.qualityLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </YtVideoDownloaderStyle>
  );
};

export default YtVideoDownloader;
