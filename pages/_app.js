function GlobalStyle() {
    return (
        <style global jsx>{`
        .Dark {
            background-color: hsl(207, 26%, 17%);
        }

        .Light {
            background-color: white;
        }

        `}</style>    
    )
}

function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default App;