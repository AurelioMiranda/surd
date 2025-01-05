import { useEffect, useState } from "react";
import { Tab, Tabs, Box } from "@mui/material";
import DashboardOverview from "./DashboardOverview";
import AffiliateCodes from "./AffiliateCodes";
import OrderManagement from "./OrderManagement";

export default function AdminDashboard() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Visão Geral" />
        <Tab label="Códigos de afiliado" />
        <Tab label="Pedidos" />
      </Tabs>
      {tabIndex === 0 && <DashboardOverview />}
      {tabIndex === 1 && <AffiliateCodes />}
      {tabIndex === 2 && <OrderManagement />}
    </Box>
  );
}
