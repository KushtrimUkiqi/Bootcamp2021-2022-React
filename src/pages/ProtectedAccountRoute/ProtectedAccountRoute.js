import React from 'react';
import {Navigate,Outlet} from 'react-router';

export default function ProtectedAccountRoute() {

    const auth = false;
    return auth ? <Outlet/> : <Navigate to="/login" />;
}
