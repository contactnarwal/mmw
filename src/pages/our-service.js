import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts"
import styled from "@emotion/styled"
import { Row, Col } from "react-bootstrap"
const H1 = styled.h1({
  textAlign: "center",
  fontSize: "72px",
})
const SubHeading = styled.p({
  fontWeight: "bold",
  textAlign: "center",
})
const H2 = styled.h2({
  fontWeight: "bold",
  fontSize: "45px",
})
const P = styled.p({
  fontWeight: "500",
})
const BORDER = styled.p({
  width: "200px",
  backgroundColor: "#ed1c24",
  height: "2px",
  padding: "0",
  marding: "0",
  marginTop: "20px",
})
const ServiceContainer = styled.div({
  background: "#eeeeee",
  maxWidth: "100%",
  width: " 100%",
  padding: "50px 0px",
})
const ReadMore = styled.a({
  color: "#ed1c24 !important",
  fontWeight: "600",
  textDecoration: "underline",
})
const ourService = () => (
  <PrimaryLayout>
    <H1>Our Services</H1>
    <img
      src="/devider.jpg"
      alt="MMW devider"
      css={{ margin: "auto", display: "block" }}
    />
    <SubHeading>
      Elevate Your Businesses Capabilities With One Step. We Offer A Wide
      Variety Of Website Design Services.
    </SubHeading>
    <ServiceContainer>
      <Row css={{ marginTop: "60px" }}>
        <Col lg="6">
          <img
            src="/services/web-design-service.jpg"
            alt="MMW web design"
            css={{ maxWidth: "100%" }}
          />
        </Col>
        <Col lg="6">
          <H2>Web Design</H2>
          <BORDER />
          <P>
            The technological wizardry has made it a need to have a presence
            online. The competition is no longer confined to your street, city
            or even nation, it is beyond boundaries. To widen your audience, a
            website is a necessity, rather a good website for that matter. And
            it does not end here, you ought to have a website which is
            user-friendly, informative, attractive and a responsive one. Our
            experts design the website keeping in mind the needs of your
            business and the expectations of the targeted audience.
            <p>
              {" "}
              <ReadMore>Read More...</ReadMore>
            </p>
          </P>
        </Col>
      </Row>

      <Row css={{ marginTop: "60px" }}>
        <Col lg="6" css={{ paddingLeft: "50px" }}>
          <H2>Online Marketing</H2>
          <BORDER />
          <P>
            Marketing is the backbone of any business and none can shrug off its
            value. This certainly is our competitive advantage. To build a
            rewarding marketing program and maintaining it thereafter, several
            tools exist online. But a few of them are search engine optimization
            campaigns, pay-per-click, banner advertising, email marketing,
            etcetera.
          </P>

          <P>
            These remain different from the conventional marketing strategies
            because the former ones possess the ability to widen the reach
            manifolds, globally.
          </P>
          <p>
            <ReadMore>Read More...</ReadMore>
          </p>
        </Col>
        <Col lg="6">
          <img
            src="/services/online-marketing.jpg"
            alt="MMW web design"
            css={{ maxWidth: "100%" }}
          />
        </Col>
      </Row>
      <Row css={{ marginTop: "60px" }}>
        <Col lg="6">
          <img
            src="/services/web-email-hosting.jpg"
            alt="MMW web design"
            css={{ maxWidth: "100%" }}
          />
        </Col>
        <Col lg="6">
          <H2>Web And Email Hosting</H2>
          <BORDER />
          <P>
            Since the competition is neck and neck, and businesses have so many
            tasks to perform, they are hiring web and email hosting firms for
            their convenience. There is a belief that registering a domain name
            is just enough, to begin with, a website.
          </P>
          <P>
            But, it entirely contradicts with the fact that a domain is just
            like your name, a name to address you. To get a site active and live
            on the internet, hosting a website is of utmost need.
          </P>
          <p>
            <ReadMore>Read More...</ReadMore>
          </p>
        </Col>
      </Row>

      <Row css={{ marginTop: "60px" }}>
        <Col lg="6" css={{ paddingLeft: "50px" }}>
          <H2>Ecommerce</H2>
          <BORDER />
          <P>
            Over the years, the usefulness of the internet has augmented
            manifold. The online technology structure has exposed marvelous
            growth which primarily includes the growth of Digital Websites.
            Brick-and-mortar shipping is out of fashion and everyone nowadays
            choose online shopping as the most convenient way. There are several
            companies which have a web presence for trading their products and
            services
          </P>

          <P>
            If you plan to sell your products with the maximum number of sales
            and profits, having a presence of the same on the web is going to
            help you reach your goal.
          </P>
          <p>
            <ReadMore>Read More...</ReadMore>
          </p>
        </Col>
        <Col lg="6">
          <img
            src="/services/Ecommerce.jpg"
            alt="MMW web design"
            css={{ maxWidth: "100%" }}
          />
        </Col>
      </Row>
      <Row css={{ marginTop: "60px" }}>
        <Col lg="6">
          <img
            src="/services/seo-service.jpg"
            alt="MMW SEO Services"
            css={{ maxWidth: "100%" }}
          />
        </Col>
        <Col lg="6">
          <H2>SEO</H2>
          <BORDER />
          <P>
            Search Engine Optimization, often known as SEO is one of the main
            marketing channels to endorse website exposure via higher visibility
            in search engines. It is carried out to gain a surge in the website
            traffic. Search Engine Optimization can be performed in two ways.
            Either you can optimize by yourself or hire a search engine
            optimization company for doing it for me. Here, choosing the former
            option may not be promising enough for satisfactory outcomes, while
            choosing the latter is the best choice to get a higher rank for your
            website on search engines, like Google, etcetera.
          </P>
          <p>
            <ReadMore>Read More...</ReadMore>
          </p>
        </Col>
      </Row>

      <Row css={{ marginTop: "60px" }}>
        <Col lg="6" css={{ paddingLeft: "50px" }}>
          <H2>Content Writing</H2>
          <BORDER />
          <P>
            At Make My Website, our experts are well acquainted with all the
            tactics of content writing, to educate your audience in an efficient
            manner.
          </P>

          <P>
            Content is one of the most important marketing concepts. Relevant
            and high-quality content engages more users, giving them the right
            information about your product and brand.
          </P>
          <P>
            A good content directly communicates with your online customers. In
            such a scenario, hiring a content writing company can be a boon for
            your business.
          </P>
          <p>
            <ReadMore>Read More...</ReadMore>
          </p>
        </Col>
        <Col lg="6">
          <img
            src="/services/Content-Marketing-Online-Conc.jpg"
            alt="MMW Content Writing"
            css={{ maxWidth: "100%" }}
          />
        </Col>
      </Row>
      <Row css={{ marginTop: "60px" }}>
        <Col lg="6">
          <img
            src="/services/social-service-mmw.jpg"
            alt="MMW Social Media Marketing"
            css={{ maxWidth: "100%" }}
          />
        </Col>
        <Col lg="6">
          <H2>Social Media Marketing</H2>
          <BORDER />
          <P>
            No matter what you sell and who is your buyer, making use of social
            media as a marketing device can prove very helpful for growing your
            brand. Globally, social media is one of the fastest growing
            industries. And, to increase your brand’s reach and visibility, you
            ought to make the most out of it.
          </P>
          <P>
            Social Media is the best way to communicate with your potential
            customers and building healthy relationships with them. Use of
            extensive social media marketing strategies has led to enormous
            profits and visibility across the globe.
          </P>
          <p>
            <ReadMore>Read More...</ReadMore>
          </p>
        </Col>
      </Row>

      <Row css={{ marginTop: "60px" }}>
        <Col lg="6" css={{ paddingLeft: "50px" }}>
          <H2>Pay Per Click</H2>
          <BORDER />
          <P>
            If you run a business of your own, you will find unending
            competition. The world is certainly brimming with companies and
            businesses. Most of the businesses these days, have a website to
            attract maximum customers. The best part although is, there are many
            ways to enhance your business online.
          </P>

          <P>
            There are tactics that can fetch you great outcomes. Pay Per Click
            is one such way with which you can monetize your website. Make My
            Website knows how to carry out Pay Per Click and how is it going to
            help you. Whatever time suits you, just contact us and we will more
            than happy to address your queries.
          </P>

          <p>
            <ReadMore>Read More...</ReadMore>
          </p>
        </Col>
        <Col lg="6">
          <img
            src="/services/ppc.jpg"
            alt="MMW Pay Per Click"
            css={{ maxWidth: "100%" }}
          />
        </Col>
      </Row>
    </ServiceContainer>
  </PrimaryLayout>
)
export default ourService
