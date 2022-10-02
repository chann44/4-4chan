import "./App.css";
import { PostList } from "./pages/postlist";
import { Route, Routes } from "react-router-dom";
import { PostDetails } from "./componet/postdetails";
import { PostContextProvider } from "./context/PostContextProvider";
import { Navbar } from "./componet/Navbar";
import { Boards } from "./pages/Boards";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-[90%]  lg:w-[70%] m-auto">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route
            path="/:board/posts"
            element={
              <PostContextProvider>
                <PostDetails />
              </PostContextProvider>
            }
          />
          <Route
            path="/:id"
            element={
              <PostContextProvider>
                <PostDetails />
              </PostContextProvider>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
