import { Link } from 'react-router-dom';
import { PostType } from '../../connect/server-types';

type CardPreviewPropsType = {
  cardData: PostType,
}

export default function CardPreview(props: CardPreviewPropsType) {
  const {cardData} = props;

  return (
    <article className="card-preview">
      <span className="card-preview__number">{cardData.id}</span>
      <div className="card-preview__header">
        {cardData.title}
      </div>
      <div className="card-preview__body">
        {cardData.body}
      </div>
      <div className="card-preview__footer">
        <Link to={`/picasso/post/${cardData.id}`} state={cardData} className='button-basic'>Просмотр</Link>
      </div>

    </article>
  );
}
