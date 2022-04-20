import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button} from '@mui/material';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button sx={{marginBottom:"10px"}} variant="contained" onClick={() => logout({returnTo: window.location.origin})}>
        Log Out
      </Button>
    )
  );
}

export default LogoutButton;
