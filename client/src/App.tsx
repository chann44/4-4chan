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
      <Route
        path="/"
        element={
          <PostContextProvider>
            <PostList />
          </PostContextProvider>
        }
      />
      <Route path="/:id" element={<PostDetails />} />
    </Routes>
  );
}

export default App;
