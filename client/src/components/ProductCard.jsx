/* eslint-disable react/prop-types */
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ height: 400, boxShadow: 0, py: 0, borderRadius: 0 }}>
      <CardMedia
        component='img'
        image={product.images[0]}
        alt={product.title}
        height={270}
      />
      <CardContent
        sx={{ height: 130, textAlign: 'center', bgcolor: 'bgColor.light' }}
      >
        <Typography sx={{ color: 'grayColor.main' }}>
          {product.category.name}
        </Typography>
        <Typography sx={{ color: 'secondary.dark', fontSize: '18px' }}>
          {product.title}
        </Typography>
        <Typography
          sx={{ color: 'secondary.dark', fontSize: '16px', fontWeight: 'bold' }}
        >
          £{product.price}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProductCard
