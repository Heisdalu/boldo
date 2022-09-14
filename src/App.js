import "./App.css";
import React from "react";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Layout>
      {/* <HomePage /> */}
      <AboutPage />
    </Layout>
  );
};

export default App;
