import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts.js"
import { Row, Col, Container } from "react-bootstrap"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import DeviderImg from "../images/devider.png"
import WhiteDevider from "../images/home_page/white-seperator.png"
import WhyChoose from "../images/home_page/why-choose-us-bg.jpg"
import Futuristic from "../images/Futuristic-Approach-ICON.png"
import Aim from "../images/aim.png"
import Identity from "../images/identity-proof.png"
import Personal from "../images/personal-icon.png"
import Resultdriven from "../images/resultdriven.png"
import Img from "gatsby-image"

const HDevider = styled.img`
  margin: auto;
  display: block;
`
const Button = styled.button({
  backgroundColor: "#ED1C24",
  padding: "20px 0px",
  width: "200px",
  margin: "auto",
  display: "block",
  color: "white",
  textAlign: "center",
  fontWeight: "bold",
  "&:hover": {
    background: "black",
    color: "white",
    textDecoration: "none",
  },
})
const headerCenter = {
  textAlign: "center",
  fontWeight: "400",
  fontSize: "72px",
}
const headingPart = {
  fontWeight: "bold",
}
const WhyImg = styled.img`
  transform: scale(1);
  transition: transform 0.2s linear, -webkit-transform 0.2s linear;
  cursor: pointer;
  border: 1px dashed #fff;
  border-radius: 100px;
  padding: 30px;
  opacity: 0.9;
  width: 80%;
  margin: auto;
  display: block;
  &:hover {
    transform: scale(1.2);
  }
`
const WhyHeading = styled.h4({
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
  margin: "20px 0px",
})
const Flip = styled(Col)`
  margin-bottom: 20px;
  cursor: pointer;
  min-height: 300px;
`
const FlipBody = styled.div({
  position: "relative",
  width: "100%",
  height: "100%",
  textAlign: "center",
  transition: "transform 0.8s",
  transformStyle: "preserve-3d",
})
const FlipFront = styled.div({
  backfaceVisibility: "hidden",
  backgroundColor: "transparent",
  width: "100%",
  "& h3": {
    fontSize: "18px",
  },
})
const FlipBack = styled.div({
  width: "100%",
  height: "100%",
  top: "0",
  backfaceVisibility: "hidden",
  padding: "15px",
  backgroundColor: "#EEEEEE",
  transform: "rotateX(180deg)",
  display: "none",
})
const FlipBox = styled.div`
  border-right: 5px solid #fff;
  height: 100%;
  perspective: 1000px;
  &:hover ${FlipBody} {
    transform: rotateX(180deg);
  }
  &:hover ${FlipBack} {
    display: block;
  }
  &:hover ${FlipFront} {
    display: none;
  }
`

const HeroTitle = styled.h2({
  color: "white",
})
const HeroDesc = styled.p({
  color: "white",
  fontWeight: "bold",
})

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(
        relativePath: { regex: "/Developing-Programming-And-Coding-mmw.jpg/" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(
        relativePath: { regex: "/Online-Marketing-Man-On-Computer-mmw.jpg/" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(
        relativePath: { regex: "/webdesign-email-hosting-mmw.jpg/" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFour: file(relativePath: { regex: "/molonglo-responsive.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      headerImage: file(relativePath: { regex: "/mmw_home_page_bg.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFive: file(
        relativePath: { regex: "/Futuristic-Approach-mmw.png/" }
      ) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageSix: file(
        relativePath: { regex: "/Understand-Your-Identity-mmw.png/" }
      ) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageSeven: file(relativePath: { regex: "/Aim-to-Excel-mmw.png/" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageEight: file(relativePath: { regex: "/web-design_img.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageNine: file(relativePath: { regex: "/online-marketing.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTen: file(relativePath: { regex: "/web-email-hosting_img.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageEleven: file(relativePath: { regex: "/web-design_img.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwelve: file(relativePath: { regex: "/ecommerce-img.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThirteen: file(relativePath: { regex: "/seo-service.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFourteen: file(relativePath: { regex: "/content-writing.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFifteen: file(relativePath: { regex: "/social.png/" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSixteen: file(
        relativePath: { regex: "/make-my-website-slide.jpg/" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSeventeen: file(
        relativePath: {
          regex: "/material-design-geometric-stock-dark-black.jpg/"
        }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageEighteen: file(
        relativePath: { regex: "/toybox-early-learning-big.png/" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageNineteen: file(relativePath: { regex: "/testi_user.JPG/" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageTwenty: file(relativePath: { regex: "/five-stars.png/" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageTwentyOne: file(
        relativePath: { regex: "/toybox-early-learning-big.png/" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mapImage: file(
        relativePath: { regex: "/australia-red-and-white-map-small.png/" }
      ) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const HeroBg = styled.div({
    background: "url('" + data.headerImage.childImageSharp.fluid.src + "')",
    position: "relative",
    paddingTop: "300px",
    "::before": {
      content: "' '",
      backgroundColor: "rgba(0,0,0,0.66)",
      position: "absolute",
      top: "0",
      height: "100%",
      width: "100%",
    },
  })

  return (
    <PrimaryLayout isHomePage={true}>
      <HeroBg>
        <Container>
          <Row>
            <Col>
              <HeroTitle>
                Speak with Our Specialists to expand your social reach
              </HeroTitle>
              <HeroDesc>
                We build successful responsive mobile sites that genuinely
                connect with your target audience
              </HeroDesc>
            </Col>
            <Col>
              <Img fixed={data.mapImage.childImageSharp.fixed} />
            </Col>
          </Row>
        </Container>
      </HeroBg>

      <Container>
        <Row>
          <Col>
            <h1 style={headerCenter}>
              About <span style={headingPart}> Make My Website</span>
            </h1>
            <HDevider src={DeviderImg} />
            <br /> <br />
            <h4 style={{ textAlign: "center/" }}>
              We Don’t Just Build Websites, We Build Your Online Business!
            </h4>
            <br />
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <p>
              Make My Website is a digital agency made up of extremely talented,
              highly trained and skilled professionals who work with you to
              create your online presence and are dedicated to meet the goals
              and guidelines to deliver your project.
            </p>
          </Col>
          <Col lg="6">
            <p>
              We are a small team of experts who is willing to work your way to
              help you succeed online.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="4" sm="4">
            <Img fluid={data.imageOne.childImageSharp.fluid} />
          </Col>
          <Col lg="4" sm="4">
            <Img fluid={data.imageTwo.childImageSharp.fluid} />
          </Col>
          <Col lg="4" sm="4">
            <Img fluid={data.imageThree.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <div
        style={{
          backgroundImage: "url(" + WhyChoose + ")",
          padding: "40px 0px",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h2
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "72px",
                }}
              >
                Why <span style={headingPart}>Choose Us</span>
              </h2>
              <HDevider src={WhiteDevider} />
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <Row>
            <Col lg={{ span: 2, offset: 1 }}>
              <WhyImg src={Futuristic} />
              <WhyHeading>We have Futuristic Approach</WhyHeading>
            </Col>
            <Col lg="2">
              <WhyImg src={Aim} />
              <WhyHeading>We Aim to Excel</WhyHeading>
            </Col>
            <Col lg="2">
              <WhyImg src={Identity} />
              <WhyHeading>We Understand Your Identity</WhyHeading>
            </Col>
            <Col lg="2">
              <WhyImg src={Personal} />
              <WhyHeading>We Make It Personal</WhyHeading>
            </Col>
            <Col lg="2">
              <WhyImg src={Resultdriven} />
              <WhyHeading>We are Result Driven</WhyHeading>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{ background: "url('/dot-pattern.png')", padding: "0px 20px" }}
      >
        <Row style={{ alignItems: "center" }}>
          <Col lg="3">
            <h2
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "72px",
              }}
            >
              Services
            </h2>
            <HDevider src={DeviderImg} />
            <p style={{ fontWeight: "500" }}>
              Elevate Your Businesses Capabilities With One Step. We offer a
              wide variety of website design services
            </p>
            <Button as="a" href="/our-service">
              View All Services
            </Button>
          </Col>
          <Col lg="9">
            <Row>
              <Flip lg="3" sm="4" md="4" xs="6">
                <FlipBox>
                  <FlipBody>
                    <FlipFront>
                      <Img fluid={data.imageEight.childImageSharp.fluid} />
                      <h3>Web Design</h3>
                    </FlipFront>
                    <FlipBack>
                      <h3>Web Design</h3>
                      <p>
                        The world is getting advanced and for matching the
                        standards of present era, online existence is must.
                      </p>
                    </FlipBack>
                  </FlipBody>
                </FlipBox>
              </Flip>
              <Flip lg="3" sm="4" md="4" xs="6">
                <FlipBox>
                  <FlipBody>
                    <FlipFront>
                      <Img fluid={data.imageNine.childImageSharp.fluid} />
                      <h3>Online Marketing</h3>
                    </FlipFront>
                    <FlipBack>
                      <h3>Online Marketing</h3>
                      <p>
                        Marketing is essential today and no business can shrug
                        off the value of this powerful factor.
                      </p>
                    </FlipBack>
                  </FlipBody>
                </FlipBox>
              </Flip>
              <Flip lg="3" sm="4" md="4" xs="6">
                <FlipBox>
                  <FlipBody>
                    <FlipFront>
                      <Img fluid={data.imageTen.childImageSharp.fluid} />
                      <h3>Web And Email Hosting</h3>
                    </FlipFront>
                    <FlipBack>
                      <h3>Web And Email Hosting</h3>
                      <p>
                        Web hosting is actually the space which you purchase on
                        a web server so as to store your site files.
                      </p>
                    </FlipBack>
                  </FlipBody>
                </FlipBox>
              </Flip>
              <Flip lg="3" sm="4" md="4" xs="6">
                <FlipBox>
                  <FlipBody>
                    <FlipFront>
                      <Img fluid={data.imageEleven.childImageSharp.fluid} />
                      <h3>Online Marketing</h3>
                    </FlipFront>
                    <FlipBack>
                      <h3>Online Marketing</h3>
                      <p>
                        Marketing is essential today and no business can shrug
                        off the value of this powerful factor.
                      </p>
                    </FlipBack>
                  </FlipBody>
                </FlipBox>
              </Flip>
              <Flip lg="3" sm="4" md="4" xs="6">
                <FlipBox>
                  <FlipBody>
                    <FlipFront>
                      <Img fluid={data.imageTwelve.childImageSharp.fluid} />
                      <h3>Ecommerce</h3>
                    </FlipFront>
                    <FlipBack>
                      <h3>Ecommerce</h3>
                      <p>
                        Over the previous decade the usefulness of internet has
                        augmented manifold.
                      </p>
                    </FlipBack>
                  </FlipBody>
                </FlipBox>
              </Flip>
              <Flip lg="3" sm="4" md="4" xs="6">
                <FlipBox>
                  <FlipBody>
                    <FlipFront>
                      <Img fluid={data.imageThirteen.childImageSharp.fluid} />
                      <h3>SEO</h3>
                    </FlipFront>
                    <FlipBack>
                      <h3>SEO</h3>
                      <p>
                        SEO is one of the main marketing channels to endorse
                        website exposure via higher visibility in search
                        engines.
                      </p>
                    </FlipBack>
                  </FlipBody>
                </FlipBox>
              </Flip>
              <Flip lg="3" sm="4" md="4" xs="6">
                <FlipBox>
                  <FlipBody>
                    <FlipFront>
                      <Img fluid={data.imageFourteen.childImageSharp.fluid} />
                      <h3>Content Writing</h3>
                    </FlipFront>
                    <FlipBack>
                      <h3>Content Writing</h3>
                      <p>
                        At Make My Website, our experts are well acquainting
                        with all the tactics of content writing.
                      </p>
                    </FlipBack>
                  </FlipBody>
                </FlipBox>
              </Flip>
              <Flip lg="3" sm="4" md="4" xs="6">
                <FlipBox>
                  <FlipBody>
                    <FlipFront>
                      <Img fluid={data.imageFifteen.childImageSharp.fluid} />
                      <h3>Social Media Marketing</h3>
                    </FlipFront>
                    <FlipBack>
                      <h3>Social Media Marketing</h3>
                      <p>
                        No matter what you sell and who is your buyer, making
                        use of social media as a marketing device can prove very
                        helpful for growing your brand.
                      </p>
                    </FlipBack>
                  </FlipBody>
                </FlipBox>
              </Flip>
            </Row>
          </Col>
        </Row>
      </div>
      <br />
      <div
        style={{
          padding: "80px 0px",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h2 style={headerCenter}>
                Happy <span style={headingPart}>Clients</span>
              </h2>

              <HDevider src={DeviderImg} />
              <br />
              <br />
              <h5 style={{ textAlign: "center/" }}>
                5 Star Rated Web Design Agency.
              </h5>
            </Col>
          </Row>
          <Row
            style={{
              backgroundImage:
                "url('//material-design-geometric-stock-dark-black.jpg')",
              padding: "20px 30px",
            }}
          >
            <Col lg="3">
              <Img fluid={data.imageEighteen.childImageSharp.fluid} />
            </Col>
            <Col lg="6">
              <Img
                fixed={data.imageNineteen.childImageSharp.fixed}
                style={{ margin: "auto", display: "block/" }}
              />
              <Img
                fixed={data.imageTwenty.childImageSharp.fixed}
                style={{ margin: "auto", display: "block/" }}
              />
              <p style={{ color: "white/" }}>
                Absolutely LOVE my website!! This team is beyond amazing. Had a
                bad experience with another designer and these guys definitely
                came to my rescue!! Thank you so much. I LOVE LOVE LOVE my
                website! Thank you all so much again! Definitely will recommend
                you to everyone I know!
              </p>
              <p>
                <b style={{ color: "white/" }}>Amanie Kalache - </b>
                <a href="https://www.123smilephotography.com/">
                  www.123smilephotography.com/
                </a>
              </p>
            </Col>
            <Col lg="3">
              <Img fluid={data.imageTwentyOne.childImageSharp.fluid} />
            </Col>
          </Row>
        </Container>
      </div>
    </PrimaryLayout>
  )
}

export default Index
