import { Badge } from '@mui/material'
import { useEffect } from 'react'
import { RiShoppingBasketLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { getCarts } from '../store/cartSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const {
    data: cart,
    error,
    isError,
    isLoading
  } = useSelector(state => state.cart)
  useEffect(() => {
    dispatch(getCarts())
  }, [dispatch])
  console.log(cart) // carts of all users
  return (
    <Badge
      badgeContent={4}
      sx={{
        '& .MuiBadge-badge': {
          bgcolor: '#8bc34a',
          color: 'black',
          fontSize: '.7rem'
        }
      }}
    >
      <RiShoppingBasketLine
        color='#8bc34a'
        size='1.4rem'
        style={{ padding: '1px' }}
      />
    </Badge>
  )
}

export default Cart
