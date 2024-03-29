import diana from '../../assets/profiles/diana.png'
import bruce from '../../assets/profiles/bruce.png'
import sande from '../../assets/profiles/sande.png'
import elie from '../../assets/profiles/elie.png'
import {BsLinkedin, BsTwitter} from 'react-icons/bs'

export const Team = () => {
    const teamInfo = [
        {
            image: bruce,
            name: 'Bruce Matui',
            role: 'Founder',
            linkedin: 'link',
            twitter: 'link'
        },
        {
            image: sande,
            name: 'Peter Sande',
            role: 'Project Manager',
            linkedin: 'link',
            twitter: 'link'
        },
        {
            image: diana,
            name: 'Diana Nyamai',
            role: 'Frontend Engineer',
            linkedin: 'link',
            twitter: 'link'
        },
        {
            image: elie,
            name: 'Elie Muluke',
            role: 'Backend Engineer',
            linkedin: 'link',
            twitter: 'link'
        }
    ]
  return (
    <div className="teamContainer">
      <h2>Meet the <span style={{color: '#18D26E'}}>team</span> 
      </h2>
      <p style={{textAlign: 'center'}}>At the heart of our success, there's a dedicated team that makes it all possible. Get to know the talented individuals who drive our vision, expertise, and passion. We're a diverse group with a common goal</p>

      <div className="teamList">
        {
            teamInfo.map((list, index)=>{
                return(
                    <div className='personCard'>
                        <div className="personImg">
                            <img src={list.image} alt="person" />
                        </div>
                        
                        <div className="personContent">
                            <p style={{fontSize: '24px'}}><b>{list.name}</b></p>
                        <p>{list.role}</p>
                        <div className="socials">
                            <BsLinkedin title="linkedin"/>
                            <BsTwitter title="twitter"/>
                        </div>
                        </div>
                        
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

