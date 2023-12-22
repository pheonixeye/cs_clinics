import { Helmet } from "react-helmet";
import Separator from "../app/components/Separator/Separator";
import Contact from "../../components/contact-div/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="http://mysite.com/contact" />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      <Contact />
      <Separator isTransparent={true} />
      <Separator />
    </>
  );
};

export default ContactPage;
