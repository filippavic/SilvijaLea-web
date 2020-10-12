import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const WeddingImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "landing_weddings.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700, quality: 89) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img alt={props.alt} fluid={data.placeholderImage.childImageSharp.fluid} style={{position: "initial"}} imgStyle={{objectPosition: props.objectPosition}}/>
}

export default WeddingImage