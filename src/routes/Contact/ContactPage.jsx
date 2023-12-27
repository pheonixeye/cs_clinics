import { Helmet } from "react-helmet";
import Separator from "../app/components/Separator/Separator";
import Contact from "../../components/contact-div/Contact";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("contact")}</title>
        <link rel="canonical" href={`https://cs-clinics.pages.dev/contact`} />
        <meta name="robots" content="all" />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      <Contact />
      <Separator isTransparent={true} />
      <Separator />
    </>
  );
};

export default ContactPage;
