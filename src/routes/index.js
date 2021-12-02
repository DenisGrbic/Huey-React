import Welcome from "pages/welcome";
import GetStarted from "pages/getStarted";
import homeRoutes from "routes/pages/homeRoutes";

const routes = [
  // page for guest
  {
    path: `/`,
    exact: true,
    auth: false,
    component: Welcome,
  },
  {
    path: `/get_started`,
    exact: true,
    auth: false,
    component: GetStarted,
  },
];

export default routes;
