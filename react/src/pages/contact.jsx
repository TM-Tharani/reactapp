import React from 'react';
import insta from '../assets/inst.webp';
import twitter from '../assets/tw.webp';
import wtsp from '../assets/wp.webp';
function Contact({ title }) {
  return (
    <main>
      <div className="transparent-box">
      <h2>{title}</h2>
      <p>Contact Us<br></br></p>
      Email:info@wanderly.com<br></br>
      Phone:555 444 3332<br></br>
      <h3>Follow Us:</h3>
            <div class="logo">
                <a href="https://www.instagram.com/">
                    <img src={insta} alt="Instagram" width="37" />
                </a>
                <a href="https://www.twitter.com">
                    <img src={twitter} alt="Twitter" width="37" />
                </a>
                <a href="https://www.whatsapp.com">
                    <img src={wtsp} alt="Whatsapp" width="37" />
                </a> 
            </div>
    </div>
    </main>
  );
}

export default Contact;