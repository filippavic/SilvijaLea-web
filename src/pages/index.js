import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import PortraitImage from "../components/portraitImage"
import FoodImage from "../components/foodImage"
import WeddingImage from "../components/weddingImage"

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
    }).to(".logo-handwritten", 0.8, {
      autoAlpha: 0,
      ease: "expo.inOut",
      delay: 2.5
    })
    
    if (width > 768) {
      tl.to(".overlay-bar", 1.3, {
        height: 0,
        ease: "expo.inOut",
        stagger: { amount: 0.4 },
        delay: -1.2
      })
    }
    else {
      tl.to(".overlay-bar", 1.3, {
        width: 0,
        ease: "expo.inOut",
        stagger: { amount: 0.4 },
        delay: -1.2
      })
    }
    
    tl.to(".intro-overlay", 0, {
      css: { display: "none" },
    })
    .from(".landing-image-cont img", 1.6, {
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

        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600&display=swap" rel="stylesheet"></link>
      </Helmet>

      <div>
        <Intro />
        <Header />

        <div className="landing">
          <div className="landing-top-shadow"></div>

          <div href="/portraits" onMouseEnter={() => portraitstl.play()} onMouseLeave={() => portraitstl.reverse()} className="landing-portraits-cont" role="link" tabIndex={0}>
            <AniLink paintDrip direction="left" hex="#88a376" to="/portraits" className="landing-link"></AniLink>
            
            <div className="landing-text-cont">
              <h2 id="portraits-text">PORTRAITS</h2>
            </div>

            <div className="landing-image-cont">
              <PortraitImage className="picture" alt="Portrait of a young woman in a field" objectPosition="center"/>
            </div>
          </div>

          <div href="/food" onMouseEnter={() => foodtl.play()} onMouseLeave={() => foodtl.reverse()} className="landing-food-cont" role="link" tabIndex={0}>
            <AniLink paintDrip direction="down" hex="#88a376" to="/food" className="landing-link"></AniLink>
            
            <div className="landing-text-cont">
                <h2 id="food-text">FOOD</h2>          
            </div>

            <div className="landing-image-cont">
              <FoodImage className="picture" alt="Chub mackerel paste served on a table" objectPosition="center"/>
            </div>
          </div>

          <div href="/weddings" onMouseEnter={() => weddingstl.play()} onMouseLeave={() => weddingstl.reverse()} className="landing-weddings-cont" role="link" tabIndex={0}>
            <AniLink paintDrip direction="right" hex="#88a376" to="/weddings" className="landing-link"></AniLink>
            
            <div className="landing-text-cont">
              <h2 id="weddings-text">WEDDINGS<br/>&<br/>COUPLES</h2>
            </div>

            <div className="landing-image-cont">
              <WeddingImage className="picture" alt="A married couple laughing" objectPosition="top"/>
            </div>
          </div>

        </div>
      </div>

    </main>
  )
}

export default IndexPage
