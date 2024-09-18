import { FaBars, FaTimes } from "react-icons/fa";
import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { useRef, useState } from "react";
import kikapuLogo from "../../assets/kikapuLogo.png";

export const Navbar = () => {
  const navRef = useRef();
  const headerRef = useRef();
  const [navActive, setNavActive] = useState(false);

  function handleNavDisplay (){
    setNavActive(!navActive);
    navRef.current.classList.toggle("activeNav");
    headerRef.current.classList.toggle("activeHeader");
  }

  function closeHeader(){
    setNavActive(!navActive);
    setNavActive(false);
    headerRef.current.classList.toggle("activeHeader");
  }

  return (
    <header ref={headerRef}>
      <div className="headLogo">
        <div className="logo">
          <div className="logoImage">
            <img src={kikapuLogo} alt="kikapuLogo" />
          </div>
          <h2 className="logoName">Kikapuapp</h2>
        </div>

        <div className="menu">
          {!navActive ? (
            <button className="navBtn" onClick={handleNavDisplay}>
              <FaBars />
            </button>
          ) : (
            <button className="navBtn navCloseBtn" onClick={handleNavDisplay}>
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      <nav ref={navRef}>
        <div className="bookmarks">
          <a href="#homeCont" onClick={closeHeader}>Home</a>
          <a href={"#checkApp"} onClick={closeHeader}>Features</a>
          <a href={"#about"} onClick={closeHeader}>Why us?</a>
          
          <div className='headerSocials'>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="f_link" />
            </a>
            <a href="https://x.com/Kikapuapp" target="_blank" rel="noopener noreferrer">
              <BsTwitter className="f_link" />
            </a>
            <a href="https://www.instagram.com/kikapufoods/" target="_blank" rel="noopener noreferrer">
              <BsInstagram className="f_link" />
            </a>
          </div>
          {/* <a href={"#footer"} onClick={closeHeader}>Contact</a> */}
        </div>
      </nav>
    </header>
  );
};
