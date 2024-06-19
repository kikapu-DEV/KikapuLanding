import { FaBars, FaTimes } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { useRef } from "react";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  return (
    <header>
      <h2 className="logoName">Kikapuapp</h2>
      <nav ref={navRef}>
        <a hrefLang="#">Home</a>
        <a href={"#about"}>About</a>
        <a href={"#features"}>Features</a>
        <a href={"#team"}>Team</a>
        <a href={"#contact"}>Contact</a>
        <a
          className="downloadButtonSmall"
          href="https://play.google.com/store/apps/details?id=com.eldagenius.kikapustudents&hl=en-US&ah=9PoTnsKToiRY3oAU6-1IQbUEWVs"
        >
          Download <BiDownload className="downloadIcon" />{" "}
        </a>
        <button className="navBtn navCloseBtn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <div className="myDownloadButton">
        <button className="downloadButton">Join waitlist</button>
        {/* <button className="downloadButton">Download <BiDownload className="downloadIcon"/> </button> */}
      </div>

      <button className="navBtn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};
