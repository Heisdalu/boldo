import "./App.css";
import React from "react";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import BlogPage from "./pages/BlogPage/BlogPage";

const App = () => {
  return (
    <Layout>
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      
      <BlogPage />
    </Layout>
  );
};

export default App;
