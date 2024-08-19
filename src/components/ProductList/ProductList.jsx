import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../slices/productSlice'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductList.module.scss' // Importar los estilos

const ProductList = ({ onAddToCart }) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products.items)
  const productStatus = useSelector((state) => state.products.status)
  const error = useSelector((state) => state.products.error)

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts())
    }
  }, [productStatus, dispatch])

  if (productStatus === 'loading') {
    return <div>Loading...</div>
  } else if (productStatus === 'failed') {
    return <div>Error: {error}</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles['product-list']}>
        {products.map((product) => (
          <div key={product.id} className={styles['product-item']}>
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default ProductList
