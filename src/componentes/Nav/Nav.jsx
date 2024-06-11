import Link from 'next/link'
import './nav.css';

const Nav = () => {
    return (
    <nav> 
        <li class="nav-item"> <Link href="/reservas">Reservas</Link></li>
        <li class="nav-item"> <Link href="/quienes-somos">Quienes somos</Link></li>
        <li class="nav-item"> <Link href="/contacto">Contacto</Link></li>
    </nav>
    )
}

export default Nav;
