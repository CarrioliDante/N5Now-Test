import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, clearCart } from '../../slices/cartSlice'
import { purchaseItems } from '../../slices/productSlice'
import { toast } from 'react-toastify'
import styles from './Cart.module.scss'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handlePurchase = () => {
    dispatch(purchaseItems(cartItems))
    dispatch(clearCart())
    toast.success('Compra realizada con éxito!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
    })
  }

  return (
    <div className={styles.cart}>
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        <div className={styles.cartItemsContainer}>
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.cartItemImage}
                />
                <div>
                  <span>{item.name}</span>
                  <span>
                    {item.quantity} unidad
                    {item.quantity > 1 ? 'es' : ''}
                  </span>
                  <span>Precio: ${item.price}</span>
                  <span>Subtotal: ${item.price * item.quantity}</span>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cartSummary}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button
              className={styles.buyButton}
              onClick={handlePurchase}
            >
              Comprar
            </button>
            <button
              className={styles.clearButton}
              onClick={() => dispatch(clearCart())}
            >
              Limpiar Carrito
            </button>
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
    </div>
  )
}

export default Cart
