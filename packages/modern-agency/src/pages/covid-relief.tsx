import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../containers/CovidRelief"

type AboutPageProps = {}

const AboutPage: React.FunctionComponent<AboutPageProps> = props => {
  return (
    <Layout>
      <SEO
        title="Covid relief page"
        description="A page to be branded with covid relief information"
      />

      <About />
    </Layout>
  )
}

export default AboutPage
