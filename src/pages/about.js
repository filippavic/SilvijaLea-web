import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import HeaderAlt from "../components/headerAlt"

import "../styles/styles.scss"

function AboutPage() {


  useEffect(() => {
    //scroll window to top
    window.scrollTo(0,0);

    //gsap timeline - about page
    const abouttl = gsap.timeline();

    abouttl.set(".header-about, .logo", {
      autoAlpha: 0,
      y: 20,
    }).set(".about-title h1", {
        autoAlpha: 0,
        y: 20,
        skewX: 3,
    }).set(".about-content-left img", {
        autoAlpha: 0,
        y: 20,
        skewY: 3,
    }).set(".about-desc p, #link1, #link2, #link3, #link4", {
        autoAlpha: 0,
        y: 20,
        skewY: -3,
    }).set("hr", {
        autoAlpha: 0,
        css: { width: 0 }
    }).to(".about-title h1", 1.2, {
        autoAlpha: 1,
        delay: 0.4,
        y: 0,
        ease: "expo.inOut",
        skewX: 0,
        stagger: { amount: 0.2 },
    }).to(".about-content-left img", 1.6, {
        autoAlpha: 1,
        delay: -0.8,
        y: 0,
        ease: "expo.inOut",
        skewY: 0,
    }).to(".about-desc p, #link1, #link2, #link3, #link4", 1.6, {
        autoAlpha: 1,
        y: 0,
        ease: "expo.inOut",
        skewY: 0,
        delay: -1.6,
        stagger: { amount: 0.3 },
    }).to("hr", 1.2, {
        autoAlpha: 0,
        delay: -1.2,
        css: { width: "60%" },
        ease: "expo.inOut",
    }).to(".header-about, .logo", 1.6, {
        autoAlpha: 1,
        y: 0,
        ease: "expo.inOut",
        delay: -1.5,
        stagger: { amount: 0.2 },
    })

  }, [])



  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Silvija Lea Švaljek | About me</title>
      </Helmet>

      <div>
        <HeaderAlt />

        <div className="about">
          <div className="about-title">
              <h1 id="about-decoration">ABOUT ME</h1>
          </div>

          <div className="about-content">
              <div className="about-content-left">
                <img src={require('../images/silvija_polaroid.jpg')} alt="A portrait of Silvija on a bridge" draggable="false"/>
              </div>

              <div className="about-content-right">
                <div className="about-desc">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo ligula, accumsan at felis ut, fermentum hendrerit tellus. Praesent hendrerit neque non turpis mattis molestie. Nam venenatis lobortis urna, in eleifend arcu ultricies quis. Donec convallis eros eget ante hendrerit, non posuere odio malesuada. Nulla efficitur lorem eu eros sagittis ornare.</p>
                </div>

                <hr className="solid"></hr>

                <div className="about-links">
                    <span id="link1">
                        <FontAwesomeIcon icon={faPhone} className="icon-class"/>
                        <a href="tel:+385919128683" target="_blank" rel="noopener noreferrer">+385 91 912 8683</a>
                    </span>
                    <span id="link2">
                        <FontAwesomeIcon icon={faEnvelope} className="icon-class"/>
                        <a href="mailto:info@silvijalea.art" target="_blank" rel="noopener noreferrer">info@silvijalea.art</a>
                    </span>
                    <span id="link3">
                        <FontAwesomeIcon icon={faInstagram} className="icon-class"/>
                        <a href="https://www.instagram.com/silvija.lea" target="_blank" rel="noopener noreferrer">/silvija.lea</a>
                    </span>
                    <span id="link4">
                        <FontAwesomeIcon icon={faFacebookF} className="icon-class"/>
                        <a href="https://www.facebook.com/silvijaleaphotography" target="_blank" rel="noopener noreferrer">/silvijaleaphotography</a>
                    </span>
                </div>
              </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default AboutPage
