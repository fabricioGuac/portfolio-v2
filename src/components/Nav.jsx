import { Link, useLocation } from 'react-router-dom';

export default function Nav(){
    //Retrieves the current page location pathname using useLocation() hook
    const currentPg = useLocation().pathname;

    return (
    <ul className='nav nav-tabs'>
        <li className='nav-item'>
            <Link 
            to="/"
            // If the current page is 'about me', gives the link the actives class
            className={currentPg === '/' ? 'nav-link active' : 'nav-link'}
            >
                About me
            </Link>
        </li>
        <li className='nav-item'>
            <Link
            to="/portfolio"
            // If the current page is 'portfolio' gives, the link the actives class
            className={currentPg === '/portfolio' ?  'nav-link active' : 'nav-link'}>
            Portfolio
            </Link>
        </li>
        <li className='nav-item'>
            <Link
            to='/contact'
            // If the current page is 'contact' gives, the link the actives class
            className={currentPg === '/contact' ? 'nav-link active' : 'nav-link'}>
            Contact
            </Link>
        </li>
        <li className='nav-item'> 
            <Link 
            to="/resume"
            className={currentPg === '/resume' ? 'nav-link active' : 'nav-link'}>
            Resume
            </Link>
        </li>
    </ul>
    );
}