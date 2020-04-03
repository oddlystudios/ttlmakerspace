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
        description="StoryHub is a beautiful Gatsby Blog theme designed to showcase your work in style. Perfect for designers, artists, photographers and developers to use for their portfolio website."
      />

      <Membership />
    </Layout>
  )
}

export default AboutPage
