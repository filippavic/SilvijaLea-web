import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import HeaderImage from "./headerImage"

function HeaderAlt() {

  return(
  
      <header>
        <div className="container">
          <div className="inner-header">
            <AniLink paintDrip direction="left" hex="#88a376" to="/">
              <div className="logo" aria-label="home">
                <HeaderImage filename="silvija_signature_color.png" alt="Silvija Lea" objectPosition="center"/>
              </div>
            </AniLink>

            <div className="header-about header-alt">
              <AniLink paintDrip direction="right" hex="#88a376" to="/about">
                {/* <a role="button" tabIndex={0} aria-label="about" className="contact-animate" id="contact-button">ABOUT ME</a> */}
                ABOUT ME
              </AniLink>
            </div>
          </div>
        </div>
      </header>


  )
  
}

export default HeaderAlt