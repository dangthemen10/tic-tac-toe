import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
// import "./styles.css";
import App from "./App"
import Profile from "./Profile"
import TodoList from "./TodoList"
import Hook from "./StudyHook"
import HomeWork from './HomeWork';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <Profile /> */}
    {/* <Hook /> */}
    <HomeWork/>
  </StrictMode>
);
