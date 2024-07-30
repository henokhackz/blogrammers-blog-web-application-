import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import BlogDetails from "./pages/blogdetail/BlogDetails";
import Auth from "./pages/auth/Auth";
import Profile from "./pages/profile/Profile";

const App = () => {
  const isUserLoggedIn = false;
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={isUserLoggedIn ? "/" : "/login"} element={<Home />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path={isUserLoggedIn ? "/profile" : "/auth"}
            element={<Profile />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
