import {BsLinkedin, BsTwitter, BsInstagram} from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <h2>
        Kikapu<span style={{color: '#18D26E'}}>.</span>
      </h2>
      </div>
      
      <div className="footerDetails">
        <div className="topInfo">
          <p className='contact'>info@gmail.com</p>
          <p className='pipe'></p>
          <p>+2547 23 456 789</p>
        </div>
        
        <p style={{textAlign: 'center'}} className='copyRemove'> &copy; Copyright 2023 Kikapu. All Right Reserved.</p>
      </div>
      

      <div className="FooterSocials">
            <BsLinkedin/>
            <BsTwitter/>
            <BsInstagram/>
      </div>

      <p style={{textAlign: 'center'}} className='copyright'> &copy; Copyright 2023 Kikapu. All Right Reserved.</p>
    </div>
  )
}
