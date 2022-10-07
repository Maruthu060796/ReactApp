import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const AddEmployee = Loadable(lazy(() => import('./AddEmployee')));
const EmployeeList = Loadable(lazy(() => import('./EmployeeList')));
const EditEmployee = Loadable(lazy(() => import('./EditEmployee')));

const EmployeeRoutes = [
    { path: '/employee/default', element: <AddEmployee /> },
    { path: '/employee/default', element: <EmployeeList /> },
    { path: '/employee/default', element: <EditEmployee /> },
];

export default EmployeeRoutes;
