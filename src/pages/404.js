import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "../styles/layout.css"
import "../styles/styles.scss"

function NotFoundPage() {

  useEffect(() => {
    //scroll window to top
    window.scrollTo(0,0);

    gsap.to('body', 0, { css: { visibility: "visible" } });

  }, [])

  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Silvija Lea Švaljek | Not found</title>

        {/* Theme color */}
        <meta name="theme-color" content="#88a376" />
        <meta name="msapplication-navbutton-color" content="#88a376" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#88a376" />

        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600&display=swap" rel="stylesheet"></link>
      </Helmet>

      <div className="notfound-cont">

        <div className="notfound-top">
          <h1>404</h1>
          <h3>No photos here :(</h3>
        </div>

        <div className="notfound-bottom">
          <AniLink paintDrip direction="down" hex="#88a376" to="/">
              RETURN HOME
          </AniLink>
        </div>
      </div>

    </main>
  )
}

export default NotFoundPage
