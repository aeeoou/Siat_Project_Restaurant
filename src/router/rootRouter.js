import {createBrowserRouter} from 'react-router-dom';
import {Suspense} from 'react';
import Main from '../page/Main';
import Login from '../page/user/01';

import AdListInquiry from '../page/advertisement/01';

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
    }
])

export default rootRouter