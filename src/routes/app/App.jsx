import Footer from "../../components/footer-div/Footer";
import ActionsSwitch from "./components/ActionsSwitch/ActionsSwitch";
import SideBar from "./components/sidebar/SideBar";
import styles from "./app.module.css";
import Nav from "../../components/nav-div/Nav";
import { useState } from "react";
import Separator from "../app/components/Separator/Separator";
import Social from "../../components/social/Social";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Doctors from "../doctors/Doctors";
import ContactPage from "../Contact/ContactPage";
import DoctorPage from "../doctor/DoctorPage";
import NotFoundPage from "../NotFound/NotFound";
import ConfirmPage from "../Confirm/ConfirmPage";
import Articles from "../Articles/Articles";
import ArticlePage from "../Articles/ArticlePage/ArticlePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openCloseDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" index={true} element={<Homepage />}></Route>
          <Route path="doctors" element={<Doctors />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route
            path="doctors/:docid"
            element={<DoctorPage />}
            errorElement={<NotFoundPage />}
          ></Route>
          <Route
            path="doctors/:docid/confirm"
            element={<ConfirmPage />}
          ></Route>
          <Route path="articles" element={<Articles />}></Route>
          <Route
            path="articles/:docid/:articleid"
            element={<ArticlePage />}
          ></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
          <Route path="404" element={<NotFoundPage />}></Route>
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
