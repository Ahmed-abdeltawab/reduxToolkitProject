import logo from '../../assets/Medicine.png'
const Logo = ({ sx }) => {
  return (
    <img
      src={logo}
      alt='logo'
      style={{ width: '90px', height: '30px', ...sx }}
    />
  )
}

export default Logo
