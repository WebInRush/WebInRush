import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ytvideodownloader from "../../public/images/ytvideodownloader.jpeg";
import InstaVideoDownloader from "../../public/images/instavideodownloader.jpeg";
import { AiFillGithub } from "react-icons/ai";

const ProductStyle = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  & h1 {
    font-size: 2rem;
    font-weight: 600;
  }
  & div {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    border-radius: 0.5rem;
    min-height: 10rem;
    transition: 0.15s;
    &.product {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      grid-template-rows: 1fr;
      place-items: center;
      gap: 1rem;
      @media screen and (max-width: 60rem) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
      &:hover img {
        transform: scale(1.025);
      }
    }
    &:hover {
      background-color: rgb(var(--white-color), 0.075);
    }
    @media screen and (max-width: 50rem) {
      padding: 0.5rem 0.75rem;
      background-color: rgb(var(--white-color), 0.075);
    }
    & .thumbnail {
      padding: 0;
      width: 100%;
      height: 100%;
      border: 1px solid rgb(var(--white-color), 0.1);
      border-radius: 0.5rem;
      object-fit: cover;
      overflow: hidden;
      &:hover {
        background-color: transparent;
        border: 1px solid rgb(var(--white-color), 0.1);
      }
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.15s;
      }
    }
    & .details {
      display: flex;
      flex-direction: column;
      justify-content: start;
      height: 100%;
      gap: 1rem;
      & .description {
        color: rgb(var(--white-color), 0.5);
        text-align: justify;
      }
      & .buttons {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 0;
        margin: 0;
        gap: 1rem;
        @media screen and (max-width: 50rem) {
          display: grid;
          place-content: center;
          flex-direction: column;
        }
        &:hover {
          background: none;
        }
        & button {
          width: 100%;
          padding: 1rem 3.5rem;
          font-size: 1rem;
          border: 1px solid rgb(var(--white-color), 0.1);
          border-radius: 0.5rem;
          cursor: pointer;
          &:hover {
            background-color: rgb(var(--white-color), 0.1);
            color: rgb(var(--white-color));
          }
          &:active {
            background-color: rgb(var(--white-color), 0.2);
            color: rgb(var(--white-color));
          }
        }
      }
    }
  }
`;

const Product = () => {
  const products = [
    {
      name: "Youtube Video Downloader",
      description:
        "WebInRush's YouTube video downloader is an easy-to-use tool that lets you download YouTube videos in various formats, including MP4, and more. With just a few clicks, you can save your favorite videos for offline viewing, or extract audio to listen on your device. The downloader is fast, efficient, and works on all major browsers. It's perfect for anyone who wants to save videos to watch later, or for content creators who need to archive their own videos. Whether you're on the go or simply prefer to watch videos offline, WebInRush's YouTube video downloader is a powerful and reliable tool that you can count on.",
      thumbnail: ytvideodownloader.src,
      link: "/products/ytvideodownloader",
      active: true,
    },
    {
      name: "Instagram Video Downloader",
      description:
        "WebInRush's Instagram video downloader is an easy-to-use tool that lets you download Instagram videos in various formats, including MP4, and more. With just a few clicks, you can save your favorite videos for offline viewing, or extract audio to listen on your device. The downloader is fast, efficient, and works on all major browsers. It's perfect for anyone who wants to save videos to watch later, or for content creators who need to archive their own videos. Whether you're on the go or simply prefer to watch videos offline, WebInRush's Instagram video downloader is a powerful and reliable tool that you can count on.",
      thumbnail: InstaVideoDownloader.src,
      link: "/products/instavideodownloader",
      githubLink: "https://github.com/webinrush/webinrush",
      active: false,
    },
  ];
  return (
    <ProductStyle className="container">
      <Head>
        <title>Our Products | WebInRush - Free Online Tools for You</title>
      </Head>
      <h1>Our Product</h1>
      {products.map((product, index) => (
        <div key={index} className="product">
          <div className="thumbnail">
            <Image
              src={product.thumbnail}
              alt={product.name}
              width={500}
              height={500}
            />
          </div>
          <div className="details">
            <h2>{product.name}</h2>
            <p className="description">{product.description}</p>
            <div className="buttons">
              <Link href={product.link}>
                <button>Try 🚀</button>
              </Link>
              {!product.active && (
                <a href={product.githubLink} target="_blank" rel="noreferrer">
                  <button>
                    Code <AiFillGithub />
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </ProductStyle>
  );
};

export default Product;
