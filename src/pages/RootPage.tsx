import { Outlet } from 'react-router-dom';
import Footer from '../site/footer/Footer';
import Header from '../site/header/Header';


export default function RootPage() {

  return (
    <>
      <Header/>
      <main className='main'>
        <div className="container">
          <Outlet/>
        </div>
      </main>

      <Footer/>
    </>
  );
}
