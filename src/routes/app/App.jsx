import "./App.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Hero from "../../components/hero-div/hero";
import OurDoctors from "../../components/doctors-div/OurDoctors";
import Contact from "../../components/contact-div/Contact";
import Footer from "../../components/footer-div/Footer";
import ActionsSwitch from "./components/ActionsSwitch/ActionsSwitch";
import SideBar from "./components/sidebar/SideBar";
import styles from "./app.module.css";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/" />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      {/* <div>{t("address")}</div> */}
      {/*TODO: hero div => book app => doctors page => doctor page*/}
      <div className={styles.sidebarContainer}>
        <SideBar />
        <div className={styles.languageSwitcherContainer}>
          <ActionsSwitch />
          <div className={styles.mainContainer}>
            <Hero />
            {/*TODO: doctors div => doctor page*/}
            <OurDoctors />
            {/*TODO: contact div*/}
            <Contact />
            {/*TODO: footer div*/}
            <Footer />
          </div>
        </div>
      </div>
      <Link to="/doctors">Doctors</Link>
      <div></div>
    </>
  );
}

export default App;
