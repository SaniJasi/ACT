import Head from "next/head";
import { motion } from "framer-motion";
import { Header } from "./Header";
import { Footer } from "./Footer";

const easing = "easeInOut";

const contentVariants = {
  initial: {
    opacity: 0,
  },
  exit: { opacity: 0, transition: { delay: 0, duration: 0.2, ease: easing } },
  enter: {
    opacity: 1,
    transition: {
      delay: 0.4,
      ease: easing,
    },
  },
};

export const Layout = ({
  title = "ACT | Anti counterfeit technologies",
  desc,
  keys,
  img = "https://eya.global/og-logo.png",
  url = "https://eya.global/",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keys} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image" content={img} />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={img} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <Header />
      <main>
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div variants={contentVariants}>{children}</motion.div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
};
