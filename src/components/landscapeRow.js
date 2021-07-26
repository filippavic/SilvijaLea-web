import React from "react"

import GalleryLandscapeImage from "./galleryLandscapeImage"

function LandscapeRow(props) {
  return (
    <div className="landscape-row">
      {props.images.map(image => (
        <div className="landscape-photo" key={image}>
          <GalleryLandscapeImage
            filename={image}
            alt=""
            objectPosition="center"
          />
        </div>
      ))}
    </div>
  )
}

export default LandscapeRow
