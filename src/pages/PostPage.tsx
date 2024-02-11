import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PostType } from '../connect/server-types';
import { changeCurrentPageTitle } from '../store/slicers/current-page-title';


export default function PostPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const postData = location.state as PostType;


  useEffect(() => {
    dispatch(changeCurrentPageTitle({title: 'Пост'}));
  }, []);

  return (
    <main className="main">
      <h1 className='h1'>{postData.title}</h1>
      <div className='author'>автор: {postData.userId}</div>
      <p className='p'>{postData.body}</p>
      <div>
        <Link to="/picasso/"  className="button-basic">К списку постов</Link>
      </div>
    </main>
  );
}
