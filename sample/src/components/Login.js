import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Button} from '@mui/material';
import { Typography, Grid } from '@mui/material';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    !isAuthenticated && (
      <>
      <Grid justify="center">
        <Typography variant="h4">
          Welcome to the React Application!
        </Typography>
        <Button variant="contained" onClick={() => loginWithRedirect()}>
          Log In
        </Button>
      </Grid>
      </>
    )
  );
}

export default LoginButton;
