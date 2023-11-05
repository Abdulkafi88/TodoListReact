import Logo from './img/logo.jpg'
const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="my todo list logo" />
        <span></span>
      </div>
      <div className='themeSelector'>
        <span className='light'></span>
        <span className='medium'></span>
        <span className='dark'></span>
        <span className='gradientOne'></span>
        <span className='gradientTwo'></span>
        <span className='gradientThree activeTheme'></span>
      
      </div>
    </header>
  );
};

export default Header;
