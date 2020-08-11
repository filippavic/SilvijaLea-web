import React from "react"

import GalleryImage from "./galleryImage"

function LandscapeRow (props) {

  return(
    <div className="landscape-row">
        {props.images.map( image => (
            <div className="landscape-photo" key={image}>
                <GalleryImage filename={image} alt="" objectPosition="center"/>
            </div>
        ))}
    </div>

  )
  
}

export default LandscapeRow