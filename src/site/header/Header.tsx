import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/icons/HomeIcon';
import { useCurrentPage } from '../../store/selectors';

export default function Header() {
  const {title} = useCurrentPage();

  return(
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/picasso/"><HomeIcon/></Link>
          <div className='header__title'>{title}</div>
        </div>
      </div>
    </header>
  );
}
