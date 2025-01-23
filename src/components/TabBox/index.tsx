import React from "react";
import { Box,  Stack, Typography } from "@mui/material";

export default function TabBox({
  children,
  boxProps = {},
  title,
  subtitle 
}: Readonly<{
  children: React.ReactNode;
  stackProps?: object; // Props for customizing the Stack component
  boxProps?: object;
  title?:string, // Props for customizing the Box component
  subtitle?:string, // Props for customizing the Box component
}>) {
  return (
    <Box  sx={{paddingLeft:1, paddingRight:1, width:"-webkit-fill-available"}} {...boxProps}>       
        <Stack>
            {title&& <Typography variant="h6">{title}</Typography>}
            {subtitle&& <Typography variant="subtitle2" style={{marginTop:"-10px"}}>{subtitle}</Typography>}
        </Stack>
        {children}        
    </Box>
  );
}
