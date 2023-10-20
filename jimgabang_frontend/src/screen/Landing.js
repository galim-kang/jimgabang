import { Link } from "react-router-dom";
import styled from "styled-components";

import Layout from "../Layout";

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const LandingSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 70%;
  margin: 40px 0;
`;

const ImageBox = styled.div`
  margin-top: 10px;
  width: 150px;
  height: 200px;
  background-color: grey;
`;

const SubText = styled.div`
  margin: 30px 0;
  font-size: 30px;
`;

function Landing() {
  return (
    <Layout>
      <LandingContainer>
        <LandingSection>
          <h2>The easiest way to store luggage anywhere</h2>
          <SubText>
            find a luggage storage location near you and book in seconds
          </SubText>
          <Link to="/">
            <button>start</button>
          </Link>
        </LandingSection>
        <LandingSection>
          <h2>Store your bags in a few clicks!</h2>
          <section>
            <article>
              <span>step1</span>
              <ImageBox>icon1</ImageBox>
              <h2>Locate</h2>
              <span>Find a luggage storage location near you</span>
            </article>
            <article>
              <span>step2</span>
              <ImageBox>icon2</ImageBox>
              <h2>Book</h2>
              <span>Proceed with online booking</span>
            </article>
            <article>
              <span>step3</span>
              <ImageBox>icon3</ImageBox>
              <h2>Store</h2>
              <span>Store your suitcases</span>
            </article>
            <article>
              <span>step4</span>
              <ImageBox>icon4</ImageBox>
              <h2>Enjoy</h2>
              <span>Enjoy your hands-free journey</span>
            </article>
          </section>
        </LandingSection>
        <LandingSection>
          <h2>Register your storage</h2>
          <button>register</button>
        </LandingSection>
      </LandingContainer>
    </Layout>
  );
}

export default Landing;
