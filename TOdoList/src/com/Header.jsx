import { useState } from 'react';
import Logo from './img/logo.jpg'
const Header = () => {
 const [theme,setTheme] = useState('theme')

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="my todo list logo" />
        <span></span>
      </div>
      <div className='themeSelector'>
      <div className="themeSelector">
            <span onClick={() => setTheme("light")} className={ theme === "light" ? "light activeTheme" : "light"}></span>
            <span onClick={() => setTheme("medium")} className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
            <span onClick={() => setTheme("dark")} className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
            <span onClick={() => setTheme("gradientOne")} className={ theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"}></span>
            <span onClick={() => setTheme("gradientTwo")} className={ theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"}></span>
            <span onClick={() => setTheme("gradientThree")} className={ theme === "gThree" ? "gradientThree activeTheme" : "gradientThree"}></span>
        </div>
      </div>
      
    </header>
  );
};

export default Header;
