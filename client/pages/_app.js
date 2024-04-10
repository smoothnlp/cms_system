import App from "next/app";
import ErrorPage from "next/error";
import { QueryClient, QueryClientProvider } from "react-query";
import 'tailwindcss/tailwind.css';

import "./global.css"

import { getStrapiURL } from "../utils";
import { getLocalizedParams } from "../utils/localize";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  if (global === null) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const { locale } = getLocalizedParams(appContext.ctx.query);

  const appProps = await App.getInitialProps(appContext);

  try {
    const res = await fetch(
      getStrapiURL(
        `/landing-page-global?populate[navigation][populate]=*&populate[footer][populate][footerColumns][populate]=*&locale=${locale}`
      ),
      {
        headers: {
          "Authorization": "bearer 4d68a1c097d394c4660052147a3f6732f4cdeeca2e485282c3fc95046960936b7035e16bca1ef77204d721281c4f43ae54ad589f2fb77bc212ec33d2b86d76f30498244ce55f5e6923aca64460b27fca3e2ff825d803f8dc81456463495b4f2aff4aa90fe8ebe9c2b424e27e598130e0d0e1f8df05fba3dd8065d3620fee75f0",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const globalData = await res.json();
    const globalDataAttributes = globalData.data.attributes;

    console.log("App ===>>> ", globalDataAttributes);

    return { ...appProps, pageProps: { global: globalDataAttributes } };
  } catch (error) {
    return { ...appProps };
  }
};

export default MyApp;
