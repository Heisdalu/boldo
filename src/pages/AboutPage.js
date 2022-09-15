import About from "../components/About/AboutUs/About";
import Header from "../components/About/Header/Header";
import Stats from "../components/About/Stats/Stats";
import Story from "../components/About/Story/Story";
import Team from "../components/About/Team/Team";
import style from "./AboutPage.module.css";
import Footer from "../components/Footer/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Story />
      <Stats />
      <Team />
      <About />
      <div className={style.footerWrapper}>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
