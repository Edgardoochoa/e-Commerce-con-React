import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import { useState } from 'react'
import './header.scss'

const Header = () => {
  const { isAuth, logout } = useAuthContext()
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const linkIsActive = (isActive) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  return (
    <nav className='header'>
      <NavLink to='/' className='header__logo'>
        <img className='logo' src='https://img.freepik.com/vector-premium/plantilla-diseno-logotipo-compras-linea-logotipo-compras-digitales-cursor-raton-conceptos-carro_502185-286.jpg?size=626&ext=jpg&ga=GA1.1.1181642171.1690553134&semt=ais' alt='LOGO' />
      </NavLink>

      <div>
        <form className='form-inline '>
          <input type='text' className='form-control' id='search' placeholder='Enter name' value={searchTerm} onChange={handleInputChange} />
        </form>
      </div>

      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink to='/' className={({ isActive }) => linkIsActive(isActive)}>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink to='/dashboard' className={({ isActive }) => linkIsActive(isActive)}>Dashboard</NavLink>
        </li>
        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink to='/secret' className={({ isActive }) => linkIsActive(isActive)}>Secret</NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  to='/'
                  className='header__item-link'
                  onClick={logout}
                >
                  Logout
                </NavLink>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <NavLink to='/login' className={({ isActive }) => linkIsActive(isActive)}>Login</NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink to='/signup' className={({ isActive }) => linkIsActive(isActive)}>Signup</NavLink>
              </li>
            </>
            )}
        <img className='carro' src='https://cdn-icons-png.flaticon.com/512/5087/5087847.png' alt='carrito-de-compra' />
      </ul>

    </nav>
  )
}
export default Header
