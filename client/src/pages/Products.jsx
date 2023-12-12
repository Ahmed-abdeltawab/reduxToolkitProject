import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/productSlice'
import { Box, Divider, Grid, Stack, Typography } from '@mui/material'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const { data } = useSelector(state => state.product)
  const dispatch = useDispatch()
  console.log(`🚀 ~ file: Products.jsx ~ line 113 ~ Products ~ data`, data)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <Box sx={{ bgcolor: 'bgColor.light', px: 45 }}>
      <Stack
        direction='row'
        spacing={2}
        divider={<Divider orientation='vertical' flexItem />}
        sx={{ p: 2 }}
      >
        <Box flex={1}></Box>
        <Box flex={3}>
          <Typography
            variant='h2'
            sx={{
              mb: 5,
              color: 'primary.light'
            }}
          >
            Shop
          </Typography>
          <Grid container spacing={2}>
            {data.map((pro, index) => (
              <Grid key={index} item xs={4}>
                <ProductCard product={pro} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Box>
  )
}

export default Products
