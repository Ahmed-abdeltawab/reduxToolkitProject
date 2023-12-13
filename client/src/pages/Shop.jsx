import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/productSlice'
import { Box, Divider, Stack, Typography } from '@mui/material'
import Products from '../components/Products'
import ShopSidebar from '../components/ShopSidebar'

const Shop = () => {
  const products = useSelector(state => state.product.data)
  const searchQuery = useSelector(state => state.product.searchQuery)
  const dispatch = useDispatch()
  const data = products.filter(pro =>
    pro.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
        <Box flex={1}>
          <ShopSidebar />
        </Box>
        <Box flex={3}>
          {data.length > 0 ? (
            <Products data={data} />
          ) : (
            <Typography sx={{ textAlign: 'center' }}>
              There is no exists products
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  )
}

export default Shop
