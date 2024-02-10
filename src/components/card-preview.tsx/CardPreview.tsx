import { Link } from 'react-router-dom';

export default function CardPreview() {
  return (
    <article className="card-preview">
      <span className="card-preview__number">788888</span>
      <div className="card-preview__header">
        header
      </div>
      <div className="card-preview__body">
        body body body body body body body body body body body body body body body body bodybody body body body body body body
        body body body body body body body body body body body body body body body body body body body body body body
        body body body body body body
      </div>
      <div className="card-preview__footer">
        <Link to="/" className='button-basic'>Просмотр</Link>
      </div>

    </article>
  );
}
