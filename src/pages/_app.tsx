import { ChakraProvider } from "@chakra-ui/react";
import { makeServer } from "../services/mirage";
import { theme } from "../styles/theme";

import 'swiper/swiper-bundle.css';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
