import { Box, IconButton, Stack, TextField } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'
const ShopSearch = () => {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete='off'
    >
      <Stack direction='row' spacing={1}>
        <TextField
          id='search'
          sx={{
            bgcolor: 'bgColor.main',
            py: 0,
            borderRadius: 0,
            '& .MuiOutlinedInput-input': {
              py: 1
            }
          }}
          placeholder='Search products...'
        />
        <IconButton
          aria-label='delete'
          type='submit'
          sx={{ bgcolor: 'primary.main', borderRadius: 2 }}
        >
          <IoIosArrowForward color='#fff' />
        </IconButton>
      </Stack>
    </Box>
  )
}

export default ShopSearch
