import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Home/Header'
import Products from './pages/Products'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#5f4ecb'
    },
    secondary: {
      main: '#4d3bc6'
    },
    darkColor: {
      dark: '#25272d',
      main: '#565a61',
      light: '#f2f5f7'
    }
  }
})
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
