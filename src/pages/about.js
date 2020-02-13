import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts.js"
import { Row, Col, Container, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const headerCenter = {
  textAlign: "center",
  fontWeight: "400",
  fontSize: "72px",
}
const headingPart = {
  fontWeight: "bold",
}

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { regex: "/mmw-about-responsive.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { regex: "/about_us_1/" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageThree: file(relativePath: { regex: "/about_us_2/" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageFour: file(relativePath: { regex: "/about_us_3/" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imageFive: file(
        relativePath: { regex: "/web-developer-working-on-laptop.jpg/" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imBottom: file(relativePath: { regex: "/business-img-bottom.jpg/" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      devider: file(relativePath: { regex: "/devider.png/" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <PrimaryLayout>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <h1 style={headerCenter}>
              About <span style={headingPart}> Make My Website</span>
            </h1>
            <Img
              fixed={data.devider.childImageSharp.fixed}
              style={{ margin: "auto", display: "block" }}
            />
            <br /> <br />
            <h4 style={{ textAlign: "center" }}>
              We Don’t Just Build Websites, We Build Your Online Business!
            </h4>
            <br />
            <p>
              At Make My Website, we are a group of highly trained and skilled
              professionals who work with you to create your online presence and
              are dedicated to meet the goals and guidelines to deliver your
              project.
            </p>
            <p>
              Our Office is located in the center of Werribee. However, we are
              physically present in Sydney, Melbourne, and Brisbane with clients
              all over Australia. We are just one phone call away to give your
              business an online presence.
            </p>
            <Img
              fluid={data.imageOne.childImageSharp.fluid}
              style={{ maxWidth: "800px", margin: "auto", display: "block" }}
            />
            <br />
            <br />
            <Button
              variant="danger"
              style={{ display: "block", margin: "auto" }}
            >
              <a href="/contact" style={{ color: "white" }}>
                Contact Us
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />

      <Container>
        <Row>
          <Col>
            <h2 style={headerCenter}>
              We Make <span style={headingPart}>Websites</span>
            </h2>
            <Img
              fixed={data.devider.childImageSharp.fixed}
              style={{ margin: "auto", display: "block" }}
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col lg="4" sm="6">
            <Img
              fixed={data.imageTwo.childImageSharp.fixed}
              style={{ margin: "auto", display: "block" }}
            />
            <h4>Websites Which Stands Out For Your Business</h4>
            <Img
              fixed={data.imBottom.childImageSharp.fixed}
              style={{ margin: "auto", display: "block" }}
            />
          </Col>
          <Col lg="4" sm="6">
            <Img
              fixed={data.imageThree.childImageSharp.fixed}
              style={{ margin: "auto", display: "block" }}
            />

            <h4>We Endeavour To Provide The Best Customer Satisfaction</h4>
            <Img
              fixed={data.imBottom.childImageSharp.fixed}
              style={{ margin: "auto", display: "block" }}
            />
          </Col>
          <Col lg="4" sm="6">
            <Img
              fixed={data.imageFour.childImageSharp.fixed}
              style={{ margin: "auto", display: "block" }}
            />
            <h4>It’s All About Making Your Business Successful</h4>
            <Img
              fixed={data.imBottom.childImageSharp.fixed}
              style={{ margin: "auto", display: "block" }}
            />
          </Col>
        </Row>
      </Container>

      <div
        style={{
          background: "#eeeeee",
          padding: "80px 0px",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h2 style={headerCenter}>
                Our <span style={headingPart}>Story</span>
              </h2>
              <Img
                fixed={data.devider.childImageSharp.fixed}
                style={{ margin: "auto", display: "block" }}
              />
              <br />
              <br />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Img
                fluid={data.imageFive.childImageSharp.fluid}
                style={{ margin: "auto", display: "block" }}
              />
            </Col>
            <Col lg="6">
              <p style={{ fontWeight: "500" }}>
                Make My Website is a digital agency with a vision to provide
                bespoke websites for every business. We are a small team of
                talented individuals willing to work your way to help you
                succeed online.
              </p>
              <p style={{ fontWeight: "500" }}>
                Here at Make My Website, we offer quality websites and strive
                for customer satisfaction. Reliability being our biggest
                strength, we have the best client reviews from all over the
                country. We love what we do and that is why we excel in it.
              </p>
              <p style={{ fontWeight: "500" }}>
                Our primary objective is to develop your brand, give your
                customers a user-friendly experience and market it for you
                throughout, and not just to earn money. We are excellent
                learners and observers and we never miss the opportunity to
                learn from our esteemed clients.
              </p>
              <p style={{ fontWeight: "500" }}>
                Our creativity in tailoring websites for you and developing a
                framework of unique marketing strategies is what makes us stand
                out of the crowd.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <h2 style={headerCenter}>
              Why <span style={headingPart}>Choose Us</span>
            </h2>
            <Img
              fixed={data.devider.childImageSharp.fixed}
              style={{ margin: "auto", display: "block" }}
            />
            <br />
            <br />
            <h5>We Have Futuristic Approach</h5>
            <p>
              Make My Website don’t settle on today’s successes, instead, we
              believe in future and go to the edge what is possible to exceed
              your own expectations.
            </p>

            <h5>We Aim To Excel</h5>
            <p>
              Your success is our success. When designing your project, we are
              not only focused on designing the website, we also provide our
              customer with project managers who will be in contact with you
              throughout the development of your website and resolve and answer
              all your queries. And the website we design will stand out and
              speak your business, also we will diligently work to exceed your
              expectations and make sure that your online presence is well
              represented. Our track record ensures that our customers have
              become even more successful.
            </p>

            <h5>We Make It Personal</h5>
            <p>
              We believe that our client’s success is the best measure of our
              own performance. We are passionate about helping our customer’s
              businesses to reach their goals. We ensure when you choose MAKE MY
              WEBSITE you will get a website that suit your company, your needs
              and your goals. We also guide our clients how to survive in the
              digital savvy market and create custom sites.
            </p>

            <h5>We Are Result Driven</h5>
            <p>
              Each business is important to us, regardless of its size. We
              utilize the latest technologies that are both proven and practical
              which helps in building your brand, improve your global web
              presence, and develop more meaningful relationships with your
              customers.
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col>
            <h2 style={headerCenter}>
              What <span style={headingPart}>We Do...</span>
            </h2>
            <Img
              fixed={data.devider.childImageSharp.fixed}
              style={{ margin: "auto", display: "block" }}
            />
            <br />
            <br />
            <p>
              Make My Website is a digital agency made up of really talented
              individuals. We are a small team who is willing to work your way
              to help you succeed online.
            </p>
            <p>
              Here at Make My Website, we love our work and highly rely on
              customer satisfaction. We love making websites and make them work
              for our clients. There isn’t anything we can’t do, but if there
              is, we are very upfront, so that you won’t waste your time and
              money. For us nothing is big or small we take projects just not to
              add revenue to our table as we believe in learning from each and
              every project.
            </p>
            <p>
              At Make My Website, we are very creative and thinking people that
              what makes us different.
            </p>
          </Col>
        </Row>
      </Container>
    </PrimaryLayout>
  )
}
export default AboutUs
