import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {

  return(
  
      <footer>
        <div className="footer-container">
            <hr className="footer-line"></hr>

            <div className="inner-footer">
                <div className="footer-copyright">
                    <a href="https://apeiron.media" target="_blank" rel="noopener noreferrer">
                        Made with <span className="heart-icon">&#9829;</span> by apeiron
                    </a>     
                </div>

                <div className="footer-links">
                    <a href="https://www.instagram.com/silvija.lea" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="icon-footer"/>
                    </a>
                    <a href="https://www.facebook.com/silvijaleaphotography" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} className="icon-footer"/>
                    </a>
                          
                </div>
            </div>
        </div>
      </footer>


  )
  
}

export default Footer