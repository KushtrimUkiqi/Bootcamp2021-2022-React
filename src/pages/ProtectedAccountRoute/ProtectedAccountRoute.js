import React, {useContext} from 'react';
import {Navigate,Outlet} from 'react-router';
import {UserContext} from '../../contexts/UserContext';

export default function ProtectedAccountRoute() {

    const {auth}  = useContext(UserContext);
    return auth.loggedIn ? <Outlet/> : <Navigate to="/login" />;
}
