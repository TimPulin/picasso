import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/icons/HomeIcon';

export default function Header() {
  return(
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/"><HomeIcon/></Link>
          <div className='header__title'>Тестовое задание</div>
        </div>
      </div>
    </header>
  );
}
