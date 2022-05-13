import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../data/apollo";
import { ToastContainer } from "react-toastify";

import "/src/assets/sass/framework.sass";
import "react-toastify/dist/ReactToastify.css";
import "/src/assets/css/tailwind.css";
import "/src/assets/css/skeleton.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <ToastContainer />
    </ApolloProvider>
  );
}

export default MyApp;
