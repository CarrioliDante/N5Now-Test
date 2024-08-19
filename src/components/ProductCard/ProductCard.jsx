import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../slices/cartSlice'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { toast } from 'react-toastify'
import styles from './ProductCard.module.scss'

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }))
    toast.success(`${quantity} ${product.name} añadido al carrito!`, {
      position: 'bottom-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
    })
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
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
        <div className={styles['quantity-controls']}>
          <button onClick={decrementQuantity}>
            <FaMinus />
          </button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>
            <FaPlus />
          </button>
        </div>
        <button
          className={styles['btn-primary']}
          onClick={handleAddToCart}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard
