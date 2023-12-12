import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Navbar from './components/Home/Navbar'
import Shop from './pages/Shop'

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
    fontFamily: "'Merriweather', serif"
  }
})
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
