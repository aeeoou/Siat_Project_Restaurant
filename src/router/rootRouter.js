import {createBrowserRouter} from 'react-router-dom';
import {Suspense} from 'react';
import Main from '../page/Main';
import Login from '../page/user/01';

import AdListInquiry from '../page/advertisement/01';
import AdInquiry from '../page/advertisement/02';

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
    }
])

export default rootRouter