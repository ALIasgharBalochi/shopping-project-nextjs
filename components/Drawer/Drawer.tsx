import { Drawer } from "@mui/material";
import { OpenDrawer } from "../Types/Types";
import React from "react";
import DrawerHeaderComponent from "./DrawerHeader.tsx/DrawerHeader";
import DrawerContent from "./DrawerCntent.tsx/DrawerContent";

const DrawerComponent: React.FC<OpenDrawer> = ({ openDrawer, closeDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={closeDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          width: "70%",
          p: "2rem",
        },
      }}
    >
      <DrawerHeaderComponent closeDrawer={closeDrawer} />
      <DrawerContent />
    </Drawer>
  );
};

export default DrawerComponent;
