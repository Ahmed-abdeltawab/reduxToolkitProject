import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Logo from '../Global/Logo'
import { Link, Stack } from '@mui/material'
import Cart from '../Cart'
import { NavLink } from 'react-router-dom'
const pages = ['Home', 'Shop', 'About', 'Contact']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Navbar () {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      position='static'
      sx={{ bgcolor: 'transparent', boxShadow: 'none' }}
    >
      <Toolbar
        disableGutters
        variant='regular'
        sx={{
          justifyContent: 'space-between',
          display: 'flex',
          alignItems: 'center',
          padding: '15px'
        }}
      >
        {/* lg logo */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
          <Logo />
        </Box>
        {/* sidebar */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='default'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          >
            {pages.map(page => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign='center' sx={{ color: 'red' }}>
                  {page}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* lg navbar */}

        <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
          <Logo />
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {pages.map(page => (
            <Link
              component={NavLink}
              to={`/${page.toLowerCase()}`}
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                fontSize: 18,
                my: 2,
                display: 'block',
                color: 'grayColor.main',
                textDecoration: 'none',
                transition: 'all 0.3s',
                '&:hover': {
                  color: 'primary.light'
                }
              }}
            >
              {page}
            </Link>
          ))}
        </Box>

        <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <Typography sx={{ color: 'primary.light' }}>40$</Typography>
          <Cart />
          <Tooltip title='Open settings'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map(setting => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign='center'>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
