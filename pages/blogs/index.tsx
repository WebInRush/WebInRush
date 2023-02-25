import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import { Uploader } from "uploader";
import { UploadDropzone } from "react-uploader";

const BlogsStyle = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & h1 {
      font-size: 2rem;
      font-weight: 600;
    }
    & .add-blog {
      display: flex;
      justify-content: flex-end;
      & button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.5rem;
        height: 2.5rem;
        border: none;
        border-radius: 3rem;
        background-color: rgb(var(--secondary-color), 0.75);
        color: rgb(var(--white-color));
        text-align: center;
        font-weight: 200;
        font-size: 2rem;
        transition: 0.15s;
        &:hover {
          background-color: rgb(var(--secondary-color), 0.5);
        }
      }
    }
  }
`;

const Product = () => {
  const [blogMenu, setBlogMenu] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const uploader = Uploader({
    apiKey: "free",
  });
  const options = {
    maxFileCount: 1,
    mimeTypes: ["image/jpeg", "image/png", "image/jpg"],
    editor: { images: { crop: false } },
    styles: { colors: { primary: "#000" } },
  };
  const UploadDropZone = () => (
    <UploadDropzone
      uploader={uploader}
      options={options}
      onUpdate={(file) => {
        if (!!file.length) {
          setImage(file[0].fileUrl.replace("raw", "thumbnail"));
        }
      }}
      width="20rem"
      height="10rem"
    />
  );
  return (
    <BlogsStyle className="container">
      <Head>
        <title>Our Blogs | WebInRush 🚀</title>
      </Head>
      <div className="header">
        <h1>Our Blogs</h1>
        <div className="add-blog">
          {!blogMenu && <button onClick={() => setBlogMenu(true)}>+</button>}
          {blogMenu && (
            <div className="blog-menu">
              {!image && <UploadDropZone />}
              {image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img alt={"image"} src={image} width={500} height={500} />
              )}
            </div>
          )}
        </div>
      </div>
    </BlogsStyle>
  );
};

export default Product;
