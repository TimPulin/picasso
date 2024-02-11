import {createBrowserRouter} from 'react-router-dom';
import RootPage from '../pages/RootPage';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';


export const router = createBrowserRouter([
  {
    path: '/picasso/',
    element: <RootPage/>,
    children: [
      {
        path: '/picasso/',
        element: <HomePage/>,
      },
      {
        path: '/picasso/post/:id',
        element: <PostPage/>
      }
    ]
  }
]);
