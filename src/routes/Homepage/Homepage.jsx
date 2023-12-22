import { Helmet } from "react-helmet";
import Hero from "../../components/hero-div/hero";
import styles from "./homepage.module.css";
import OurDoctors from "../../components/doctors-div/OurDoctors";
import Contact from "../../components/contact-div/Contact";
import Separator from "../../routes/app/components/Separator/Separator";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HomePage</title>
        <link rel="canonical" href="http://mysite.com/" />
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
