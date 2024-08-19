import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart)

  return (
    <nav className={styles.navbar}>
      <div className={styles.navleft}>
        <NavLink to='/add-product' className={styles.link}>
          Agregar Producto
        </NavLink>
      </div>
      <div className={styles.navcenter}>
        <NavLink to='/' className={styles.brand}>
          Home
        </NavLink>
      </div>
      <div className={styles.navright}>
        <ul className={styles.navlinks}>
          <li className={styles.cartWrapper}>
            <NavLink to='/cart' className={styles.link}>
              <FaShoppingCart />
              {cartItems.length > 0 && (
                <span className={styles.cartCount}>
                  {cartItems.length}
                </span>
              )}
            </NavLink>
            <div className={styles.cartDropdown}>
              {cartItems.length > 0 ? (
                <ul>
                  {cartItems.map((item) => (
                    <li key={item.id} className={styles.cartItem}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={styles.cartItemImage}
                      />
                      <span>
                        {item.name} - {item.quantity} unidad
                        {item.quantity > 1 ? 'es' : ''}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Tu carrito está vacío.</p>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
