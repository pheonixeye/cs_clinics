import { Helmet } from "react-helmet";
import { useNavigate, useLoaderData } from "react-router-dom";

function Doctors() {
  const { data } = useLoaderData();
//   console.log(data);
  const navigate = useNavigate();

  const handleNavigate = (docid, doctor) => {
    navigate(`/doctors/${docid}`, { state: { doctor } });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctors</title>
        <link rel="canonical" href="http://mysite.com/doctors" />
      </Helmet>
      <div>Doctors Page</div>
      {data.data.map((doctor, index) => {
        return (
          <li key={index}>
            <button onClick={()=>handleNavigate(doctor._id, doctor)}>
              {doctor.docname}
            </button>
          </li>
        );
      })}
    </>
  );
}

export default Doctors;
