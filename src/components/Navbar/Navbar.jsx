import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { useRef, useState } from "react";
import kikapuLogo from "../../assets/kikapuLogo.png";

export const Navbar = () => {
  const navRef = useRef();
  const btnRef = useRef();
  const [navActive, setNavActive] = useState(false);

  function handleNavDisplay (){
    setNavActive(!navActive);
    navRef.current.classList.toggle("activeNav");
  }

  return (
    <header>
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
          <a hrefLang="#">Home</a>
          <a href={"#about"}>Features</a>
          {/* <a href={"#features"}>Features</a> */}
          <a href={"#team"}>Team</a>
          <a href={"#footer"}>Contact</a>
        </div>

        {/* <div className="myDownloadButtons" ref={btnRef}>
          <button className="downloadButton">Join waitlist</button>
        </div> */}
      </nav>
    </header>
  );
};
