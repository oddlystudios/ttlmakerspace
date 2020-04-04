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
  CalendarHolder,
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
        <h2>Training at TTLMakerspace</h2>
        <p>
          At the TTLMakerspace you can get training to increase your hands-on
          skills on a wide variety of equipment, from traditional to high-tech.
          We have programs for every age and interest. Programs run weekly. See
          what we're doing this week below.
        </p>
        <h3>Ready to Train?</h3>
        <p>Here is a handy checklist:</p>
        <p>
          <ul>
            <li>Are you looking for a workshop, or full course?</li>
            <li>Got our location and hours?</li>
            <li>Know where to direct questions?</li>
            <li>Are you looking for a certification?</li>
          </ul>
        </p>
        <p>
          We couldn't be more excited to have you come train at the
          TTLMakerspace. See our upcoming courses and workshops at Universe
          below.
        </p>

        <a
          href="https://www.universe.com/users/ttlmakerspace-LX7DSH"
          target="_blank"
        >
          <Button title="Course Registration" />
        </a>
      </AboutPageTitle>
      <CalendarHolder big>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=b2RkbHlzdHVkaW9zLmNvbV9sdm9nMG1ocDlwMHQ3Ym11dDg5aHQzZnF1c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23AD1457&amp;mode=WEEK&amp;showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;showTabs=0"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </CalendarHolder>

      <CalendarHolder>
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=b2RkbHlzdHVkaW9zLmNvbV9sdm9nMG1ocDlwMHQ3Ym11dDg5aHQzZnF1c0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23AD1457&amp;mode=AGENDA&amp;showTitle=0&amp;showCalendars=0&amp;showTz=0&amp;showTabs=0"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </CalendarHolder>

      <AboutDetails>
        <h2>What kind of training is available?</h2>
        <p>
          Our mission is to provide people with practical, hands-on instruction
          in all aspects of making. Whether you want to build up your skills for
          creating a prototype, starting a business, changing your career, or
          supporting your organization, we offer training from experienced
          instructors who actively build projects and can provide practical
          advice.
        </p>
        <p>
          Some of our courses teach skills in the use of traditional tools, like
          the Woodshop Certification, 8-week Woodworking, Lathe Workshop, and
          more. Other courses provide training in modern computer-based
          fabrication techniques like the CNC Mill, Laser Cutter, and 3D
          printers. And some courses focus on skills in software, computer
          programming and electronics.
        </p>
        <h2>How do I register?</h2>
        <p>
          Booking a course, certification, or workshop can be done online
          through our Universe booking system. You will need a credit card to
          complete your booking. Once complete, you'll receive a confirmation
          email and you'll be ready to go. Please note, some courses have
          specific instructions to prepare you for your best experience.
        </p>
        <h2>Do I need to be a member?</h2>
        <p>
          You don't have to be a member to book training at the TTLMakerspace.
          But you will need a membership if you wish to use the training you
          receive on our equipment such as the Laser, 3D Printers, or CNC Mill.
          You could consider supporting us with a monthly membership, or become
          an occasional maker and use day-passes to book time on the machines.
        </p>
        <h2>Are there refunds?</h2>
        <p>
          Refunds are available within two days of your purchase through
          Universe booking.
        </p>

        <SocialProfiles>
          <SocialProfile items={SocialLinks} />
        </SocialProfiles>
      </AboutDetails>
    </AboutWrapper>
  )
}

export default About
