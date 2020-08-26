import React from "react"


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
                        <i className="fab fa-instagram icon-footer"></i>
                    </a>
                    <a href="https://www.facebook.com/silvijaleaphotography" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook icon-footer"></i>
                    </a>
                          
                </div>
            </div>
        </div>
      </footer>


  )
  
}

export default Footer