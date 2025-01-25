import { useState } from "react";
import { Paper, Tab, Tabs, useMediaQuery } from "@mui/material";
import AuthLayout from "../../Layout/AuthLayout";
import { useTheme } from "@mui/material/styles";
import OrganizationDetails from "./components/OrganizationDetails";
import Branch from "./components/Branch";
// import TabBox from "../../components/TabBox";
// import PersonalDetails from "./components/PersonalDetails";
// import Security from "./components/Security";

export default function Organization() {
  const [selectedTab, setSelectedTab] = useState(0); // Current active tab index
  const theme = useTheme(); // Access Material-UI theme
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm")); // Check if the device is small

  // Handle tab change
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // Content for each tab
  const tabContent = [
   <OrganizationDetails/>,
   <Branch/>
  ];

  return (
    <AuthLayout>
      <Paper
        elevation={3}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: isSmallDevice ? "column" : "row",
          padding: 2,
          height: "100%",
        }}
      >
        {/* Tabs Section */}
        <Tabs
          orientation={isSmallDevice ? "horizontal" : "vertical"}
          variant="scrollable"
          value={selectedTab}
          onChange={handleTabChange}
          sx={{
            borderRight: isSmallDevice ? "none" : 1,
            borderBottom: isSmallDevice ? 1 : "none",
            borderColor: "divider",
            minWidth: isSmallDevice ? "100%" : 150,
          }}
          aria-label="Organization Tabs"
        >
          <Tab label="Organization" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="Branch" id="tab-1" aria-controls="tabpanel-1" />
          <Tab label="Batch" id="tab-2" aria-controls="tabpanel-2" />
          <Tab label="Category" id="tab-3" aria-controls="tabpanel-3" />
        </Tabs>

        {/* Tab Content Section */}
        <div
          role="tabpanel"
          id={`tabpanel-${selectedTab}`}
          aria-labelledby={`tab-${selectedTab}`}
          style={{ flexGrow: 1, padding: isSmallDevice ? "16px 0" : "0 16px" }}
        >
          {tabContent[selectedTab]}
        </div>
      </Paper>
    </AuthLayout>
  );
}
