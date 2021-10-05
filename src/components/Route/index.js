import React from 'react';
import {
    Redirect, Route as ReactDOMRoute
} from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

const Route = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { user } = useAuth();
    return (
        <ReactDOMRoute
            {...rest}
            render={({ location }) => {
                if (isPrivate === !!user) {
                    return <Component />
                } else if (user) {
                    return <Component />
                } else if (isPrivate) {
                    return <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                }
            }}
        />
    );
};

export default Route;

// return isPrivate === !!user ? (
//     <Component />
// ) : (
//     <Redirect
//         to={{
//             pathname: isPrivate ? '/login' : '/admin',
//             state: { from: location },
//         }}
//     />
// );