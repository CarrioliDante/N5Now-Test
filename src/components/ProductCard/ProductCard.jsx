import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../slices/cartSlice'
import { FaPlus, FaMinus } from 'react-icons/fa'
import styles from './ProductCard.module.scss'
import { toast } from 'react-toastify'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)
  const cartItem = cartItems.find((item) => item.id === product.id)

  const [quantity, setQuantity] = useState(
    cartItem ? cartItem.quantity : 0
  )

  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity)
    }
  }, [cartItem])

  const handleAddToCart = () => {
    if (cartItem && cartItem.quantity + quantity > product.amount) {
      toast.error('No hay suficiente stock disponible!', {
        position: 'bottom-right',
        autoClose: 1000,
      })
    } else {
      dispatch(addToCart({ ...product, quantity }))
      toast.success(
        `${quantity} ${product.name}${
          quantity > 1 ? 's' : ''
        } añadido${quantity > 1 ? 's' : ''} al carrito!`,
        {
          position: 'bottom-right',
          autoClose: 1000,
        }
      )
    }
  }

  const incrementQuantity = () => {
    setQuantity((prev) =>
      Math.min(
        prev + 1,
        product.amount - (cartItem ? cartItem.quantity : 0)
      )
    )
  }

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className={styles.card}>
      <img
        src={product.image}
        alt={product.name}
        className={styles['card-img-top']}
      />
      <div className={styles['card-body']}>
        <h5 className={styles['card-title']}>{product.name}</h5>
        <p className={styles['card-text']}>
          Precio: ${product.price}
        </p>
        {product.amount === 0 ? (
          <p className={styles['out-of-stock']}>Sin Stock</p>
        ) : (
          <>
            <div className={styles['quantity-controls']}>
              <button
                onClick={decrementQuantity}
                disabled={quantity === 0}
              >
                <FaMinus />
              </button>
              <span>{quantity}</span>
              <button onClick={incrementQuantity}>
                <FaPlus />
              </button>
            </div>
            {quantity > 0 && (
              <button
                className={styles['btn-primary']}
                onClick={handleAddToCart}
              >
                Añadir al carrito
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ProductCard
