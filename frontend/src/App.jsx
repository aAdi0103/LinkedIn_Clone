import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Homepage from "./pages/Homepage";
import SignPage from "./pages/auth/SignPage";
import { useQuery } from "@tanstack/react-query";

import LoginPage from "./pages/auth/LoginPage";
import { Toaster } from "react-hot-toast";
import { axiosInstance } from "./lib/axios";
import NotificationsPage from './components/NotificationsPage'
import NetworkPage from './pages/NetworkPage'
import PostPage from './pages/PostPage'
import ProfilePage from "./pages/ProfilePage";

function App() {
  // fetch authenticated user from api
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/auth/me");
        return res.data;
      } catch (err) {
        if (err.response && err.response.status === 401) {
          return null;
        }
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
  });

  if (isLoading) return null;

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={authUser ? <Homepage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route path='/notifications' element={authUser ? <NotificationsPage /> : <Navigate to={"/login"} />} />
        <Route path='/network' element={authUser ? <NetworkPage/> : 
        <Navigate to={"/login"} />} />
        <Route path='/post/:postId' element={authUser ? <PostPage /> : <Navigate to={"/login"} />} />
        <Route path='/profile/:username' element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />} />
      </Routes>
      <Toaster />
    </Layout>
  );
}

export default App;
