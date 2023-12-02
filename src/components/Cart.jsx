import { Badge } from '@mui/material'
import { RiShoppingBagLine } from 'react-icons/ri'

const Cart = () => {
  return (
    <Badge badgeContent={4} color='success' sx={{ p: 0 }}>
      <RiShoppingBagLine
        color='black'
        size='1.7rem'
        style={{ padding: '1px' }}
      />
    </Badge>
  )
}

export default Cart
