import React from 'react';
import "./About.css"
import crew from "../../crew.jpg"
import decorating from '../../decoratingcookies.jpg'
import librarians from '../../libraryworker.jpg'
import downtown from '../../downtown.jpg'

const About = (props) => {

  const isDesktop = props.isDesktop;

  return (
    <div className='aboutContainer'>

<div> <h3 className='heroText'>Our headquarters</h3></div>

<div><img className='aboutPhotos' src={downtown} alt='Our headquarters building and shop'/></div>

  
  <div> <h3 className='heroText' alt="The team that makes the dream work">The team that makes the dream work</h3></div>
<div><img className='headerPhoto' src={crew} alt="Our employees all together!" /></div>

<div className={isDesktop ? "summaryContainer" : "summaryContainerMobile"}>




<div style={{ padding: '15px' }}><p>Known to our loving customers as the "Sweeteners" our crew is compromised
   of book and food lovers from a variety of backgrounds that came together 
   to create a unique experience for our customers. </p>
   
   <br/>

   <p>Our team includes fully-trained bakery staff, full-time and part-time librarians, administrators, and the wonderful clerks that serve our customers daily!</p>
   
   </div>

   <div style={{padding: '15px'}}><img className='aboutPhotos' src={decorating} alt="An employee decoarting cookies" /></div>

<div><img className='aboutPhotos' src={librarians} alt="An employee stocking books" /></div>

</div>

</div>

    );
};

export { About };
