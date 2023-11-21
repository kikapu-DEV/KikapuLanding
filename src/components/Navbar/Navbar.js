import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload} from "react-icons/bi";
import { useRef } from "react";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  return (
    <header>
      <h2>
        Kikapu<span style={{color: '#18D26E'}}>.</span>
      </h2>
      <nav ref={navRef}>
        <Link to={"#"}>Home</Link>
        <Link to={"#"}>About</Link>
        <Link to={"#"}>Features</Link>
        <Link to={"#"}>Team</Link>
        <Link to={"#"}>Contact</Link>
        <button className="downloadButtonSmall">Download <BiDownload className="downloadIcon"/> </button>
        <button className="navBtn navCloseBtn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="myDownloadButton">
        <button className="downloadButton">Download <BiDownload className="downloadIcon"/> </button>
      </div>
      
      <button className="navBtn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
