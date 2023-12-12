import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/productSlice'
import { Box, Divider, Stack } from '@mui/material'
import Products from '../components/Products'
import ShopSidebar from '../components/ShopSidebar'

const Shop = () => {
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
        <Box flex={1}>
          <ShopSidebar />
        </Box>
        <Box flex={3}>
          <Products data={data} />
        </Box>
      </Stack>
    </Box>
  )
}

export default Shop
