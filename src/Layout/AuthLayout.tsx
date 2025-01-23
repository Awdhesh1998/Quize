import TopBar from "../components/layout/TopBar";
import MiniDrawer from "../components/layout/MiniDrawer";
import { Box, Container, Toolbar, styled } from "@mui/material";
import { useState } from "react";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "transparent",
}));

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <MainWrapper>
      <TopBar
        handleDrawerToggle={() => setMobileOpen(!mobileOpen)}
      />
      <MiniDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={() => setMobileOpen(!mobileOpen)}
      />
      <PageWrapper
        sx={{
          marginLeft: { md: "240px" },
          padding: "20px",
        }}
      >
        <Toolbar />
        <Container component="main">
          {children}
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
}
