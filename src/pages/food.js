import React, { useEffect, useRef } from "react"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"

import { foodPhotos } from "../variables/food_photos";

import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"

import HeaderAlt from "../components/headerAlt"
import Footer from "../components/footer"

import PortraitRow from "../components/portraitRow"

import "../styles/styles.scss"

//Lightbox options
const LightboxOptions = {
    settings: {
        autoplaySpeed: 0,
        disableWheelControls: true,
        disablePanzoom: true,
        lightboxTransitionSpeed: 0.3,
        lightboxTransitionTimingFunction: "easeInOut",
        slideAnimationType: "both",
        slideTransitionSpeed: 0.4,
        slideTransitionTimingFunction: "easeInOut"
    },
    buttons: {
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: false,
        showFullscreenButton: false,
        showThumbnailsButton: false
    },
    caption: {
        showCaption: false
    },
    thumbnails: {
        showThumbnails: false
    },
    progressBar: {
        showProgressBar: false
    }
};

function FoodPage() {

  const pathRef = useRef(null);

  useEffect(() => {
    //scroll window to top
    window.scrollTo(0,0);

    //gsap timeline - food page
    const foodtl = gsap.timeline();

    //delayed because gallery needs to be mounted first
    setTimeout(function() {
        foodtl.set(".header-about, .logo", {
            autoAlpha: 0,
            y: 20,
        })
        .set(".gallery-title h1", {
            autoAlpha: 0,
            y: 20,
            skewX: 3,
        }).set(".gatsby-image-wrapper", {
            visibility: "hidden",
            opacity: 0,
            scale: 1.05
        }).to("body", 0, {
            visibility: "visible"
        }).to(".gallery-title h1", 1.1, {
            autoAlpha: 1,
            delay: 0.4,
            y: 0,
            ease: "expo.inOut",
            skewX: 0,
            stagger: { amount: 0.2 },
        }).to(".gatsby-image-wrapper", 1.1, {
            autoAlpha: 1,
            delay: 0.2,
            ease: "expo.inOut",
            scale: 1,
            stagger: { amount: 0.4 },
        }).to(".header-about, .logo", 1.6, {
            autoAlpha: 1,
            y: 0,
            ease: "expo.inOut",
            delay: -1.5,
            stagger: { amount: 0.2 },
        })
    }, 200);


    //scroll indicator setup
    var path = pathRef.current;
    var pathLength = path.getTotalLength();
    path.style.transition = path.style.WebkitTransition = 'none';
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

    //subscribe to event listener
    window.addEventListener('scroll', handleScroll);

    //unsubscribe from event listener
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };


  }, [])


  //scroll indicator function
  const handleScroll = () => {
      //calculations
      var path = pathRef.current;
      var pathLength = path.getTotalLength();
      var h = document.documentElement, b = document.body, st = 'scrollTop', sh = 'scrollHeight';

      if (h[st] > 50) {
          var element = document.getElementsByClassName("progress-wrap")[0];
          if (!element.classList.contains("active-progress")) element.classList.add("active-progress");
      } else {
          var element = document.getElementsByClassName("progress-wrap")[0];
          element.classList.remove("active-progress");
      }

      var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
      var progress = pathLength - pathLength * percent;
      
      //set style
      path.style.strokeDashoffset = progress;

   }

   const scrollToTop = () => {
       window.scrollTo({top: 0, behavior: 'smooth'});
   }

  


  return (
    <main>
        <Helmet>
            <html lang="en" />
            <title>Silvija Lea ??valjek | Food photography</title>

            {/* Theme color */}
            <meta name="theme-color" content="#88a376" />
            <meta name="msapplication-navbutton-color" content="#88a376" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#88a376" />

            <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600&display=swap" rel="stylesheet"></link>

            <script src="https://kit.fontawesome.com/b018042866.js" crossorigin="anonymous"></script>
        </Helmet>

        <div className="gallery-wrapper" >
            <HeaderAlt easterEggOn={false}/>

            <div className="progress-wrap" onClick={scrollToTop}>
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path ref={pathRef} d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"/>
                </svg>
            </div>

            <SimpleReactLightbox>
                <div className="gallery">
                    <div className="gallery-title">
                        <h1 id="food-decoration">FOOD</h1>
                    </div>

                    <div className="gallery-content">
                        <SRLWrapper options={LightboxOptions}>
                            <PortraitRow images={foodPhotos[0]}/>
                            <PortraitRow images={foodPhotos[1]}/>
                            <PortraitRow images={foodPhotos[2]}/>
                            <PortraitRow images={foodPhotos[3]}/>
                            <PortraitRow images={foodPhotos[4]}/>
                            <PortraitRow images={foodPhotos[5]}/>
                            <PortraitRow images={foodPhotos[6]}/>

                        </SRLWrapper>
                    </div>
                
                </div>
            </SimpleReactLightbox>

            <Footer />
        </div>

    </main>
  )
}

export default FoodPage
