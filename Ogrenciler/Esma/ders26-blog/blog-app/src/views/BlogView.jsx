import PostBlogView from "../views/PostBlogView"
import { useNavigate, Outlet } from "react-router-dom";


const BlogView = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Blog</h1>
<button onClick={
()=> navigate ("/blog/blog-post")
}>Yeni Post</button>
<Outlet/>
    </div>
  )
}

export default BlogView;

