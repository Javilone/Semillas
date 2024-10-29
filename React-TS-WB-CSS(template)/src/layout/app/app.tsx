import React from "react";
import { AppHeader } from "./header/header";
import { AppRouter } from "../../core/router/app_router";
import { AppFooter } from "./footer/footer";

export const App: React.FC = () => {
  return (
    <>
      <AppHeader></AppHeader>
      <AppRouter></AppRouter>
      <AppFooter></AppFooter>
    </>
  );
};
