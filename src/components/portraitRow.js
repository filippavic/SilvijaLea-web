import React from "react"

import GalleryImage from "./galleryImage"

function PortraitRow (props) {

  return(
    <div className="portrait-row">
        {props.images.map( image => (
            <div className="portrait-photo" key={image}>
                <GalleryImage filename={image} alt="" objectPosition="center"/>
            </div>
        ))}

        {/* <div className="portrait-photo">
            <Image filename={props.image1} alt="" objectPosition="center"/>
        </div>

        <div className="portrait-photo">
            <Image filename="food/101366067_276344850401915_6688277732585942791_n.jpg" alt="" objectPosition="center"/>
        </div>

        <div className="portrait-photo">
            <Image filename="food/101366067_276344850401915_6688277732585942791_n.jpg" alt="" objectPosition="center"/>
        </div>

        <div className="portrait-photo">
            <Image filename="food/101366067_276344850401915_6688277732585942791_n.jpg" alt="" objectPosition="center"/>
        </div> */}
    </div>

  )
  
}

export default PortraitRow