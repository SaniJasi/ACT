import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { mq } from "../../src/utils/utils";
import { Hero } from "../../components/Hero";
import { Wrapper } from "../../components/Wrap";
import { FacebookShareButton } from "next-share";
import { TwitterShareButton } from "next-share";
import { EmailShareButton } from "next-share";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.gray100};
  padding: 60px 0;

  ${mq.mdUp`
    padding: 0 0 100px;
  `}
`;

const SinglePost = styled.article`
  white-space: pre-line;
  font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
  line-height: 1.4;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  margin-top: -107px;
  max-width: 1080px;
  padding: 60px calc(30px + (107 - 30) * ((100vw - 320px) / (1279 - 320)))
    calc(60px + (87 - 60) * ((100vw - 320px) / (1279 - 320)));

  ${mq.xlUp`
    font-size: 20px;
    padding: 60px 107px 87px;
  `}

  h1 {
    font-size: calc(35px + (45 - 35) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    text-align: center;
    color: ${(props) => props.theme.colors.blue};
    margin: 0 0 30px;

    ${mq.xlUp`
      font-size: 45px;
    `}
  }

  h2 {
    font-size: calc(25px + (35 - 25) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    color: ${(props) => props.theme.colors.blue};
    margin: 0 0 30px;

    ${mq.xlUp`
      font-size: 35px;
    `}
  }

  h3 {
    font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.25;
    margin: 0 0 25px;
    color: ${(props) => props.theme.colors.blue};

    ${mq.xlUp`
      font-size: 30px;
  `}
  }

  p {
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    margin: 0 0 30px;

    ${mq.xlUp`
      font-size: 20px;
    `}
  }

  ul {
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    list-style: none;
    margin: 0 0 30px;
    padding: 0;

    ${mq.xlUp`
      font-size: 20px;
    `}

    li {
      margin-bottom: 15px;
      padding-left: 20px;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        background: url("./list-icon.svg") no-repeat;
        top: 7px;
        left: 0;
        width: 8px;
        height: 14px;
      }
    }
  }

  b {
    color: ${(props) => props.theme.colors.blue};
  }

  ${(props) =>
    props.sm === true &&
    `
    p {
      word-wrap: break-word;
      margin-bottom: 15px;
    }
  `}

  table {
    font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (1599 - 320)));
    line-height: 1.4;
    width: 100%;
    margin: 0 0 30px;

    ${mq.xlUp`
      font-size: 20px;
    `}

    p {
      margin: 0;
    }

    th {
      background-color: ${(props) => props.theme.colors.gray100};
      border: 1px solid #878787;
      font-weight: 700;
      text-align: left;
      padding: 10px;

      ${mq.mdUp`
        padding: 15px 30px;
      `}
    }

    td {
      border: 1px solid #878787;
      padding: 10px;

      ${mq.mdUp`
        padding: 15px 30px;
      `}
    }
  }

  strong {
    color: ${(props) => props.theme.colors.blue};
  }

  iframe {
    width: 100%;
    max-width: 100%;
    display: block;
    margin: 0 auto 30px;
    height: 260px;

    ${mq.smUp`
      height: 460px; 
    `}
  }

  a:not(.btn) {
    color: ${(props) => props.theme.colors.blue};
  }
`;

const SharePostTitle = styled.div`
  font-size: 25px;
  line-height: 1;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  color: #025b8b;
  margin: 0 0 20px;
`;

const SharePostBottom = styled.div`
  padding-top: 50px;
  display: block;

  @media (min-width: 1300px) {
    display: none;
  }

  ${SharePostTitle} {
    text-align: left;
  }

  button {
    width: 52px;
    height: 52px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: background-color 0.2s ease-out;
    margin: 0 10px 0 0;
    vertical-align: top;
    background-color: ${(props) => props.theme.colors.blue} !important;
  }
`;

const SharePost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  position: sticky;
  left: 50%;
  top: 0;
  padding-top: 50px;
  margin: 0 0 -406px;
  display: none;

  @media (min-width: 1300px) {
    display: flex;
  }

  @media (min-width: 1300px) and (max-width: 1399px) {
    transform: translate3d(580px, 0, 0);
  }

  @media (min-width: 1400px) {
    transform: translate3d(600px, 0, 0);
  }

  button {
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: background-color 0.2s ease-out;
    margin: 0 0 10px;
    background-color: ${(props) => props.theme.colors.blue} !important;
  }
`;

export default function Post({ post }) {
  const router = useRouter();
  const websiteUrl = "https:";
  const assetsOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <div className="image-wrapper">
          <Image
            src={node.data?.target?.fields?.file?.url}
            alt={node.data?.target?.fields?.title}
            width={node.data?.target?.fields?.file?.details?.image?.width}
            placeholder={`${node.data?.target?.fields?.file?.url}?fit=thumb&w=100`}
          />
        </div>
      ),
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <a
          href={data.uri}
          target={`${data.uri.startsWith(websiteUrl) ? "_blank" : "_self"}`}
          rel={`${
            data.uri.startsWith(websiteUrl) ? "noopener noreferrer" : ""
          }`}
        >
          {children}
        </a>
      ),
      [INLINES.HYPERLINK]: (node) => {
        if (node.data.uri.indexOf("youtube.") !== -1) {
          const videoId = node.data.uri.replace(
            "https://www.youtube.com/watch?v=",
            ""
          );

          return (
            <span className="video-wrapper">
              <iframe
                width="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </span>
          );
        } else {
          return <a href={node.data.uri}>{node.content[0].value}</a>;
        }
      },
    },
  };

  const shareUrl = `https://eya.global${router.asPath}`;

  return (
    <Layout
      title={post?.fields?.seoTitle}
      desc={post?.fields?.seoDescription}
      keys={post?.fields?.seoKeywords}
      img={`https:${post?.fields?.image?.fields.file.url}`}
      url={shareUrl}
    >
      <Hero
        id={0}
        bg={post?.fields?.image?.fields.file.url}
        color={"rgba(2,91,139,.85)"}
        opacity="No"
        position="Left"
        size="sm"
        bolder="Yes"
        back={true}
      />
      {post?.fields?.description && (
        <Section>
          <Wrapper>
            <SharePost>
              <SharePostTitle>
                share
                <br /> post
              </SharePostTitle>
              <FacebookShareButton url={shareUrl} quote={post?.fields?.title}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                >
                  <path
                    fill="#FFF"
                    d="M8,-1 L7.77506174,-0.995861528 C4.56557489,-0.877571762 2,1.76160306 2,5 L2,7 L0,7 C-0.55228475,7 -1,7.44771525 -1,8 L-1,12 L-0.993272269,12.1166211 C-0.935507161,12.6139598 -0.512835839,13 0,13 L2,13 L2,20 C2,20.5522847 2.44771525,21 3,21 L7,21 L7.11662113,20.9932723 C7.61395981,20.9355072 8,20.5128358 8,20 L8,13 L10,13 C10.4588676,13 10.8588507,12.6877026 10.9701425,12.2425356 L11.9701425,8.24253563 L11.991488,8.13148231 C12.0711701,7.54157633 11.6123023,7 11,7 L8,7 L8,5 L11,5 C11.5522847,5 12,4.55228475 12,4 L12,0 C12,-0.55228475 11.5522847,-1 11,-1 L8,-1 Z M10,1 L10,3 L8,3 C6.8954305,3 6,3.8954305 6,5 L6,8 L6.00672773,8.11662113 C6.06449284,8.61395981 6.48716416,9 7,9 L9.718,9 L9.218,11 L7,11 L6.88337887,11.0067277 C6.38604019,11.0644928 6,11.4871642 6,12 L6,19 L4,19 L4,12 L3.99327227,11.8833789 C3.93550716,11.3860402 3.51283584,11 3,11 L1,11 L1,9 L3,9 C3.55228475,9 4,8.55228475 4,8 L4,5 C4,2.790861 5.790861,1 8,1 L10,1 Z"
                    transform="translate(1 1)"
                  ></path>
                </svg>
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={post?.fields?.title}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="21"
                  viewBox="0 0 24 21"
                >
                  <path
                    fill="#FFF"
                    d="M13.3059232,-0.472552766 C11.3540798,0.370245788 10.0649129,2.26929626 10.0020047,4.39439492 L10,4.594 L9.73285676,4.57075335 C6.9694788,4.28608752 4.43794509,2.81949363 2.81835652,0.513289105 C2.37166215,-0.122778955 1.4018598,-0.0283990033 1.08618845,0.681861534 C0.955917181,0.974971893 0.772556082,1.47472077 0.592151682,2.13797224 C-0.00423632237,4.3305752 -0.108581862,6.63927141 0.606292659,8.83620286 L0.702042659,9.11563379 C1.40171446,11.0580898 2.72017312,12.7143789 4.71595311,13.996517 L4.913,14.12 L4.79329379,14.1760018 C3.30755639,14.8380281 1.68170506,15.1541009 0.039744652,15.0887901 C-1.01264552,15.0469302 -1.40632492,16.4506673 -0.485642931,16.9621573 C9.5539332,22.5396996 21,16.4474382 21,4.588 L20.9932329,4.33098032 L20.976,4.096 L21.0951938,3.9649638 C21.998628,2.92020128 22.6432254,1.67300322 22.9716027,0.324618082 C23.1902325,-0.573120763 22.178634,-1.26174957 21.4235937,-0.729163258 L21.0931352,-0.505896202 C20.5353278,-0.145173384 19.9429079,0.158310622 19.3249296,0.400144136 L19.13,0.471 L19.0992221,0.443227748 C17.5877145,-0.887306637 15.4436334,-1.29392279 13.5254931,-0.561808156 L13.3059232,-0.472552766 Z M18.1054459,2.2742378 C18.3635676,2.57103084 18.7717021,2.68894183 19.1483329,2.57553023 L19.5541228,2.44536934 L19.837,2.342 C19.6456858,2.59355056 19.4399275,2.82696072 19.2178273,3.04599332 C18.9801617,3.28037635 18.8751127,3.61788962 18.9377832,3.94575048 C18.9784591,4.15854612 18.9992892,4.37465886 19.0000055,4.59130603 L18.9970857,4.89824859 C18.8319405,13.5514647 11.6873035,18.496077 4.18954729,16.6768658 L3.93,16.61 L4.11801539,16.557104 C5.33472944,16.1895373 6.49667608,15.6382774 7.56162992,14.9153886 C8.21060579,14.4748649 8.12290163,13.4927499 7.40613847,13.1741885 C4.73501208,11.9870212 3.18516555,10.2979669 2.50813883,8.21734816 L2.4077651,7.88332359 C2.00599982,6.42818676 2.03225807,4.87637206 2.35337535,3.35984823 L2.405,3.13 L2.49865853,3.22650119 C4.73698633,5.4542173 7.81072265,6.70103367 11.0259212,6.61766399 C11.5679267,6.60360986 12,6.16018774 12,5.618 L12,4.618 C11.9803354,3.14447152 12.87441,1.82742488 14.2386699,1.30671502 C15.6029297,0.786005169 17.1471716,1.17239662 18.1054459,2.2742378 Z"
                    transform="translate(1 1)"
                  ></path>
                </svg>
              </TwitterShareButton>
              <EmailShareButton
                url={shareUrl}
                subject={post?.fields?.title}
                body={post?.fields?.shortDescription}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="18"
                  viewBox="0 0 23 18"
                >
                  <g fill="#FFF" transform="translate(.393)">
                    <path d="M19.0000859,0 L3.00008586,0 C1.34394635,0.00494173405 0.0050275963,1.34386049 8.58622517e-05,2.99701343 L8.58622517e-05,15 C0.0050275963,16.6561395 1.34394635,17.9950583 2.9970993,18 L19.0000859,18 C20.6562254,17.9950583 21.9951441,16.6561395 22.0000859,15.0029866 L22.0000859,3 C21.9951441,1.34386049 20.6562254,0.00494173405 19.0000859,0 Z M3.00307243,1.99999554 L19.0000814,1.99999554 C19.5503501,2.00164787 19.998438,2.44973578 20.0000814,3.00298657 L20.0000814,14.9999955 C19.998438,15.5502642 19.5503501,15.9983521 18.9970993,15.9999955 L3.0000814,15.9999955 C2.44982164,15.9983521 2.00173373,15.5502642 2.0000814,14.9970134 L2.0000814,2.99999554 C2.00173373,2.44973578 2.44982164,2.00164787 3.00307243,1.99999554 Z"></path>
                    <path d="M20.4266235,2.18076808 C20.8790728,1.86405357 21.5026033,1.97408836 21.8193178,2.42653766 C22.1116696,2.84418316 22.0404008,3.40760196 21.6718428,3.74091504 L21.5735482,3.81923192 L11.5735482,10.8192319 C11.2674858,11.0334756 10.8713777,11.0572804 10.5453051,10.8906465 L10.4266235,10.8192319 L0.426623518,3.81923192 C-0.0258257784,3.50251741 -0.135860566,2.87898695 0.180853942,2.42653766 C0.473205795,2.00889215 1.02698663,1.88300812 1.46631741,2.11521716 L1.57354821,2.18076808 L11.0000859,8.779 L20.4266235,2.18076808 Z"></path>
                  </g>
                </svg>
              </EmailShareButton>
            </SharePost>
            <SinglePost>
              {post?.fields?.title && <h1>{post?.fields?.title}</h1>}
              {documentToReactComponents(
                post?.fields?.description,
                assetsOptions
              )}
              <SharePostBottom>
                <SharePostTitle>share post</SharePostTitle>
                <FacebookShareButton url={shareUrl} quote={post?.fields?.title}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                  >
                    <path
                      fill="#FFF"
                      d="M8,-1 L7.77506174,-0.995861528 C4.56557489,-0.877571762 2,1.76160306 2,5 L2,7 L0,7 C-0.55228475,7 -1,7.44771525 -1,8 L-1,12 L-0.993272269,12.1166211 C-0.935507161,12.6139598 -0.512835839,13 0,13 L2,13 L2,20 C2,20.5522847 2.44771525,21 3,21 L7,21 L7.11662113,20.9932723 C7.61395981,20.9355072 8,20.5128358 8,20 L8,13 L10,13 C10.4588676,13 10.8588507,12.6877026 10.9701425,12.2425356 L11.9701425,8.24253563 L11.991488,8.13148231 C12.0711701,7.54157633 11.6123023,7 11,7 L8,7 L8,5 L11,5 C11.5522847,5 12,4.55228475 12,4 L12,0 C12,-0.55228475 11.5522847,-1 11,-1 L8,-1 Z M10,1 L10,3 L8,3 C6.8954305,3 6,3.8954305 6,5 L6,8 L6.00672773,8.11662113 C6.06449284,8.61395981 6.48716416,9 7,9 L9.718,9 L9.218,11 L7,11 L6.88337887,11.0067277 C6.38604019,11.0644928 6,11.4871642 6,12 L6,19 L4,19 L4,12 L3.99327227,11.8833789 C3.93550716,11.3860402 3.51283584,11 3,11 L1,11 L1,9 L3,9 C3.55228475,9 4,8.55228475 4,8 L4,5 C4,2.790861 5.790861,1 8,1 L10,1 Z"
                      transform="translate(1 1)"
                    ></path>
                  </svg>
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={post?.fields?.title}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                  >
                    <path
                      fill="#FFF"
                      d="M13.3059232,-0.472552766 C11.3540798,0.370245788 10.0649129,2.26929626 10.0020047,4.39439492 L10,4.594 L9.73285676,4.57075335 C6.9694788,4.28608752 4.43794509,2.81949363 2.81835652,0.513289105 C2.37166215,-0.122778955 1.4018598,-0.0283990033 1.08618845,0.681861534 C0.955917181,0.974971893 0.772556082,1.47472077 0.592151682,2.13797224 C-0.00423632237,4.3305752 -0.108581862,6.63927141 0.606292659,8.83620286 L0.702042659,9.11563379 C1.40171446,11.0580898 2.72017312,12.7143789 4.71595311,13.996517 L4.913,14.12 L4.79329379,14.1760018 C3.30755639,14.8380281 1.68170506,15.1541009 0.039744652,15.0887901 C-1.01264552,15.0469302 -1.40632492,16.4506673 -0.485642931,16.9621573 C9.5539332,22.5396996 21,16.4474382 21,4.588 L20.9932329,4.33098032 L20.976,4.096 L21.0951938,3.9649638 C21.998628,2.92020128 22.6432254,1.67300322 22.9716027,0.324618082 C23.1902325,-0.573120763 22.178634,-1.26174957 21.4235937,-0.729163258 L21.0931352,-0.505896202 C20.5353278,-0.145173384 19.9429079,0.158310622 19.3249296,0.400144136 L19.13,0.471 L19.0992221,0.443227748 C17.5877145,-0.887306637 15.4436334,-1.29392279 13.5254931,-0.561808156 L13.3059232,-0.472552766 Z M18.1054459,2.2742378 C18.3635676,2.57103084 18.7717021,2.68894183 19.1483329,2.57553023 L19.5541228,2.44536934 L19.837,2.342 C19.6456858,2.59355056 19.4399275,2.82696072 19.2178273,3.04599332 C18.9801617,3.28037635 18.8751127,3.61788962 18.9377832,3.94575048 C18.9784591,4.15854612 18.9992892,4.37465886 19.0000055,4.59130603 L18.9970857,4.89824859 C18.8319405,13.5514647 11.6873035,18.496077 4.18954729,16.6768658 L3.93,16.61 L4.11801539,16.557104 C5.33472944,16.1895373 6.49667608,15.6382774 7.56162992,14.9153886 C8.21060579,14.4748649 8.12290163,13.4927499 7.40613847,13.1741885 C4.73501208,11.9870212 3.18516555,10.2979669 2.50813883,8.21734816 L2.4077651,7.88332359 C2.00599982,6.42818676 2.03225807,4.87637206 2.35337535,3.35984823 L2.405,3.13 L2.49865853,3.22650119 C4.73698633,5.4542173 7.81072265,6.70103367 11.0259212,6.61766399 C11.5679267,6.60360986 12,6.16018774 12,5.618 L12,4.618 C11.9803354,3.14447152 12.87441,1.82742488 14.2386699,1.30671502 C15.6029297,0.786005169 17.1471716,1.17239662 18.1054459,2.2742378 Z"
                      transform="translate(1 1)"
                    ></path>
                  </svg>
                </TwitterShareButton>
                <EmailShareButton
                  url={shareUrl}
                  subject={post?.fields?.title}
                  body={post?.fields?.shortDescription}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                  >
                    <g fill="#FFF" transform="translate(.393)">
                      <path d="M19.0000859,0 L3.00008586,0 C1.34394635,0.00494173405 0.0050275963,1.34386049 8.58622517e-05,2.99701343 L8.58622517e-05,15 C0.0050275963,16.6561395 1.34394635,17.9950583 2.9970993,18 L19.0000859,18 C20.6562254,17.9950583 21.9951441,16.6561395 22.0000859,15.0029866 L22.0000859,3 C21.9951441,1.34386049 20.6562254,0.00494173405 19.0000859,0 Z M3.00307243,1.99999554 L19.0000814,1.99999554 C19.5503501,2.00164787 19.998438,2.44973578 20.0000814,3.00298657 L20.0000814,14.9999955 C19.998438,15.5502642 19.5503501,15.9983521 18.9970993,15.9999955 L3.0000814,15.9999955 C2.44982164,15.9983521 2.00173373,15.5502642 2.0000814,14.9970134 L2.0000814,2.99999554 C2.00173373,2.44973578 2.44982164,2.00164787 3.00307243,1.99999554 Z"></path>
                      <path d="M20.4266235,2.18076808 C20.8790728,1.86405357 21.5026033,1.97408836 21.8193178,2.42653766 C22.1116696,2.84418316 22.0404008,3.40760196 21.6718428,3.74091504 L21.5735482,3.81923192 L11.5735482,10.8192319 C11.2674858,11.0334756 10.8713777,11.0572804 10.5453051,10.8906465 L10.4266235,10.8192319 L0.426623518,3.81923192 C-0.0258257784,3.50251741 -0.135860566,2.87898695 0.180853942,2.42653766 C0.473205795,2.00889215 1.02698663,1.88300812 1.46631741,2.11521716 L1.57354821,2.18076808 L11.0000859,8.779 L20.4266235,2.18076808 Z"></path>
                    </g>
                  </svg>
                </EmailShareButton>
              </SharePostBottom>
            </SinglePost>
          </Wrapper>
        </Section>
      )}
    </Layout>
  );
}

export async function getStaticProps(context) {
  // Fetch all results where `fields.slug` is equal to the `slug` param
  const result = await client
    .getEntries({
      content_type: "news",
      "fields.slug": context.params.slug,
    })
    .then((response) => response.items);

  // Since `slug` was set to be a unique field, we can be confident that
  // the only result in the query is the correct post.
  const post = result.pop();

  // If nothing was found, return an empty object for props, or else there would
  // be an error when Next tries to serialize an `undefined` value to JSON.
  if (!post) {
    return { props: {} };
  }

  // Return the post as props
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths({ locale }) {
  // Query Contentful for all blog posts in the space
  const posts = await client
    .getEntries({ content_type: "news" })
    .then((response) => response.items);

  // Map the result of that query to a list of urls.
  // This will give Next the list of all blog post pages that need to be
  // rendered at build time.
  const paths = posts.map(({ fields: { slug } }) => ({
    params: { slug },
    locale,
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
