import React from 'react';
import { Route, Redirect } from 'react-router-dom';


//Easy
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
       localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/Login', state: { from: props.location } }} />
    )} />
)

export default PrivateRoute;