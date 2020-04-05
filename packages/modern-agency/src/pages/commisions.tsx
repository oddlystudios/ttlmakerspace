import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Partners from "../containers/Commisions"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Commisions"
        description="Commision a maker at TTLMakerspace to custom-build your unique project."
      />

      <Partners />
    </Layout>
  )
}

export default AboutPage
