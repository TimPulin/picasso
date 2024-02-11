import { Link, useLocation } from 'react-router-dom';
import { PostType } from '../connect/server-types';


export default function PostPage() {

  const location = useLocation();
  const postData = location.state as PostType;

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
