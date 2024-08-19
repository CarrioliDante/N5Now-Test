import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from '../../slices/cartSlice'
import { purchaseItems } from '../../slices/productSlice'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { toast } from 'react-toastify'
import styles from './Cart.module.scss'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handlePurchase = () => {
    dispatch(purchaseItems(cartItems)) // Actualiza las cantidades en el inventario
    dispatch(clearCart()) // Limpia el carrito después de la compra
    toast.success('Compra realizada con éxito!', {
      position: 'bottom-right',
      autoClose: 1000,
    })
  }

  return (
    <div className={styles.cartContainer}>
      {/* Productos en el carrito */}
      <div className={styles.productsColumn}>
        {cartItems.map((item) => (
          <div className={styles.cartItem} key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.cartImage}
            />
            <div className={styles.cartDetails}>
              <h4>{item.name}</h4>
              <p>{item.quantity} unidades</p>
              <p>Precio: ${item.price}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
            </div>
            <div div className={styles['quantity-controls']}>
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, increment: false })
                  )
                }
              >
                <FaMinus />
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({ id: item.id, increment: true })
                  )
                }
              >
                <FaPlus />
              </button>
              <button
                className={styles.removeButton}
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Resumen y Botones de Acciones */}
      <div className={styles.summaryColumn}>
        <h2>
          Total: $
          {cartItems
            .reduce(
              (sum, item) => sum + item.price * item.quantity,
              0
            )
            .toFixed(2)}
        </h2>
        <button
          className={styles.purchaseButton}
          onClick={handlePurchase} // Accion para actualizar inventario y limpiar carrito
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
  )
}

export default Cart
