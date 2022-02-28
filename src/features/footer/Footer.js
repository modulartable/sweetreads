import React from 'react';
import "./Footer.css"
import facebook from "../../facebook.png";
import twitter from "../../twitter.png";
import instagram from "../../instagram.png"
import youtube from "../../youtube.png"

const Footer = () => {
  return ( 
  <div className="footerContainer">

      <div className="socialsContainer">
<div><img className='socials' src={facebook} alt="Facebook"/></div>
<div><img className='socials' src={twitter} alt="Facebook"/></div>
<div><img className='socials' src={instagram} alt="Facebook"/></div>
<div><img className='socials' src={youtube} alt="Facebook"/></div>
</div>

<div className="copyright">© 2022 Sweet Reads LLC</div>
  </div>
  );
};

export { Footer };
