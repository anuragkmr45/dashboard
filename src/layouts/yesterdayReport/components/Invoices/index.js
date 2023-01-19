import Card from "@mui/material/Card";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import Invoice from "layouts/yesterdayReport/components/Invoice";

function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <MDTypography variant="h6" fontWeight="medium">
          Invoices
        </MDTypography>
        <MDButton variant="outlined" color="info" size="small">
          view all
        </MDButton>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="April, 27, 2023 10:10:50 pm" id="#MS-415646" price="$180" />
          <Invoice date="March, 27, 2023 1:10:50 pm" id="#RV-126749" price="$250" />
          <Invoice date="March, 27, 2023 11:10:50 pm" id="#QW-103578" price="$120" />
          <Invoice date="March, 27, 2023 12:10:50 pm" id="#MS-415646" price="$180" />
          <Invoice date="March, 27, 2023 4:10:50 pm" id="#AR-803481" price="$300" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Invoices;
