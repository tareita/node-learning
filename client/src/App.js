import Posts from "./Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import PostDetails from "./PostDetails";
import CreatePost from "./CreatePost";
import Login from "./Login";
import Register from "./Register";
import { Navbar } from "./Navbar";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
