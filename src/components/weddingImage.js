import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";


const WeddingImage = (props) => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "landing_weddings.jpg"}) {
    childImageSharp {
      gatsbyImageData(
        formats: [AUTO, WEBP, AVIF]
        width: 700
        quality: 89
        layout: CONSTRAINED
        placeholder: BLURRED
      )
    }
  }
}
`)

  return (
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      alt={props.alt}
      style={{position: "initial"}}
      imgStyle={{objectPosition: props.objectPosition}} />
  );
}

export default WeddingImage