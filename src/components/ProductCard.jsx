import { Card, CardContent, CardMedia, Typography } from '@mui/material'

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ height: 140 }}>
      <CardMedia image={product.images[0]} title={product.title} />
      <CardContent>
        <Typography component={'span'}>{product.category.name}</Typography>
        <Typography>{product.title}</Typography>
        <Typography>{product.price}</Typography>
      </CardContent>
    </Card>
  )
}

export default ProductCard
