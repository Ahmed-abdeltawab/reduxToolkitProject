/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material'
import ProductCard from './ProductCard'

const Products = ({ data }) => {
  return (
    <>
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
    </>
  )
}

export default Products
