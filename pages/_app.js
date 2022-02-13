import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "../src/providers/auth";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
        * {
            margin: 0;
            padding: 0;
            border: 0;
        }

        body {
            font-family: 'Nunito Sans', sans-serif;
        }

        ul, ol, li {
            list-decoration: none
        }

        a {
            text-decoration: none;
        }
`;

function App({ Component, pageProps }) {
    return (
        <AuthProvider>
            <GlobalStyle />
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default App;