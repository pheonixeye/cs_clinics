import { Helmet } from "react-helmet";
import Hero from "../../components/hero-div/hero";
import OurDoctors from "../../components/doctors-div/OurDoctors";
import Contact from "../../components/contact-div/Contact";
import Footer from "../../components/footer-div/Footer";
import ActionsSwitch from "./components/ActionsSwitch/ActionsSwitch";
import SideBar from "./components/sidebar/SideBar";
import styles from "./app.module.css";
import Nav from "../../components/nav-div/Nav";
import { useState } from "react";
import Separator from "../app/components/Separator/Separator";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCloseDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/" />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      <div className={styles.mainContainer}>
        {/*TODO: nav div*/}
        <Nav />
        <Separator />
        {/*TODO: hero div*/}
        <Hero />
        <Separator isTransparent={true} />
        <Separator />
        {/*TODO: doctors div => doctor page*/}
        <OurDoctors />
        {/*TODO: contact div*/}
        <Contact />
        {/*TODO: footer div*/}
        <Footer />
      </div>

      <div
        className={
          styles.sidebarContainer + " " + (isMenuOpen ? styles.animate : "")
        }
      >
        <SideBar isMenuOpen={isMenuOpen} />
      </div>

      <div className={styles.languageSwitcherContainer}>
        <ActionsSwitch
          isMenuOpen={isMenuOpen}
          openCloseDrawer={openCloseDrawer}
        />
      </div>
    </>
  );
}

export default App;
