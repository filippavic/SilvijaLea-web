import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import signatureImage from '../images/silvija_signature_color.png'
import signatureImageEasterEgg from '../images/silvija_signature_easter_egg.png'

function HeaderAlt(props) {

  return(
  
      <header>
        <div className="container">
          <div className="inner-header">
            <AniLink paintDrip direction="left" hex="#88a376" to="/">
              <div className="logo" aria-label="home">
                {props.easterEggOn ? (
                  <img src={signatureImageEasterEgg} alt="Silvija Lea" draggable="false"/>
                ) : (
                  <img src={signatureImage} alt="Silvija Lea" draggable="false"/>
                )}
              </div>
            </AniLink>

            <div className={"header-about header-alt" + (props.easterEggOn ? " easter-egg" : "")}>
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