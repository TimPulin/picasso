import {createBrowserRouter} from 'react-router-dom';
import RootPage from '../pages/RootPage';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/post/:id',
        element: <PostPage/>
      }
    ]
  }
]);
