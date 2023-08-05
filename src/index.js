import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
// import "./styles.css";
import App from "./App"
import Gallery from "./Gallery"
import TodoList from "./TodoList"
import Hook from "./StudyHook"
import HomeWork from './HomeWork';
import StudyContextHook from './StudyContextHook';
import { ThemeProvider } from './ThemeContext';
import TodoListUseContext from './TodoListUseContext';
import { ProviderStore } from "./store"

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    {/* <App /> */}
    {/* <Gallery /> */}
    {/* <Hook /> */}
    {/* <ThemeProvider>
      <StudyContextHook/>
    </ThemeProvider> */}
    <ProviderStore>
      <TodoListUseContext />
    </ProviderStore>
  </StrictMode>
);
