import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

function Doctor() {
    const location = useLocation();
    const {doctor} = location.state;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctor Page</title>
        <link
          rel="canonical"
          href={`http://mysite.com/doctors/${doctor._id}`}
        />
      </Helmet>
      <div>Doctor Page {doctor._id}</div>
      <div>Doctor {doctor.docname}</div>
      <Link to="/"> Homepage</Link>
    </>
  );
}

export default Doctor;
