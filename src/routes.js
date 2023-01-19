import MonthlyReport from "layouts/monthlyReport";
import TotalRevenue from "layouts/totalRevenue";
import YesterdayReport from "layouts/yesterdayReport";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";

import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Monthly Report",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <MonthlyReport />,
  },
  {
    type: "collapse",
    name: "Total Revenue Report",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <TotalRevenue />,
  },
  {
    type: "collapse",
    name: "Yesterday Report",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <YesterdayReport />,
  },
  {
    type: "collapse",
    name: "Ecpm",
    key: "Ecpm",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/ecpm",
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
