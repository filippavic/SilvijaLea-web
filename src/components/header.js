import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import HeaderImage from "./headerImage"

function Header() {

  return(
  
      <header>
        <div className="container">
          <div className="inner-header">
            <div className="logo" aria-label="home">
              <HeaderImage filename="silvija_signature.png" alt="Silvija Lea" objectPosition="center"/>
            </div>

            <div className="header-about">
              <AniLink paintDrip direction="right" hex="#88a376" to="about">
                {/* <a role="button" tabIndex={0} aria-label="about" className="contact-animate" id="contact-button">ABOUT ME</a> */}
                ABOUT ME
              </AniLink>
            </div>
          </div>
        </div>
      </header>


  )
  
}

export default Header