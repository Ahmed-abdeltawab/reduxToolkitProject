import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Navbar from './components/Home/Navbar'
import Shop from './pages/Shop'
import { Box } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a9739',
      light: '#8bc34a'
    },
    secondary: {
      main: '#001524',
      dark: '#101218',
      light: '#150e1f'
    },
    bgColor: {
      main: '#fff',
      light: '#f8f6f3'
    },
    grayColor: {
      main: '#333333'
    }
  },
  typography: {
    fontFamily: "'Merriweather', serif", // Main text font
    h1: {
      fontFamily: "'Merriweather Sans', sans-serif" // Heading 1 font
    },
    h2: {
      fontFamily: "'Merriweather Sans', sans-serif" // Heading 2 font
    }
  }
})
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Box bgcolor={'bgColor.light'}>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App
