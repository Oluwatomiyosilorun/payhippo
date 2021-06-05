import Business from '../Business/Business';
import Bvn from '../BVN/Bvn';
import VerifyPhone from '../PhoneNumber/VerifyPhone';
import Signin from '../Layouts/onboarding/Signin';

export const navArray = [
    {
        name: '1',
        path: '/',
        component: Signin
    },

    {
        name: '2',
        path: '/verify-phone',
        component: VerifyPhone
    },

    {
        name: '3',
        path: '/business',
        component: Business
    },

    {
        name: '4',
        path: '/bvn',
        component: Bvn
    }
]