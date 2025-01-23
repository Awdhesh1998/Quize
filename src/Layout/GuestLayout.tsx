import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button    } from '@mui/material';
import loginImage from "~assets/image/login-bg.svg";
import logoDark from "~assets/image/dark-logo.svg";
// import { useAppSelector } from '@/lib/hooks';
// import { selectIsAuthenticated } from '@/lib/slice/auth/authSlice';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { getValidAuthTokens } from '@/hooks/cookies';

export default function GuestLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    // const {token} = getValidAuthTokens();
    // const {push} = useRouter();
    // useEffect(()=>{
    //   if(token) {
    //     push('/dashboard');
    //   }
    // },[token, push])

    return ( <Grid container style={{minHeight:'100vh'}}>
        <Grid size={{xs:12, sm:12, lg:7, xl:8}}>
            <Box>
              <Button href="javascript::void(0)">
              <img src={logoDark}
                  loading="lazy"
                  width={174}
                  height={64} 
                  style={{color: "transparent"}} />
              </Button>
            </Box>
            <Box className="auth-image">
                <img src={loginImage}
                  loading="lazy"
                  style={{color: "transparent", maxWidth: "500px", maxHeight: "500px", width: "100%" }} />
            </Box>
        </Grid>
        <Grid size={{xs:12, sm:12, lg:5, xl:4}} className="right-box">
          <Typography component="h3" variant="h3" style={{textAlign:"center"}}>Welcome to Exam System</Typography>    
          {children}
        </Grid>
    </Grid>)
  }