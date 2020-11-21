import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Button from "components/Button/Button"
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
      avatar: file(absolutePath: { regex: "/membership.jpg/" }) {
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
        <h2>Membership during C19</h2>
        <p>
          IMPORTANT NOTICE: During C19 lockdown, memberships are being paused,
          reassigned to the "Occasional Maker" tier, and membership payments
          suspended. You can still create a membership, get updates, and can log
          in to your account, but during full lockdown access to the physical
          location is suspended.
        </p>
        <p>
          TTL Makerspace was likewise completely redesigned, implementing
          protective screens at all stations, sanitization facilities, a check
          in/out and contact tracing. However the Makerspace is not considered
          an essential service, and while set up to operate very well even at
          what is now considered “code red” conditions, this does not extend to
          “code grey”, or lockdown. We will be back the moment lockdown
          completes, and we’re very sympathetic to our community of makers that
          will have to endure these conditions.
        </p>
        <h3>Ready to Join?</h3>
        <p>Here is a handy checklist:</p>
        <p>
          <ul>
            <li>Are you an occasional maker, or monthly?</li>
            <li>Are you ready to manage your membership online?</li>
            <li>Will you need storage?</li>
            <li>Will you need any certifications?</li>
          </ul>
        </p>
        <p>
          Okay, ready to get making? Then come on in! You'll be very welcome at
          the TTLMakerspace.
        </p>

        <a href="https://makerspace.cobot.me">
          <Button title="Members Portal" />
        </a>
      </AboutPageTitle>

      <AboutImage>
        <Image fluid={Data.avatar.childImageSharp.fluid} alt="author" />
      </AboutImage>

      <AboutDetails>
        <h2>What kind of memberships are available?</h2>
        <p>
          There are two kinds of memberships available. The first is the monthly
          membership, which costs $77/month and is billed automatically. There
          are no mimimum terms for the monthly membership - you can start or
          stop it any time you wish using your member login. Monthly members are
          a huge support to the Makerspace, providing the funds we need to keep
          all of the equipment in good working order, and ensure the space is
          accessible and safe for everyone.
        </p>
        <p>
          The second kind of membership is the Community Membership. This is not
          billed automatically, but instead allows the member to purchase
          day-passes for $38. It is a good option for anyone who needs the space
          very occasionally. In addition to day-passes, Community Members are
          always welcome at the open community night, where any member can come
          work in the space from 5pm to 10pm. Community night happens weekly on
          Wednesday evenings. Many people start with a Community Membership, and
          switch to a Monthly Membership when they have a more invoved project.
        </p>
        <h2>What comes with membership?</h2>
        <p>
          For both Monthly Members and Day-pass holders, the Makerspace is
          available from 12pm to 10pm, Wednesday through Sunday. Membership
          gives access to the community, the space itself, and all of the
          hand-tools. For some of the larger tools, it is necessary to take a
          certification program before they can be used. Specifically the
          WoodShop (including table-saw, planer, joiner), the Epilog Laser
          Cutter, and the Omni CNC Mill require certification from a Makerspace
          instructor. Following certification, use of the Laser Cutter and the
          CNC Mill requires booking in advance using your online login, and
          carry a small fee as they are expensive tools to maintain.
        </p>
        <h3>Booking Fees per Equipment:</h3>
        <p>
          <ul>
            <li>WoodShop: None</li>
            <li>3D Printers: None (pay by weight of print)</li>
            <li>Laser Cutter: TBA</li>
            <li>Omni CNC Mill: $25/hr</li>
          </ul>
        </p>
        <h2>How do certifications work?</h2>
        <p>
          Certifications can be booked in advance and include both basic
          instruction to get you up and running, and a briefing on all the
          safety features involved in the operation of the equipment. WoodShop
          certification can be done in a single session. Certification on the
          Laser Cutter, as well as certification on the CNC Mill, both require a
          minimum of two sessions, followed by a hands-on test. Our goal is to
          get you comfortable and up and running quickly on the equipment.
          Following certification, you will be able to book the larger tools,
          and we are always on-hand to assist you.
        </p>
        <h3>Certification Fees</h3>
        <p>
          <ul>
            <li>Woodshop Single Certification Session: $45</li>
            <li>
              3D Printer Intro and Certification: $40 (includes one day pass)
            </li>
            <li>Lathe Introduction: $40 (includes one day pass)</li>
            <li>Laser Cutter Introduction: TBA</li>
            <li>
              Omni CNC Mill Introductory Course: $240 (comes with a day-pass,
              and 2 hours booking)
            </li>
          </ul>
        </p>
        <h2>Do you have storage and materials?</h2>
        <p>
          There is a limited amount of storage available to be reserved in the
          Makerspace in the form of small, medium, and large sized lockers.
          These are available with membership, and can be booked using your
          online login. Please note that all lockers must remain accessible at
          all times to TTLMakerspace staff, so if you require a lock we can
          provide you with one. Overnight storage of larger projects (for
          example a woodworking project that requires time for glue to dry) can
          be arranged.
        </p>
        <p>
          Members usually supply their own materials. We keep a small supply of
          commonly needed items on-hand, and provide means for members to share
          materials they have finished with in making their projects. We can
          also help receive shipments.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
