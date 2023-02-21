import { CircularProgress, Skeleton } from "@mui/material";
import axios from "axios";
import getUrls from "get-urls";
import Head from "next/head";
import { FormEvent, useState } from "react";
import styled from "styled-components";
import webinrush from "../../public/images/webinrush.webp";

const InstaVideoDownloaderStyle = styled.div`
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
          user-select: none;
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

const og = {
  title: "Instagram Video Downloader | WebInRush 🚀",
  describedTitle:
    "Download Instagram videos quickly and easily with WebInRush's free video downloader.",
  description:
    "Experience hassle-free downloading of Instagram videos with WebInRush's user-friendly video downloader. Easily save your favorite videos for offline viewing or repurpose them for your own creative projects.",
  image: webinrush.src,
  url: "https://webinrush.vercel.app/products/instavideodownloader",
};

type Video = {
  src: string;
  poster?: string;
  title: string;
};

const InstaVideoDownloader = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await axios
      .post("/api/instaVideoDownloader", {
        urls: Array.from(getUrls(videoUrl.trim())),
      })
      .then((res) => {
        setLoading(false);
        setVideos(res.data);
      })
      .catch((err: { message: string }): void => {
        setError(err.message);
        setLoading(false);
      });
  };
  return (
    <InstaVideoDownloaderStyle className="container">
      <Head>
        <title>Instagram Video Downloader | WebInRush 🚀</title>
        <meta name="description" content={og.description} />
        <link rel="canonical" href={og.url} />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Full-Stack Developer",
            "@id": ${og.url},
            "name": ${og.describedTitle},
            "url": ${og.url},
            "sameAs": [
              "https://www.instagram.com/itsme_subid/",
              "https://twitter.com/ItsmeSubid"
            ],
            "logo": {
              "@type": "ImageObject",
              "@id": ${og.url},
              "inLanguage": "en-US",
              "url": ${og.image},
              "contentUrl": ${og.image},
              "width": 1000,
              "height": 1000,
              "caption": "itsme-Subid"
            },
            "image": { "@id": ${og.url} }
          },
          {
            "@type": "WebPage",
            "@id": ${og.url},
            "url": ${og.url},
            "name": ${og.describedTitle},
            "isPartOf": {
              "@id": ${og.url}
            },
            "about": { "@id": ${og.url} },
            "description": ${og.description},
            "inLanguage": "en-US"
          }
        ]
      }
      `}
        </script>
        <meta property="og:site_name" content={og.title} />
        <meta property="og:url" content={og.url} />
        <meta property="og:title" content={og.describedTitle} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />
        <meta property="twitter:url" content={og.url} />
        <meta property="twitter:title" content={og.describedTitle} />
        <meta property="twitter:description" content={og.description} />
        <meta property="twitter:image" content={og.image} />
      </Head>
      <div className="alert">
        <p>
          <span>⚠️</span> Some features may not work.
        </p>
      </div>
      <h1>
        <span>Instagram Video Downloader</span>
        <span className="small">from WEBINRUSH</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Enter the URL of the video"
          spellCheck="false"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <button type="submit" disabled={!!loading && !videoUrl.length}>
          {!!loading && <CircularProgress color="inherit" size={"1rem"} />}
          <span>Download</span>
        </button>
      </form>
      {!!error.length && <p>{error}</p>}
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
      {!!videos.length &&
        !loading &&
        videos.map((video, index) => (
          <div key={index}>
            <h2>{video?.title}</h2>
            <div className="videos">
              <div>
                <video src={video?.src} poster={video?.poster}></video>
                <a
                  download={video?.src}
                  href={video?.src}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      {/* {!!video.video.length && !loading && !!video.video[0].url && (
        <div>
          <h2>{video.title}</h2>
          <div className="videos">
            {video.video.map((item: any, index) => (
              <div key={index}>
                <video src={item.url}></video>
                <a
                  download={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download {item.qualityLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      )} */}
    </InstaVideoDownloaderStyle>
  );
};

export default InstaVideoDownloader;
