import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";


const GalleryImage = (props) => (
  <StaticQuery
    query={graphql`{
  images: allFile {
    edges {
      node {
        relativePath
        name
        childImageSharp {
          gatsbyImageData(
            formats: [AUTO, WEBP, AVIF]
            quality: 70
            placeholder: NONE
            layout: CONSTRAINED
          )
        }
      }
    }
  }
}
`}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      if (!image) {
        return null;
      }

      return (
        <GatsbyImage
          image={image.node.childImageSharp.gatsbyImageData}
          alt={props.alt}
          style={{objectFit: "cover"}}
          backgroundColor="#D8D8D8" />
      );
    }}
  />
);

export default GalleryImage
