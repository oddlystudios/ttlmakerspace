import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SocialProfile from "components/SocialProfile/SocialProfile"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io"
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
        <h2>Commision a Build at TTLMakerspace</h2>
        <p>
          You can access our network of skilled makers for your custom build.
          The TTLMakerspace can put you in touch with a skilled maker and help
          plan and create your next project. Our makers have vast experience and
          come from fields like industrial design, engineering, cabinet-making,
          electronics, and programming.
        </p>
        <h3>Interested in Commisioning a Build?</h3>
        <p>Email to "commisions" at "ttlmakerspace - dot - com"</p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>What kinds of builds can you do?</h2>
        <p>
          TTLMakers have been commisioned to create a deliver a wide variety of
          projects. From signage, to trade show displays, cabinetry to connected
          IOT devices. With the wide range of equipment, and diverse skill set
          available at TTLMakerspace we can accomodate a wide variety of
          requests.
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
        <h2>How do I commision a buid?</h2>
        <p>
          It starts by emailing "commisions" at "ttlmakerspace - dot - com" with
          a brief description of your project. We'll get back to you and help
          work out any details your maker may need to estimate time and expense
          for the job.
        </p>
        <p>
          If all is well and you want to proceed, we'll set you up with an
          online account you can use to see regular progress for your job. At
          the start of the job you'll be invoiced for 20% of the cost of the
          project, as well as any up-front material costs, and work begins.
          TTLMakerspace will help monitor the progress on your job, check in
          with your makers, and provide you with detailed information, photos,
          and notes about your project.
        </p>
        <p>
          When your project is complete, we can help arrange pickup or delivery,
          or even installation if necessary - cost of this can be included in
          your estimate. You'll be invoiced for the remainder of your bill at
          delivery.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
