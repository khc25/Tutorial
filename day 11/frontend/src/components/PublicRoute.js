import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//Hard
const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            localStorage.getItem('token') ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;


