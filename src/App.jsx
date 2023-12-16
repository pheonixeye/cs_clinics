import "./App.css";
import { Helmet } from "react-helmet";
import {Link} from 'react-router-dom';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HomePage</title>
        <link rel="canonical" href="http://mysite.com/" />
      </Helmet>
      <div>HomePage</div>
      <Link to="/doctors">Doctors</Link>
    </>
  );
}

export default App;
