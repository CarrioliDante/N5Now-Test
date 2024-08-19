import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProduct } from '../../slices/productSlice'
import styles from './AddProduct.module.scss'

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    amount: '',
    image: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Generar un ID único para el nuevo producto
    const newProduct = {
      ...product,
      id: Date.now(), // Genera un ID único usando el timestamp
      price: parseFloat(product.price),
      amount: parseInt(product.amount, 10),
    }

    dispatch(addProduct(newProduct))

    // Redirigir a la lista de productos
    navigate('/')
  }

  return (
    <div className={styles.addProductContainer}>
      <h2>Agregar Nuevo Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor='name'>Nombre del Producto</label>
          <input
            type='text'
            id='name'
            name='name'
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='price'>Precio</label>
          <input
            type='number'
            id='price'
            name='price'
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='amount'>Cantidad</label>
          <input
            type='number'
            id='amount'
            name='amount'
            value={product.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='image'>URL de la Imagen</label>
          <input
            type='text'
            id='image'
            name='image'
            value={product.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className={styles.submitButton}>
          Agregar Producto
        </button>
      </form>
    </div>
  )
}

export default AddProduct
