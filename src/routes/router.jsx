import App from "../App";
import Doctors from "../routes/doctors/Doctors";
import Doctor from "../routes/doctor/Doctor";

import { createBrowserRouter } from "react-router-dom";
import { loader } from "./get_doctors";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "doctors",
    element: <Doctors />,
    loader: loader,
  },
  {
    path: "doctors/:docid",
    element: <Doctor />,
  },
]);

export default router;
