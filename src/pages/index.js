import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink"

//import Image from "../components/image"
//import SEO from "../components/seo"
import Intro from "../components/intro"
import Header from "../components/header"

import "../styles/styles.scss"

function IndexPage() {

  //gsap timelines - details overlay
  const [portraitstl] = useState(gsap.timeline({paused: true}));
  const [foodtl] = useState(gsap.timeline({paused: true}));
  const [weddingstl] = useState(gsap.timeline({paused: true}));


  useEffect(() => {
    //scroll window to top
    window.scrollTo(0,0);

    gsap.to('body', 0, { css: { visibility: "visible" } });

    //gsap timeline - intro & landing
    const tl = gsap.timeline();

    var width = window.innerWidth;

    tl.set(".header-about, .logo", {
      autoAlpha: 0,
      y: 10,
    })
    
    if (width > 768) {
      tl.to(".overlay-bar", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: { amount: 0.4 },
      })
    }
    else {
      tl.to(".overlay-bar", 1.6, {
        width: 0,
        ease: "expo.inOut",
        stagger: { amount: 0.4 },
      })
    }
    
    tl.to(".intro-overlay", 0, {
      css: { display: "none" },
    }).from(".landing-image-cont img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: { amount: 0.4 },
    }).to(".header-about, .logo", 1.6, {
      autoAlpha: 1,
      y: 0,
      ease: "expo.inOut",
      delay: -1,
      stagger: { amount: 0.2 },
    })

  }, [])


  //gsap animation - portraits overlay
  useEffect(() => {       
    portraitstl.from("#portraits-text", {
      autoAlpha: 0,
      y: 20,
    }).to("#portraits-text", 0.6, {
      autoAlpha: 1,
      y: 0,
      ease: "expo.inOut",
      stagger: { amount: 0.7 },
    })

  }, [portraitstl]);


  //gsap animation - food overlay
  useEffect(() => {      
    foodtl.from("#food-text", {
      autoAlpha: 0,
      y: 20,
      skewY: 3,
    }).to("#food-text", 0.6, {
      autoAlpha: 1,
      y: 0,
      skewY: 0,
      ease: "expo.inOut",
      stagger: { amount: 0.7 },
    })

  }, [foodtl]);


  //gsap animation - weddings overlay
  useEffect(() => {       
    weddingstl.from("#weddings-text", {
      autoAlpha: 0,
      y: 20,
      skewY: -3,
    }).to("#weddings-text", 0.6, {
      autoAlpha: 1,
      y: 0,
      skewY: 0,
      ease: "expo.inOut",
      stagger: { amount: 0.7 },
    })

  }, [weddingstl]);


  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Silvija Lea Švaljek</title>

        <meta name="description" content="Portrait photography (indoor & outdoor), food photography, wedding & couples photography." />
        <meta name="copyright" content="apeiron" />

        {/* Theme color */}
        <meta name="theme-color" content="#88a376" />
        <meta name="msapplication-navbutton-color" content="#88a376" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#88a376" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://silvijalea.netlify.app/" />
        <meta property="og:title" content="Silvija Lea Švaljek" />
        <meta property="og:description" content="Portrait photography (indoor & outdoor), food photography, wedding & couples photography." />
        <meta property="og:image" content={require('../images/web_preview.jpg')} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://silvijalea.netlify.app/" />
        <meta property="twitter:title" content="Silvija Lea Švaljek" />
        <meta property="twitter:description" content="Portrait photography (indoor & outdoor), food photography, wedding & couples photography." />
        <meta property="twitter:image" content={require('../images/web_preview.jpg')} />
      </Helmet>

      <div>
        <Intro />
        <Header />

        <div className="landing">
          <div className="landing-top-shadow"></div>

          <div onMouseEnter={() => portraitstl.play()} onMouseLeave={() => portraitstl.reverse()} className="landing-portraits-cont" role="link" tabIndex={0}>
            <div className="landing-text-cont">
              <h2 id="portraits-text">PORTRAITS</h2>
            </div>

            <div className="landing-image-cont">
              <img src={require('../images/landing_portraits.jpg')} alt="Portrait of a young woman in a field" />
            </div>
          </div>

          
          <div href="/food" onMouseEnter={() => foodtl.play()} onMouseLeave={() => foodtl.reverse()} className="landing-food-cont" role="link" tabIndex={0}>
            <AniLink paintDrip direction="down" hex="#88a376" to="food" className="landing-link"></AniLink>
            
            <div className="landing-text-cont">
                <h2 id="food-text">FOOD</h2>          
            </div>

            <div className="landing-image-cont">
              <img src={require('../images/landing_food.jpg')} alt="" />
            </div>
          </div>

          <div onMouseEnter={() => weddingstl.play()} onMouseLeave={() => weddingstl.reverse()} className="landing-weddings-cont" role="link" tabIndex={0}>
            <div className="landing-text-cont">
              <h2 id="weddings-text">WEDDINGS<br/>&<br/>COUPLES</h2>
            </div>

            <div className="landing-image-cont">
              <img src={require('../images/landing_weddings.jpg')} alt="A married couple laughing" />
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}

export default IndexPage
