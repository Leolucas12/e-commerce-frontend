import React, { useState, useCallback, useContext, createContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [data, setData] = useState(() => {
        const token = sessionStorage.getItem('@Ecommerce:token');
        const user = sessionStorage.getItem('@Ecommerce:user');

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            return { token, user: JSON.parse(user) };
        }

        return {};
    });

    const signIn = useCallback(async ({ email, password }) => {
        const reponse = await api.post('sessions', { email, password });

        const { token, user } = reponse.data;
        sessionStorage.setItem('@Ecommerce:token', token);
        sessionStorage.setItem('@Ecommerce:user', JSON.stringify(user));

        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user });
    }, []);

    const signOut = useCallback(() => {
        sessionStorage.removeItem('@Ecommerce:token');
        sessionStorage.removeItem('@Ecommerce:user');

        setData({});
    }, []);

    const updateUser = useCallback(
        (user) => {
            sessionStorage.setItem('@Ecommerce:user', JSON.stringify(user));

            setData({
                token: data.token,
                user,
            });
        },
        [setData, data.token],
    );

    return (
        <AuthContext.Provider
            value={{ user: data.user, signIn, signOut, updateUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) throw new Error('useAuth must be used within an AuthProvider');

    return context;
}
