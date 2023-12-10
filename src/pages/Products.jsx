import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/productSlice'
import { Box } from '@mui/material'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const { data } = useSelector(state => state.Products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <Box sx={{ bgcolor: '' }}>
      {data.map((pro, index) => (
        <ProductCard product={pro} key={index} />
      ))}
    </Box>
  )
}

export default Products
