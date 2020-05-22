import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MaskNoLabel from "../../images/mask-noLabel.jpg"
import HalfValve from "../../images/halfValve.jpg"
import CropScreenFull from "../../images/cropscreen-full.jpg"
import GroupShot from "../../images/groupShot.jpg"
import MediumFace from "../../images/MediumFace.svg"
import LightFace from "../../images/LightFace.svg"
import Valve from "../../images/Valve.svg"
import Intubation from "../../images/Intubation.svg"
import Headbands from "../../images/HeadBand3.svg"
import MGFaceShield from "../../images/MGFaceShield.svg"
import { CovidHero, CovidProd } from "./style"

interface AboutProps {}

const About: React.FunctionComponent<AboutProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/placeholder.jpg/" }) {
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
    <div>
      <CovidHero className="cvdHero">
        <div class="grid-container">
          <div class="grid-x grid-padding-x">
            <div class="small-12 medium-6  cell">
              <h1>TTLMS COVID-19</h1>
              <h2>Rapid Response Initiative</h2>
              <p>
                We are a non-profit community-driven initiative. We are looking
                for donations in the form of funding or materials. As a project
                of IRBE, the TTLMakerspace accepts charitable donations through
                CanadaHelps.ca
              </p>
              <a
                href="https://www.canadahelps.org/en/dn/39887"
                target="_blank"
                class="btn"
              >
                Donate with CanadaHelps.ca
              </a>
              <p></p>
              <h2>Visit our site to join!</h2>
              <p></p>
              <a
                href="http://covid19.ttlmakerspace.com/"
                target="_blank"
                class="btn"
              >
                Visit the Site
              </a>
            </div>
          </div>
        </div>
      </CovidHero>
      <div class="cvdStory">
        <div class="grid-container full">
          <div class="grid-x grid-padding-x">
            <div class="small-12 medium-12 large-6 cell ">
              <img src={MaskNoLabel} width="100%" alt="TTL Group" />
            </div>
            <div class="small-12 medium-8 large-4 cell">
              <h1>Our Story</h1>
              <p>
                After COVID-19 was officially declared a pandemic and the city
                of Toronto went into isolation a group of makers from the TTL
                Makerspace volunteered the use of their shop resources and
                expertise to help address shortages of PPE. We are a veteran
                industrial designer, a PHD engineering student, a software
                engineer and a 3D Printing Enthusiast.
              </p>

              <p>
                While working in isolation the team gathered the printers and
                materials then downloaded popular open source face shield
                designs for evaluation. We started to prototype PPE equipment
                and shared these mockups to local hospitals modifying the
                designs based on invaluable feedback to better suit their needs.
                Further more we leaned on our own experience to improve the
                designs for functionality, comfort and production speed. In
                their first week the team assembled more than 200 pieces of PPE
                that have donated these to research facilities and hospitals. We
                are currently producing this amount per day in two different
                styles: One sterizable one for re-use and one that is single
                use. All current production is driven by specific requests from
                various hospitals in the GTA and all equipment we fabricate is
                donated.{" "}
              </p>

              <p>
                The team also expanded beyond PPE and started to partner with
                local researchers to help their COVID-19 efforts, assisting with
                the rapid prototyping and production of ventilator parts for
                research/testing purposes and started fabricating intubation
                tables with our CNC Router.{" "}
              </p>
            </div>
            <div class="small-12 medium-4 large-2 cell hide-for-small-only flushRight">
              <img src={HalfValve} width="100%" alt="COVID-19 Valve" />
            </div>
          </div>
        </div>
      </div>
      <div class="cvdWhat">
        <div class="grid-container full">
          <div class="grid-x grid-padding-x align-justify">
            <div class="small-12 large-offset-1 large-4 cell">
              <h1>What We Do</h1>
              <p>
                We are a non-profit community-driven initiative. We have created
                a decentralized hub that allows local makers and 3D printing
                enthusiasts to address the PPE needs for healthcare and
                essential service workers in our community. We are a small team
                of friends and enthusiasts passionate about problem-solving,
                design, and rapid prototyping. We use our expertise, experience
                and resources to make intelligent design decisions then to
                rapidly iterate based on feedback from real world trials.{" "}
              </p>
              <ul>
                <li>
                  3D CAD Design and in-house prototyping of PPE for essential
                  workers and health care facilities
                </li>
                <li>
                  Assembly and donation of PPE to sites in need across the GTA
                </li>
                <li>
                  Working with Toronto Hospitals to design and prototype new
                  equipment and PPE for the COVID-19 crisis
                </li>
              </ul>
            </div>
            <div class="small-12 large-6 cell ">
              <img src={CropScreenFull} width="100%" alt="COVID-19 Valve" />
            </div>
          </div>
        </div>
      </div>
      <CovidProd className="cvdProd">
        <div class="grid-container">
          <div class="centerText">
            <h2>Current and Future Items for fabrication.</h2>
            <h3>All items produced are donated</h3>
          </div>
          <div class="grid-x grid-padding-x">
            <div class="small-6 large-3 cell">
              <a href="#">
                <div class="prodCard">
                  <div class="prodImg">
                    <img src={MediumFace} />
                  </div>
                  <div class="statusBox green">
                    <span class="dot greenDot"></span>in production
                  </div>
                  <div class="cvdDesc">Medium Duty Face Shields</div>
                  <div class="cvdCount">78</div>
                </div>
              </a>
            </div>
            <div class="small-6 large-3 cell">
              <a href="/covid-shield-v2/">
                <div class="prodCard">
                  <div class="prodImg">
                    <img src={LightFace} />
                  </div>
                  <div class="statusBox green">
                    <span class="dot greenDot"></span>in production
                  </div>
                  <div class="cvdDesc">Light Duty Face Shields</div>
                  <div class="cvdCount">300</div>
                </div>
              </a>
            </div>
            <div class="small-6 large-3 cell">
              <a href="/3hole-face-shield/">
                <div class="prodCard">
                  <div class="prodImg">
                    <img src={MGFaceShield} />
                  </div>
                  <div class="statusBox green">
                    <span class="dot greenDot"></span>in production
                  </div>
                  <div class="cvdDesc">3 Hole Face Shields</div>
                  <div class="cvdCount">647</div>
                </div>
              </a>
            </div>
            <div class="small-6 large-3 cell">
              <a href="/comfort-bands/">
                <div class="prodCard">
                  <div class="prodImg">
                    <img src={Headbands} />
                  </div>
                  <div class="statusBox green">
                    <span class="dot greenDot"></span>in production
                  </div>
                  <div class="cvdDesc">Mask Headbands</div>
                  <div class="cvdCount">105</div>
                </div>
              </a>
            </div>
            <div class="small-6 large-3 cell">
              <a href="/covid-intubation-box/">
                <div class="prodCard">
                  <div class="prodImg">
                    <img src={Intubation} />
                  </div>
                  <div class="statusBox orange">
                    <span class="dot orangeDot"></span>in development
                  </div>
                  <div class="cvdDesc">Intubation Boxes</div>
                  <div class="cvdCount">1</div>
                </div>
              </a>
            </div>

            <div class="small-6 large-3 cell">
              <div class="prodCard">
                <div class="prodImg">
                  <img src={Valve} />
                </div>
                <div class="statusBox blue">
                  <span class="dot blueDot"></span>in approval
                </div>
                <div class="cvdDesc">Coming Soon</div>
                <div class="cvdCount">112</div>
              </div>
            </div>
          </div>
          <div class="centerText">
            <h3>Donate through CanadaHelps.ca</h3>
            <a
              href="https://www.canadahelps.org/en/dn/39887"
              target="_blank"
              class="btn"
            >
              Donate Now
            </a>
          </div>
        </div>
      </CovidProd>
      <div class="cvdTeam">
        <div class="grid-container">
          <div class="grid-x cell">
            <h1>Team</h1>
          </div>
          <div class="grid-x grid-padding-x">
            <div class="small-6 large-3 cell">
              <h2>Kate Kazlovich</h2>
              <ul>
                <li>
                  Ph.D. student - Institute of Biomaterials and Biomedical
                  Engineering{" "}
                </li>
                <li>
                  Clinical Engineering Trainee at the International Centre for
                  Surgical Safety, St. Michaels Hospital
                </li>
              </ul>
            </div>
            <div class="small-6 large-3 cell">
              <h2>James Wallace </h2>
              <ul>
                <li>Vice President of Technology - Bede Gaming Canada.</li>
                <li>
                  10+ years of experience in Software Architecture and Agile
                  Software Development
                </li>
                <li>Shop Supervisor and Instructor at the TTL Makerspace</li>
              </ul>
            </div>
            <div class="small-6 large-3 cell">
              <h2>Marc Shu-Lutman</h2>
              <ul>
                <li>
                  Industrial Designer with 25+ years of professional experience
                  in design and fabrication
                </li>
                <li>
                  Shop Supervisor and Lead CNC and Laser Cutting program
                  instructor at the TTL Makerspace
                </li>
              </ul>
            </div>
            <div class="small-6 large-3 cell">
              <h2>Kyle Myers</h2>
              <ul>
                <li>
                  Head of 3D printing programming, and a youth instructor at the
                  TTL Makerspace.
                </li>
                <li>6+ years teaching STEM education</li>
                <li>
                  Pre-Service Firefighting student at the Fire and Emergency
                  Services Training Institute.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="cvdJoin">
        <div class="grid-container ">
          <div class="grid-x grid-padding-x align-middle">
            <div class="small-12 large-6 cell">
              <h2>Calling All Makers!</h2>
              <p>
                The Team is looking for more makers to join this initiative! We
                can provide you with materials, plans, and designs that
                hospitals and community services have requested to print. We can
                then organize pick-up and drop off.{" "}
              </p>
              <h2>Want To Help Out?</h2>
              <p>
                We are looking for donations in the form of funding or
                materials. As a project of IRBE, a registered charitable
                organization, donations to TTLMakerspace can be done via
                CanadaHelps.ca If you wish to support us, please visit the{" "}
                <span>
                  <a
                    href="https://www.canadahelps.org/en/dn/39887"
                    target="_blank"
                  >
                    donation page.
                  </a>
                </span>{" "}
                If you wish to donate materials, we are looking for 1.75mm PETG
                filament for 3D printers and/or plastic sheets made of:
                polycarbonate, propionate, acetate, PETG. All PPE we develop
                will be donated to health care facilities.{" "}
              </p>
            </div>
            <div class="small-12 large-6 cell">
              <img src={GroupShot} width="100%" alt="TTL Group" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
