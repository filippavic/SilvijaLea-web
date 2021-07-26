import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const GalleryLandscapeImage = props => (
  <StaticQuery
    query={graphql`
      {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(
                  formats: [AUTO, WEBP, AVIF]
                  quality: 62
                  placeholder: NONE
                  layout: CONSTRAINED
                  width: 600
                )
              }
              publicURL
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return (
        <a href={image.node.publicURL}>
          <GatsbyImage
            image={image.node.childImageSharp.gatsbyImageData}
            alt={props.alt}
            style={{ objectFit: "cover" }}
            backgroundColor="#D8D8D8"
          />
        </a>
      )
    }}
  />
)

export default GalleryLandscapeImage
