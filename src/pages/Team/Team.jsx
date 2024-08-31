import bruce from "../../assets/profiles/bruce.png";
import sande from "../../assets/profiles/sande.png";
import elie from "../../assets/profiles/elie.png";
import { images } from "../../constants";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import AOS from "aos";
import { useEffect } from "react";

export const Team = () => {
  useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

  const teamInfo = [
    {
      id: "1",
      image: bruce,
      name: "Bruce Matui",
      role: "Founder",
      linkedin: "link",
      twitter: "link",
    },
    {
      id: "2",
      image: sande,
      name: "Peter Sande",
      role: "Project Manager",
      linkedin: "link",
      twitter: "link",
    },
    {
      id: "3",
      image: elie,
      name: "Elie Muluke",
      role: "Backend Engineer",
      linkedin: "link",
      twitter: "link",
    },
  ];
  return (
    <article className="teamArticle">
      <div className="teamBg">
        <img src={images.linePattern} alt="line" />
      </div>
      <div className="teamContainer" id="team">
        <div className='teamHeading'>
          <span style={{ color: "#DCE7E4" }}>Meet</span> The Team
        </div>

        <p className="teamDesc">
          At the heart of our success, there's a dedicated team that makes it all
          possible. Get to know the talented individuals who drive our vision,
          expertise, and passion. We're a diverse group with a common goal.
        </p>

        <div className="teamList">
          {teamInfo.map((list, id) => {
            return (
              <div className="personCard" key={id} >
                 {/* <div className="personImg">
                   <img src={list.image} alt="person" />
                 </div> */}

                <div className="personContent">
                  <div className="person-name">{list.name}</div>
                  <div className="person-role">{list.role}</div>
                  <div className="socials">
                    <BsLinkedin title="linkedin" className="social-item" />
                    <BsTwitter title="twitter" className="social-item" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
