import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const PortraitImage = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "landing_portraits.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 380, quality: 91) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return <Img alt={props.alt} fluid={data.placeholderImage.childImageSharp.fluid} style={{position: "initial"}} imgStyle={{objectPosition: props.objectPosition}}/>
}

export default PortraitImage