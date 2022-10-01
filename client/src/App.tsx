import "./App.css";
import { PostList } from "./pages/postlist";
import { Route, Routes } from "react-router-dom";
import { PostDetails } from "./componet/postdetails";
import { PostContextProvider } from "./context/PostContextProvider";
import { Navbar } from "./componet/Navbar";
import { Boards } from "./pages/Boards";

function App() {
  return (
    <div className="w-[90%] lg:w-[70%] m-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Boards />} />
        <Route path="/:board/posts" element={<PostList />} />
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
  );
}

export default App;
