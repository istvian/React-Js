import './NavBar.css'
import logo from './logo.svg'

const NavBar = () =>{
    return(
        <nav className='navBar'>
            <div className='flexEmp'>
            <img className='navLogo' alt='Logo de la empresa' src={logo}/>
            <a className='text-dark' href='#'>Nantiki</a>
            </div>
            <div className='flexLinks'>
                <button className='btn'>Inicio</button>
                <button className='btn'>Productos</button>
                <button className='btn'>Galeria</button>
                <button className='btn'>Sobre Nosotros</button>
            </div>
        </nav>
    )
}

export default NavBar