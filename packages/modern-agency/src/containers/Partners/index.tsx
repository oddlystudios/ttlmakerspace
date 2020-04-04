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
      avatar: file(absolutePath: { regex: "/partners.jpg/" }) {
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
        <h2>Partnerships at TTLMakerspace</h2>
        <p>
          Partnerships work at TTLMakerspace. Our well-equipped facilities and
          knowledgeable community of makers provide a welcome venue for groups
          that want to do something special, or host their own activity. Check
          out some of our partners below.
        </p>
        <h3>Interested in Partnership?</h3>
        <p>Email to "partnership" at "ttlmakerspace - dot - com"</p>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>What kind of partnerships are available?</h2>
        <p>
          The TTLMakerspace is 3000 feet of space equipped with a full Woodshop,
          3D Printers, Laser Cave, CNC Mill Room, Computer Lab, and Workshop.
          The venue can be booked for individual special events, or we can host
          a course or workshop you wish to run over time.
        </p>
        <p>
          RedQ Team is a creative agency specializing in building scalable,
          high-performance web & mobile application. Our main concern is
          creating more value into the application so that can help our
          customers to grow their business.
        </p>
        <h2>Who are some of your partners?</h2>
        <p>
          StopGap is an organization whose mission is to make Toronto's building
          easily accessible to those with special needs. As a partner to the
          TTLMakerspace, StopGap produces their accessiblity ramps from our
          shop, and regularly hosts paint-days for their sponsors. In addition,
          they do instruction to raise awareness with young makers in our
          workshop.
        </p>
        <p>
          The Alzheimer's Society of Toronto runs a repeating workingshop out of
          the TTL Makerspace, using the workshop, woodshop, and our complement
          of tools. This program, called "Men's Shed" welcomes people diagnosed
          in the early stages of dementia. The program is supervised by
          TTL-trained care workers, and helps participants get past the effects
          of isolation and depression by coming together to build projects.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
