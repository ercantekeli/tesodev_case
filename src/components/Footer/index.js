import React from 'react'
import FooterLogo from "../../assets/footer-image.png"

const Footer = () => {
  return (
    <div>
      {/* img */}
        <div>
          <img src={FooterLogo} />
        </div>
      {/* img */}
      {/* adress */}
      <div>
       
      </div>
      {/* adress */}
      {/* Google Maps  */}
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0!5e0!3m2!1sen!2str!4v1701806106503!5m2!1sen!2str" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
       {/* Google Maps  */}
    </div>
  )
}

export default Footer