import "./App.css";
import { PostList } from "./pages/postlist";
import { Route, Routes } from "react-router-dom";
import { PostDetails } from "./componet/postdetails";
import { PostContextProvider } from "./context/PostContextProvider";
import { Home } from "./pages/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
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
