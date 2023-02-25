import Loading from "./loading";
import Head from "next/head";
import type { AppProps } from "next/app";
import type { Page } from "../page";
import { Poppins } from "@next/font/google";
import { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { Suspense, lazy, useEffect, useState } from "react";
import favicon from "./../public/icons/favicon.ico";
import webinrush from "./../public/images/webinrush.webp";
import { SessionProvider } from "next-auth/react";

const Header = lazy(() => import("../components/Header"));
const Footer = lazy(() => import("../components/Footer"));

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const GlobalStyle = createGlobalStyle`
:root {
  --light-color: 240, 246, 252;
  --dark-color: 2, 48, 71;
  --primary-color: 251, 133, 0;
  --primary-gradient-1: 255, 183, 3;
  --secondary-color: 33, 158, 188;
  --secondary-gradient-1: 142, 202, 230;
  --white-color: 255, 255, 255;
  --black-color: 0, 0, 0;
  --red-color: 241, 92, 109;
  scroll-behavior: smooth;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-poppins, sans-serif);
  outline: none;
}
body {
  background-color: rgb(var(--dark-color));
  color: rgb(var(--light-color));
  overflow-x: hidden;
  transition: all 0.15s ease;
}
.container {
  margin-inline: auto;
  width: min(90%, 70rem);
  @media screen and (max-width: 50rem){
    padding-top: 2rem;
  }
}
::-webkit-scrollbar {
  width: 0.25em;
}
::-webkit-scrollbar-track {
  background: transparent;
  transition: all 0.15s ease;
}
::-webkit-scrollbar-track:hover {
  background: rgba(var(--dark-color), 0.01);
}
::-webkit-scrollbar-thumb {
  background: rgba(var(--light-color), 0.25);
  border-radius: 0.5rem;
}
a {
  text-decoration: none;
  color: inherit;
  transition: 0.15s;
}
button {
  cursor: pointer;
  user-select: none;
}
`;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

type Props = AppProps & {
  Component: Page;
};

const og = {
  title: "WEBINRUSH 🚀 | Web Solutions | Web Development | Web Design",
  describedTitle: "Get a turbocharged rush with WebInRush's web solutions",
  description:
    "Turbocharge your website with Webinrush. Our team of experts can help you create a website that's fast, reliable, and beautiful.",
  image: webinrush.src,
  url: "https://webinrush.vercel.app/",
};

const App = ({ Component, pageProps: { session, ...pageProps } }: Props) => {
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <SessionProvider session={session}>
      <Head>
        <title>{og.title}</title>
        <meta
          name="google-site-verification"
          content="aUOx7BZBGMEAbtDsLf9bN1BvycMZwahF4zDqu0EtQCw"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={og.title} />
        <meta property="og:url" content={og.url} />
        <meta property="og:title" content={og.describedTitle} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={og.url} />
        <meta property="twitter:title" content={og.describedTitle} />
        <meta property="twitter:description" content={og.description} />
        <meta property="twitter:image" content={og.image} />
        <meta name="twitter:site" content="@itsme-Subid" />
        <meta name="twitter:creator" content="@itsme-Subid" />
        <meta name="theme-color" content="#023047" />
        <meta name="next-head-count" content="26" />
      </Head>
      <GlobalStyle />
      <Suspense fallback={<Loading />}>
        {domLoaded && (
          <div className={poppins.variable}>
            <motion.div variants={container} initial="hidden" animate="show">
              {!Component.getLayout && <Header />}
              <Component {...pageProps} />
              {!Component.getLayout && <Footer />}
            </motion.div>
          </div>
        )}
      </Suspense>
    </SessionProvider>
  );
};

export default App;
