import { Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Fragment, ReactNode } from "react";

type Props={
    title:string,
    children?:ReactNode
}

export default function MainPage({title, children}:Props){
    return(<Fragment>
        <Grid container direction="column" rowSpacing="3">
          <Grid>
            <Typography component="h3" variant="h3">{title}</Typography>
          </Grid>
        </Grid>
        <Box sx={{marginTop:"20px"}}>
          {children}
        </Box>
        </Fragment>)
}