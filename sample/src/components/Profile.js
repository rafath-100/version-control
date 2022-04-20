import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty';
import { Typography } from '@mui/material';

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name}/>
            <Typography sx={{marginTop:"10px"}} variant="h4">{user.name}</Typography>
            <Typography variant="h4">{user.email}</Typography>
            <JSONPretty data={user}/>
        </div>
        )
    );
}

export default Profile