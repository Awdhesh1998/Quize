import { Drawer, List, Toolbar } from "@mui/material";
import RouteList from "../../lib/RouteList";
import MenuListItem from "./menu/MenuListItem";

export default function MiniDrawer({
  mobileOpen,
  handleDrawerToggle,
}: Readonly<{
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}>) {
  const sidebarWidth = "240px";

  const drawerContent = (
    <>
      <Toolbar />
      <List>
        {RouteList.map((item) => (
          <MenuListItem key={item.label} item={item} />
        ))}
      </List>
    </>
  );

  return (
    <>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
            padding: "20px 30px",
            boxShadow: "rgba(0, 0, 0, 0.08) 1px 0px 20px",
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Permanent Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidebarWidth,
            padding: "20px 30px",
            boxShadow: "rgba(0, 0, 0, 0.08) 1px 0px 20px",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
