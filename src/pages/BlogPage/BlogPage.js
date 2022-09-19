import Article from "../../components/Blog/Article/Article";
import BlogHeader from "../../components/Blog/BlogHeader/BlogHeader";
import Footer from "../../components/Footer/Footer";
import style from "./BlogPage.module.css";

const BlogPage = () => {
  return (
    <div className={style.wrapper}>
      <BlogHeader />
      <Article />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
