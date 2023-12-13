import { Box } from '@mui/material'
import logo from '../../assets/images/organic-store-logo5.svg'
import { Link } from 'react-router-dom'
const Logo = ({ sx }) => {
  return (
    <Box component={Link} to={'/'} sx={{ width: '150px', height: '70px' }}>
      <img
        src={logo}
        alt='logo'
        style={{ width: '100%', height: '100%', ...sx }}
      />
    </Box>
  )
}

export default Logo
