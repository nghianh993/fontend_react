import React from 'react';
import LoginPage from './pages/loginpage';

const router = [
    {
        path: "/login",
        exact: true,
        main: () => <LoginPage />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound />
    }
];

export default router;