import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";


const HeaderImage = (props) => (
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
            quality: 90
            layout: FULL_WIDTH
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
          style={{position: "initial"}}
          imgStyle={{objectPosition: props.objectPosition}} />
      );
    }}
  />
);

export default HeaderImage
