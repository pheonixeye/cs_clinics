import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Not Found...</title>
        <link rel="canonical" href={`http://mysite.com/not_found`} />
      </Helmet>
      <div>404 Page Not Found...</div>;
    </>
  );
};

export default NotFoundPage;
