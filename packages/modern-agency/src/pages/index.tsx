import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layoutCovid"
import PersonalBlog from "../containers/CovidRelief"
import SEO from "../components/seo"

const PersonalBlogPage = (props: any) => {
  const { data } = props

  return (
    <Layout>
      <SEO
        title="TTLMakerspace Covid Response"
        description={data.site.siteMetadata.description}
      />
      <PersonalBlog />
    </Layout>
  )
}

export default PersonalBlogPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
