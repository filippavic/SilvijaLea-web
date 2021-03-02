import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"

import HeaderAlt from "../components/headerAlt"

import polaroidImageEasterEgg from '../images/silvija_polaroid_easter_egg.jpg'
import polaroidImage from '../images/silvija_polaroid.jpg'

import "../styles/styles.scss"

function AboutPage() {

  //easter egg
  const [easterEggOn, setEasterEggOn] = useState(false);
  var counter = 0;

  //calculate age
  var ageDifMs = Date.now() - (new Date(1998, 10, 17)).getTime();
  var ageDate = new Date(ageDifMs);
  var age = Math.abs(ageDate.getUTCFullYear() - 1970);


  useEffect(() => {
    //scroll window to top
    window.scrollTo(0,0);

    //gsap timeline - about page
    const abouttl = gsap.timeline();

    abouttl.set(".header-about, .logo", {
        y: 20,
    }).set(".about-title h1", {
        y: 20,
        skewX: 3,
    }).set(".about-content-left img", {
        y: 20,
        skewY: 3,
    }).set(".about-desc p, #link1, #link2, #link3", {
        y: 20,
        skewY: -3,
    }).set("hr", {
        width: '0%'
    }).to("body", 0, {
      visibility: "visible"
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
    }).to(".about-desc p, #link1, #link2, #link3", 1.6, {
        autoAlpha: 1,
        y: 0,
        ease: "expo.inOut",
        skewY: 0,
        delay: -1.6,
        stagger: { amount: 0.3 },
    }).to("hr", 1.2, {
        autoAlpha: 1,
        delay: -1.2,
        width: '60%',
        ease: "expo.inOut",
    }).to(".header-about, .logo", 1.6, {
        autoAlpha: 1,
        y: 0,
        ease: "expo.inOut",
        delay: -1.5,
        stagger: { amount: 0.2 },
    })

  }, [])

  const showEasterEgg = () => {
    if (counter === 2 && !easterEggOn) {
      setEasterEggOn(true);
      counter = 0;
    }
    else if (counter === 2 && easterEggOn) {
      setEasterEggOn(false);
      counter = 0;
    }
    else {
      counter += 1;
    }
  }




  return (
    <main>
      <Helmet>
        <html lang="en" />
        <title>Silvija Lea Švaljek | About me</title>

        {/* Theme color */}
        <meta name="theme-color" content="#88a376" />
        <meta name="msapplication-navbutton-color" content="#88a376" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#88a376" />

        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600&display=swap" rel="stylesheet"></link>

        <script src="https://kit.fontawesome.com/b018042866.js" crossorigin="anonymous"></script>
      </Helmet>

      <div>
        <HeaderAlt easterEggOn={easterEggOn}/>

        <div className={"about" + (easterEggOn ? " easter-egg" : "")}>
          <div className={"about-title" + (easterEggOn ? " easter-egg" : "")}>
              <h1 id="about-decoration" onClick={() => showEasterEgg()}>ABOUT ME</h1>
          </div>

          <div className="about-content">
              <div className="about-content-left">
                {easterEggOn ? (
                  <img src={polaroidImageEasterEgg} alt="A portrait of Silvija on a bridge" draggable="false"/>
                ) : (
                  <img src={polaroidImage} alt="A portrait of Silvija on a bridge" draggable="false"/>
                )}
              </div>

              <div className="about-content-right">
                <div className={"about-desc" + (easterEggOn ? " easter-egg" : "")}>
                <p>My name is Silvija Lea and I'm a {age}-year-old hobbyist photographer based in Krapina. I love taking pictures of people and food. I hope you enjoy my work - you can also check it out on my social media. <br /><br />I also like beer.</p>
                </div>

                <hr className="solid"></hr>

                <div className={"about-links" + (easterEggOn ? " easter-egg" : "")}>
                    <span id="link1">
                        <i className="fab fa-whatsapp icon-class"></i>
                        <a href="tel:+385919128683" target="_blank" rel="noopener noreferrer">+385 91 912 8683</a>
                    </span>
                    <span id="link2">
                        <i className="fab fa-instagram icon-class"></i>
                        <a href="https://www.instagram.com/silvija.lea" target="_blank" rel="noopener noreferrer">/silvija.lea</a>
                    </span>
                    <span id="link3">
                        <i className="fab fa-facebook icon-class"></i>
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
