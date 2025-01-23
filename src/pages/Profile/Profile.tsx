import { useState } from "react";
import { Paper, Tab, Tabs, Typography, Card, useMediaQuery } from "@mui/material";
import AuthLayout from "../../layout/AuthLayout";
import { useTheme } from "@mui/material/styles";
import TabBox from "../../components/TabBox";
import PersonalDetails from "./components/PersonalDetails";
import Security from "./components/Security";

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState(0); // Current active tab index
  const theme = useTheme(); // Access Material-UI theme
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm")); // Check if the device is small

  // Handle tab change
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // Content for each tab
  const tabContent = [
    <PersonalDetails />,
    <Security/>,
    <TabBox
      title="Notification Settings"
      subtitle="Manage your notification preferences for email and SMS alerts."
    >
      <Card>
        <Typography variant="body2">Notification settings content goes here.</Typography>
      </Card>
    </TabBox>,
    <TabBox
      title="Delete Account"
      subtitle="Permanently delete your account. All data will be permanently removed."
    >
      <Card>
        <Typography variant="body1" mt={2} color="error">
          Warning: Deleting your account is irreversible. All data will be permanently removed.
        </Typography>
      </Card>
    </TabBox>,
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
          aria-label="Profile Tabs"
        >
          <Tab label="My Profile" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="Security" id="tab-1" aria-controls="tabpanel-1" />
          <Tab label="Notification" id="tab-2" aria-controls="tabpanel-2" />
          <Tab label="Delete Account" id="tab-3" aria-controls="tabpanel-3" />
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
