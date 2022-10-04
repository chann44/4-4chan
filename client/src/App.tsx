import "./App.css";
import { PostList } from "./pages/postlist";
import { Route, Routes } from "react-router-dom";
import { PostDetails } from "./componet/postdetails";
import { PostContextProvider } from "./context/PostContextProvider";
import { Navbar } from "./componet/Navbar";
import { Boards } from "./pages/Boards";
import { BoardContextProvider } from "./context/boardContext";
import { Home } from "./pages/home";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-[90%]  lg:w-[70%] m-auto">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/boards" element={<Boards />} />
          <Route
            path="/:boardId/posts"
            element={
              <BoardContextProvider>
                <PostList />
              </BoardContextProvider>
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
