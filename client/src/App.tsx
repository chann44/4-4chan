import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { PostList } from "./pages/postlist";
import { Route, Routes } from "react-router-dom";
import { PostDetails } from "./componet/postdetails";
import { PostContextProvider } from "./context/PostContextProvider";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route
        path="/:id"
        element={
          <PostContextProvider>
            <PostDetails />
          </PostContextProvider>
        }
      />
    </Routes>
  );
}

export default App;
