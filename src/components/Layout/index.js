import React from "react";
import { Header } from "../Header";

export function Layout({ children, isHome, isResultPage, isNewLinkPage }) {
  return (
    <>
      <Header
        isHome={isHome}
        isResultPage={isResultPage}
        isNewLinkPage={isNewLinkPage}
      />
      {children}
    </>
  );
}
