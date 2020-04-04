import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Membership from "../containers/Membership"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="TTLMakerspace is for makers, DIY, and creators."
      />

      <Membership />
    </Layout>
  )
}

export default AboutPage
