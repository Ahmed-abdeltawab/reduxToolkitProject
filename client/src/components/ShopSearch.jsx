import { Box, IconButton, Stack, TextField } from '@mui/material'
import { IoIosArrowForward } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../store/productSlice'

const ShopSearch = () => {
  // const [value, setValue] = useState()

  const handleSubmit = e => {
    e.preventDefault()
  }
  const dispatch = useDispatch()
  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete='off'
    >
      <Stack direction='row' spacing={1}>
        <TextField
          id='search'
          onChange={e => {
            dispatch(setSearchQuery(e.target.value))
          }}
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
