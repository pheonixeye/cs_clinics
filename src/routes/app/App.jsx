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
import Social from "../../components/social/Social";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
      {/*TODO: nav div*/}

      <Router>
        <Nav />
        <Routes>
          <Route
            path="/"
            index={true}
            element={
              <div className={styles.mainContainer}>
                {/*TODO: hero div*/}
                <Hero />
                <Separator isTransparent={true} />
                <Separator />
                {/*TODO: doctors div => doctor page*/}
                <OurDoctors />
                <Separator isTransparent={true} />
                <Separator />
                {/*TODO: contact div*/}
                <Contact />
                <Separator isTransparent={true} />
                <Separator />
              </div>
            }
          ></Route>
          <Route
            path="doctors"
            element={
              <>
                <OurDoctors />
                <Separator isTransparent={true} />
                <Separator />
              </>
            }
          ></Route>
          <Route
            path="contact"
            element={
              <>
                <Contact />
                <Separator isTransparent={true} />
                <Separator />
              </>
            }
          ></Route>
          <Route path="doctors/:docid"></Route>
        </Routes>
        <div
          className={
            styles.sidebarContainer + " " + (isMenuOpen ? styles.animate : "")
          }
        >
          <SideBar isMenuOpen={isMenuOpen} openCloseDrawer={openCloseDrawer} />
        </div>

        <div className={styles.languageSwitcherContainer}>
          <ActionsSwitch
            isMenuOpen={isMenuOpen}
            openCloseDrawer={openCloseDrawer}
          />
        </div>
      </Router>

      <div className={styles.bottomDiv}>
        {/*TODO: social div*/}
        <Social />
        <Separator isTransparent={true} />
        <Separator />
        {/*TODO: footer div*/}
        <Footer />
      </div>
    </>
  );
}

export default App;
