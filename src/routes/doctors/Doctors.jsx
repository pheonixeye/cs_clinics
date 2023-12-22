import { Helmet } from "react-helmet";
import OurDoctors from "../../components/doctors-div/OurDoctors";
import Separator from "../../routes/app/components/Separator/Separator";

const Doctors = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctors</title>
        <link rel="canonical" href="http://mysite.com/doctors" />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      <OurDoctors />
      <Separator isTransparent={true} />
      <Separator />
    </>
  );
};

export default Doctors;
