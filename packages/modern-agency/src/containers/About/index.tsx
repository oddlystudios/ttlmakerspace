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
    url: "https://www.facebook.com/redqinc/",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "https://www.instagram.com/redqinc/",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoTwitter />,
    url: "https://twitter.com/redqinc",
    tooltip: "Twitter",
  },
  {
    icon: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/company/redqinc/",
    tooltip: "Linked In",
  },
]

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/about.jpg/" }) {
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
        <h2>About TTLMakerspace</h2>
        <p>
          The TTLMakerspace is a well-equipped community center, where makers of
          all kinds come to work on projects, share information, participate in
          events, and learn valuable skills.
        </p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>How did this place begin?</h2>
        <p>
          TTLMakerspace is a project of the IRBE, a charitable organization with
          the mission to provide access to shared resources for all. The
          makerspace provides access to skills, training, and equipment to
          people of all ages and interests.
        </p>
        <p>
          We are located at 192 Spadina Ave, Toronto, in the Center for Social
          Innovation (CSI). As an active member in CSI, the TTLMakerspace
          participates in multiple events and initiatives with the organization.
          Many of our members use the facility to produce prototypes or gain
          skills that help them in their mission to better the planet.
        </p>
        <h2>How are you funded?</h2>
        <p>
          TTLMakerspace is entirely community-funded. About a third of our
          expenses are covered by our awesome maker-members who pay a monthly
          fee to help support the space. Another third comes from offering paid
          courses and training. And the last third comes from working with some
          partners that run initiative in the space, like the Alzheimer's
          Society, and StopGap.
        </p>
        <p>
          That's right. We really are completely community funded - no subsidies
          of any kind. The TTLMakerspace is by makers, for makers.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
