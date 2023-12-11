import React from "react";
import FooterLogo from "../../assets/images/footer-image.png";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="main-footer">
      <div>
        <img src={FooterLogo} />
      </div>

      <div className="adress">
        <p className="communication">İletişim</p>
        <p className="adress-desc">
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </p>
        <p className="adress-mail">Email: bilgi@tesodev.com</p>
      </div>

      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb7abf29ba35%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0!5e0!3m2!1sen!2str!4v1701806106503!5m2!1sen!2str"
          width="467"
          height="222"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
