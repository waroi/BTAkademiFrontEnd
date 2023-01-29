import React from 'react';
import Haber from '../views/Haber';
import HomeNew from '../views/HomeNew';
import Iletisim from '../views/Iletisim';
import HaberInfo from '../views/HaberInfo';
import { useRoutes } from 'react-router-dom';
import { Children } from 'react';

const Router = () => {
    const routes = useRoutes([
        { path: "/", element: <HomeNew /> },
        {
            path: "/news", element: <Haber />,

            // children: [
            //     {
            //         path: ":id",
            //         element: <HaberInfo />
            //     }
            // ]
        },

        {
            path: "/iletisim",
            element: <Iletisim />,

        },
    ]);
    return routes;
};

export default Router;
