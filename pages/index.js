import React from "react";
import Header from "../src/components/Header";
import Search from "../src/components/Search";
import Body from "../src/components/Body";
import { ThemeProvider } from "styled-components";
import { useAuth } from "../src/providers/auth";

function HomePage() {
  const { theme } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Search />
      <Body />
    </ThemeProvider>
  );
}

export default HomePage;
