import {createBrowserRouter} from 'react-router-dom';
import RootPage from '../pages/RootPage';
import HomePage from '../pages/HomePage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      }
    ]
  }
]);
