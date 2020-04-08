import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/SocialProfile"
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io"
import {
  AboutWrapper,
  AboutImage,
  AboutPageTitle,
  AboutDetails,
  SocialProfiles,
} from "./style"

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "https://www.facebook.com/TTLMakerspace-111443950515269/",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/ttlmakerspace/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/TTLMakerspace",
    tooltip: "Twitter",
  },
]

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/commisions.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1770, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  return (
    <AboutWrapper>
      <AboutPageTitle>
        <h2>Insert Covid Page Design here.</h2>
        <p>
          Can use HTML, and can also apply any styles quite easily. Simply place
          the styles in style.tsx
        </p>
        <h3>Have at it!</h3>
      </AboutPageTitle>

      <p>Images used in this page will be auto-optimized during compilation.</p>
      <p>
        Compilation optimizes ALL files and outputs everything as static
        optimized HTML. It also does everything needed to make the site a full
        Progressive Web Application - updating the manifest, file caching,
        web-workers, etc.
      </p>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>What kinds of builds can you do?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          vitae maiores sed voluptatibus, necessitatibus dolore blanditiis
          voluptatem in ratione commodi dicta ullam aut? Illum dolore ducimus
          libero molestiae, id veritatis.
        </p>
        <p>
          We have done projects like these:
          <ul>
            <li>Leatherwork - labels</li>
            <li>Display signage</li>
            <li>Trade Show Booths</li>
            <li>POS Devices</li>
            <li>Interactive Installations</li>
            <li>Custom Cabinetry</li>
            <li>Flat-pack furniture</li>
            <li>Websites, Software, Games</li>
          </ul>
        </p>
        <h2>How do I donate?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio
          repudiandae eos magnam voluptas adipisci fuga quibusdam, optio, sunt
          tenetur facere ea odio. Ullam vero numquam autem, itaque harum saepe?
        </p>
        <p>If familiar with React, you can import React components.</p>
        <p>
          The social profiles below are a react component. You can keep them or
          remove them as needed.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
        <p>
          If we want to remove the footer, we can do so by creating a simple
          layout component in the components folder.
        </p>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
