import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayouts"
import { Row, Col, Container } from "react-bootstrap"
import styled from "@emotion/styled"
import Accordion from "../templates/faq"
import { css } from "@emotion/core"

const P = styled.p({
  lineHeight: "28px",
  marginTop: "0px",
  marginBottom: "15px",
})
const Title = styled.h1({
  textAlign: "center",
  fontWeight: "500",
})

const Faq = () => (
  <PrimaryLayout>
    <Container>
      <Row>
        <Col>
          <br></br>
          <br></br>
          <br></br>
          <Title>FAQ's</Title>
          <img
            src="/devider.png"
            alt="devider"
            style={{ margin: "auto", display: "block" }}
          />
          <br></br>
          <br></br>
          <br></br>
          <Accordion title="What we do?">
            <P>
              Make My Website specialise in designing, developing and
              advertising websites for small to medium organisations all over
              Australia. We also provide hosting service, domain registration
              and online marketing solutions. We can build outstanding websites
              for every sort of business. We’re pioneers in our industry, giving
              outstanding services and outcome at minimal cost. Websites we
              build don’t just look beautiful, they’re also designed with the
              goal that you can get the most out of your site. Also, once the
              website is live, we continue to work effectively with you to
              accomplish your business objectives and online goals.
            </P>
          </Accordion>
          <Accordion title="	Is Make My website a right company for my budget?">
            <P>
              Our websites range start from $599 and can reach to $8,000 or
              more. It completely depends upon the customer requirements. We
              deliver more than what we promised and always exceeded customer
              expectations. We are proud to be the right choice for small to
              medium businesses. Your every dollar is invested to give your
              business an online presence with researches keywords so that your
              clients can reach you easily.
            </P>
            <P>
              Our Prices are always in your budget, MMW offers affordable costs
              with better websites.
            </P>
          </Accordion>
          <Accordion title="		What's included in Website build by Make My Website?">
            <P>
              Whether you want us to build a new website or rebuild or upgrade
              the existing website, we are happy to assist you. We provide
              multiple design packages that ideally cater to the needs of a wide
              range of small and medium size to enterprise level website design
              projects.
            </P>
            <P>Our websites include (as per customer requirements) :</P>
            <ul>
              <li>Web pages</li>
              <li>Responsive Designs</li>
              <li>Stock Images</li>
              <li>Smart phone,Call to Action</li>
              <li>Enquiry Form</li>
              <li>Social Media Icons</li>
              <li>Content Upload</li>
              <li>Photo Gallery</li>
              <li>Slider</li>
              <li>On Page SEO</li>
              <li>Custom Form</li>
              <li>Google Map Integration</li>
              <li>Blog</li>
              <li>News Letter Sign Up</li>
              <li>Testimonials</li>
              <li>Upgraded Graphic Buttons with Hover Transitions</li>
              <li>Content Styling and Graphics</li>
              <li>Shopping Cart</li>
              <li>Payment Gateway</li>
              <li>Site Search</li>
              <li>Products</li>
              <li>Client Login</li>
              <li>Product Ratings</li>
            </ul>
          </Accordion>
          <Accordion title="	Where are we based?">
            <P>
              We’re a Melbourne based company, with an office at 129A, Watton
              Street, Werribee, Victoria. We have been catering to clients all
              over Australia as we have our presence in almost every state of
              Australia, including the major cities like Sydney, Brisbane,
              etcetera. We would be more than happy to assist you at our office
              in Werribee, or else we are just a call away to create your dream
              website.
            </P>
          </Accordion>
          <Accordion title="	Do MMW build all the websites on WordPress?">
            <P>
              No, We build websites on all platforms. However, we recommend
              WordPress because this is most powerful, CMS robust that gives our
              developers and our clients to have control over websites. If you
              want your website to work optimally and perform well on google,
              WordPress will be the right choice for you.
            </P>
          </Accordion>
          <Accordion title="Is it possible to make changes once the website is live?">
            <P>
              Yes, Of course! You can do minor changes by yourself. You can add
              pictures, add/change text, modify minor designing. We will assist
              you with how to manage your website by yourself.
            </P>
            <P>
              But In case, if you want us to manage your website. We would be
              more than happy to do it for you. Our monthly charges will be $50
              per month.
            </P>
          </Accordion>
          <Accordion title="	Do you design Logo too? Is Logo Important?">
            <P>
              Yes, we do create a incredible logo for your business or brand at
              a very minimal cost. And Logo is very important because it
              represents recognition to your organisation.
            </P>
          </Accordion>
          <Accordion title="What are MMW payment plans?">
            <P>
              We charge 50% of the amount quoted at the commencement of your
              website and will charge rest 50% amount on the completion of your
              website but once you will be fully satisfied with your website.
            </P>
          </Accordion>
          <Accordion title="Can you Upgrade/re-build my existing website?">
            <P>
              Absolutely, We can do that. We ensure we will come up far better
              and outstanding website.
            </P>
          </Accordion>
          <Accordion title="	Is it necessary to host a website with MMW?">
            <P>
              No, it’s not necessary. However, we prefer our customers to host
              their websites with MMW so that we can provide the continuous
              management and security of your website. It will be our
              responsibility to make sure working of your website and all server
              related issues.
            </P>
          </Accordion>
        </Col>
      </Row>
    </Container>
  </PrimaryLayout>
)

export default Faq
