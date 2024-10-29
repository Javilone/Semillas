import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InitPage } from "../../scenes/init/init";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitPage />}></Route>
        {/* <Route path="/github_members" element={<GitPage />}></Route> */}
        <Route path="/*" element={<h1>404 NOOOT FOUND!</h1>}></Route>
        {/* <Route path="/*" element={<Navigate to="/" />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
};
