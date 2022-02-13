import React from "react";
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Body from "../src/components/Body";
import { ThemeProvider } from "styled-components";
import { useAuth } from "../src/providers/auth";
import Head from "next/head";

function HomePage() {
  const { theme } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet" /> 
      </Head>
      <Header />
      <Search />
      <Body />
    </ThemeProvider>
  );
}

export default HomePage;
