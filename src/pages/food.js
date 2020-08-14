import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { gsap } from "gsap"

// import Gallery from "react-photo-gallery"
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
        }).set(".gallery-content", {
            autoAlpha: 0
        }).set(".gallery-title h1", {
            autoAlpha: 0,
            y: 20,
            skewX: 3,
        }).set(".gallery-content img", {
            autoAlpha: 0,
            y: 30,
            skewY: 3,
        }).to(".gallery-title h1", 1.1, {
            autoAlpha: 1,
            delay: 0.4,
            y: 0,
            ease: "expo.inOut",
            skewX: 0,
            stagger: { amount: 0.2 },
        }).set(".gallery-content", {
            autoAlpha: 1
        }).to(".gallery-content img", 1.0, {
            autoAlpha: 1,
            delay: 0.1,
            y: 0,
            ease: "expo.inOut",
            skewY: 0,
            stagger: { amount: 0.4 },
        }).to(".header-about, .logo", 1.6, {
            autoAlpha: 1,
            y: 0,
            ease: "expo.inOut",
            delay: -1.5,
            stagger: { amount: 0.2 },
        })
    }, 200);

  }, [])



  return (
    <main>
        <Helmet>
            <html lang="en" />
            <title>Silvija Lea Švaljek | Food photography</title>

            {/* Theme color */}
            <meta name="theme-color" content="#88a376" />
            <meta name="msapplication-navbutton-color" content="#88a376" />
            <meta name="apple-mobile-web-app-status-bar-style" content="#88a376" />
        </Helmet>

        <div className="gallery-wrapper">
            <HeaderAlt />

            <SimpleReactLightbox>
                <div className="gallery">
                    <div className="gallery-title">
                        <h1 id="food-decoration">FOOD</h1>
                    </div>

                    <div className="gallery-content">
                        <SRLWrapper options={LightboxOptions}>
                            {/* <Gallery photos={foodPhotos} onClick={e => e.preventDefault()} margin={15} data-attribute="SRL"/> */}
                            <PortraitRow images={foodPhotos[0]}/>
                            <PortraitRow images={foodPhotos[1]}/>
                            <PortraitRow images={foodPhotos[2]}/>
                            <PortraitRow images={foodPhotos[3]}/>
                            <PortraitRow images={foodPhotos[4]}/>

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
