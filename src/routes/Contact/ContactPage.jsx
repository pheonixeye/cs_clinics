import { Helmet } from "react-helmet";
import Separator from "../app/components/Separator/Separator";
import Contact from "../../components/contact-div/Contact";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language == "en";
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("contact")}</title>
        <meta
          name="description"
          content={
            isEnglish
              ? "clinic contact information including a map, phone numbers, working hours and address."
              : "بيانات تواصل العيادة متضمنة خريطة و ارقام التليفون و ساعات العمل و العنوان"
          }
        />
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
