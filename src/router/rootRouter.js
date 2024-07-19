import {createBrowserRouter} from 'react-router-dom';
import {Suspense} from 'react';
import Main from '../page/Main';
import Login from '../page/user/01';

import AdListInquiry from '../page/advertisement/01';
import AdInquiry from '../page/advertisement/02';

import AdminAdList from '../page/adminAdvertisement/01';
import AddAd from '../page/adminAdvertisement/02';
import EditAd from '../page/adminAdvertisement/03';

const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Main/></Suspense>
    },
    {
        path: '/login',
        element: <Suspense><Login/></Suspense>
    },
    {/* ADVERTISEMENT */},
    {
        path: '/adListInquiry',
        element: <Suspense><AdListInquiry/></Suspense>
    },
    {
        path: '/adInquiry',
        element: <Suspense><AdInquiry/></Suspense>
    },
    {/* ADMIN_ADVERTISEMENT */},
    {
        path: '/adminAdList',
        element: <Suspense><AdminAdList/></Suspense>
    },
    {
        path: '/addAd',
        element: <Suspense><AddAd/></Suspense>
    },
    {
        path: '/editAd',
        element: <Suspense><EditAd/></Suspense>
    },
])

export default rootRouter