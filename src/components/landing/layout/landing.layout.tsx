import Head from "next/head";
import { CSSProperties } from "react";
import { ReactElement, useLayoutEffect } from "react";
import { Layout } from "antd";
import Footer from "../components/footer/footer";
import BackToTop from "../../common/backtotop";
import Header from "../components/header";
const { Content } = Layout;

interface Props {
  children: JSX.Element;
  title?: string;
  className?: string;
  style?: CSSProperties;
  headElements?: JSX.Element;
}

function LandingLayout({
  children,
  title,
  className,
  style,
  headElements,
}: Props): ReactElement {
  const setFavIcon = () => {
    let link: any =
      document.querySelector('link[rel="shortcut icon"]') ||
      document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.id = "favicon";
      link.rel = "shortcut icon";
      document.head.appendChild(link);
    }

    link.href = `/images/BDS_LOGO_White.png`;
  };
  useLayoutEffect(() => {
    setFavIcon();
  }, []);
  return (
    <Layout style={style} className={className}>
      {/* Meta Head */}
      <Head>
        <title>{title}</title>
        {headElements}
      </Head>

      {/* Header */}
      <Header/>

      {/* Content */}
      <Content>
        <div style={{ minHeight: "90vh", marginTop: 65 }}>{children}</div>
      </Content>

      {/* Footer */}
      <Footer/>

      {/* BackToTop Controller*/}
      <BackToTop />
    </Layout>
  );
}

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await axios.get(
//     "http://localhost:1337/api/home-page/initialState"
//   );
//   const data = res.data;
//   console.log("data", data);
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       initialData: data,
//     },
//     revalidate: 20,
//   };
// }

export default  LandingLayout
