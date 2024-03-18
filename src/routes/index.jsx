// import react router dom 
import { Routes, Route } from "react-router-dom";

// import view homepage
import Home from "../views/home";

// import view posts index
import PostIndex from "../views/posts";

// import Post create
import PostCreate from "../views/posts/create";

// import post edit
import PostEdit from "../views/posts/edit";

function RoutesIndex() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/posts" element={<PostIndex />} />

      <Route path="/posts/create" element={<PostCreate />} />

      <Route path="/posts/edit/:id" element={<PostEdit />} />
    </Routes>
  )
}

export default RoutesIndex













