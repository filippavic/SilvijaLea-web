import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 500, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
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

      return <Img alt={props.alt} fluid={image.node.childImageSharp.fluid} style={{position: "initial"}} imgStyle={{objectPosition: props.objectPosition}}/>;
    }}
  />
);

export default Image
