import { Helmet } from "react-helmet";
import Hero from "../../components/hero-div/Hero";
import styles from "./homepage.module.css";
import OurDoctors from "../../components/doctors-div/OurDoctors";
import Contact from "../../components/contact-div/Contact";
import Separator from "../../routes/app/components/Separator/Separator";
import { useTranslation } from "react-i18next";

const Homepage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("home")}</title>
        <link rel="canonical" href="https://cs-clinics.pages.dev/" />
        <meta name="robots" content="all" />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      <div className={styles.mainContainer}>
        <Hero />
        <Separator isTransparent={true} />
        <Separator />
        <OurDoctors />
        <Separator isTransparent={true} />
        <Separator />
        <Contact />
        <Separator isTransparent={true} />
        <Separator />
      </div>
    </>
  );
};

export default Homepage;
