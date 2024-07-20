import {createBrowserRouter} from 'react-router-dom';
import {Suspense} from 'react';
import Main from '../page/Main';

import Login from '../page/user/01';
import CompleteMemRegistration from '../page/user/03';
import FindPw from '../page/user/05';
import ResetPw from '../page/user/06';
import EditMem from '../page/user/07';
import CompleteEditMem from '../page/user/08';
import WithdrawMem from '../page/user/09';

import MemListInquiry from '../page/adminUser/01';
import MemInquiry from '../page/adminUser/02';
import CompleteMemDelete from '../page/adminUser/03';

import AdListInquiry from '../page/advertisement/01';
import AdInquiry from '../page/advertisement/02';

import AdminAdList from '../page/adminAdvertisement/01';
import AddAd from '../page/adminAdvertisement/02';
import EditAd from '../page/adminAdvertisement/03';
import CompleteAdDelete from '../page/adminAdvertisement/04';

const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <Suspense><Main/></Suspense>
    },
    {/* USER */},
    {
        path: '/login',
        element: <Suspense><Login/></Suspense>
    },
    {
        path: '/completeMemRegistration',
        element: <Suspense><CompleteMemRegistration/></Suspense>
    },
    {
        path: '/findPw',
        element: <Suspense><FindPw/></Suspense>
    },
    {
        path: '/resetPw',
        element: <Suspense><ResetPw/></Suspense>
    },
    {
        path: '/editMem',
        element: <Suspense><EditMem/></Suspense>
    },
    {
        path: '/withdrawMem',
        element: <Suspense><WithdrawMem/></Suspense>
    },
    {
        path: '/completeEditMem',
        element: <Suspense><CompleteEditMem/></Suspense>
    },
    {/* ADMIN.USER */},
    {
        path: '/memListInquiry',
        element: <Suspense><MemListInquiry/></Suspense>
    },
    {
        path: '/memInquiry',
        element: <Suspense><MemInquiry/></Suspense>
    },
    {
        path: '/completeMemDelete',
        element: <Suspense><CompleteMemDelete/></Suspense>
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
    {/* ADMIN.ADVERTISEMENT */},
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
    {
        path: '/completeAdDelete',
        element: <Suspense><CompleteAdDelete/></Suspense>
    },
])

export default rootRouter