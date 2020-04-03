import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Partners from "../containers/Partners"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="TTL Makerspace is a community learning hub, well-equipped for makers of all kinds."
      />

      <Partners />
    </Layout>
  )
}

export default AboutPage
