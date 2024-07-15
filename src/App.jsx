import {Outlet} from 'react-router-dom'; 
import Nav from './components/Nav'; 
import Footer from './components/Footer';

export default function App() {

  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

