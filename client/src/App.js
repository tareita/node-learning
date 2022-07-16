import Posts from "./Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PostDetails from "./PostDetails";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
