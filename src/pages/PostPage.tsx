import { Link,  useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { changeCurrentPageTitle } from '../store/slicers/current-page-title';

import { PostType } from '../connect/server-types';
import { LocationState, LocationStateKey } from '../router/router-types';

export default function PostPage() {
  const dispatch = useDispatch();
  const {state}: LocationState  = useLocation();
  const postData: PostType = state.payload;

  const {POST_ID} = LocationStateKey;


  useEffect(() => {
    dispatch(changeCurrentPageTitle({title: 'Пост'}));
  }, []);

  return (
    <main className="main">
      <h1 className='h1'>{postData.title}</h1>
      <div className='author'>автор: {postData.userId}</div>
      <p className='p'>{postData.body}</p>
      <div>
        <Link
          to="/picasso/"
          state={{key: POST_ID, payload: postData.id - 1}}
          className="button-basic">
          К списку постов
        </Link>
      </div>
    </main>
  );
}
