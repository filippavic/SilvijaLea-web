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
    </div>

  )
  
}

export default PortraitRow