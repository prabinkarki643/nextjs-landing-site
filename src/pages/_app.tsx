import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { StyleProvider } from '@ant-design/cssinjs';
import { ParallaxProvider } from "react-scroll-parallax";
import { wrapper } from "@/store";
import { Provider } from "react-redux";

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Jost",
          },
          components: {},
        }}
      >
        <StyleProvider hashPriority="high">
        <Provider store={store}>
          <ParallaxProvider>
            <Component {...pageProps} />
          </ParallaxProvider>
        </Provider>
        </StyleProvider>
      </ConfigProvider>
    </>
  );
}

export default wrapper.withRedux(App);
