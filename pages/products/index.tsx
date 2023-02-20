import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ytvideodownloader from "../../public/images/ytvideodownloader.jpeg";

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
    @media screen and (max-width: 50rem) {
      padding: 0.5rem 0.75rem;
    }
    &:hover {
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
      & button {
        width: fit-content;
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
`;

const Product = () => {
  return (
    <ProductStyle className="container">
      <h1>Some of Our Product</h1>
      <div className="product">
        <div className="thumbnail">
          <Image
            src={ytvideodownloader.src}
            alt="Youtube Video Downloader"
            width={500}
            height={400}
          />
        </div>
        <div className="details">
          <h2>Youtube Video Downloader</h2>
          <p className="description">
            WebInRush&apos;s YouTube video downloader is an easy-to-use tool
            that lets you download YouTube videos in various formats, including
            MP4, and more. With just a few clicks, you can save your favorite
            videos for offline viewing, or extract audio to listen on your
            device. The downloader is fast, efficient, and works on all major
            browsers. It&apos;s perfect for anyone who wants to save videos to
            watch later, or for content creators who need to archive their own
            videos. Whether you&apos;re on the go or simply prefer to watch
            videos offline, WebInRush&apos;s YouTube video downloader is a
            powerful and reliable tool that you can count on.
          </p>
          <Link href={"/products/ytvideodownloader"}>
            <button>Try 🚀</button>
          </Link>
        </div>
      </div>
    </ProductStyle>
  );
};

export default Product;
