/* eslint-disable react/prop-types */
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material'
import { TbShoppingBagPlus } from 'react-icons/tb'
const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        height: 400,
        boxShadow: 0,
        py: 0,
        borderRadius: 0,
        position: 'relative'
      }}
    >
      <CardMedia
        component='img'
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain' }}
        height={270}
      />
      <CardContent
        sx={{ height: 130, textAlign: 'center', bgcolor: 'bgColor.light' }}
      >
        <Typography sx={{ color: 'grayColor.main' }}>
          {product.category}
        </Typography>
        <Typography sx={{ color: 'secondary.dark', fontSize: '18px' }}>
          {product.title.slice(0, 20)}...
        </Typography>
        <Typography
          sx={{ color: 'secondary.dark', fontSize: '16px', fontWeight: 'bold' }}
        >
          £{product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ position: 'absolute', top: 0, right: 3 }}>
        <IconButton
          sx={{ bgcolor: '#8bc34a', '&:hover': { bgcolor: '#fff !important' } }}
        >
          <TbShoppingBagPlus color='#000' fontSize={'1.2rem'} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard
