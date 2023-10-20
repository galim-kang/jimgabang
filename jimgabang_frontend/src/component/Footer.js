import styled from "styled-components";

const FooterContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-image: linear-gradient(135deg, #ea5455 20%, #feb692 100%);
  color: white;
  padding-bottom: 80px;
`;

function Footer() {
  return (
    <FooterContainer>
      <article>
        <h2>1</h2>
        <span>something</span>
        <span>something</span>
        <span>something</span>
      </article>
      <article>
        <h2>2</h2>
        <span>something</span>
        <span>something</span>
        <span>something</span>
      </article>
      <article>
        <h2>3</h2>
        <span>something</span>
        <span>something</span>
        <span>something</span>
      </article>
      <article>
        <h2>4</h2>
        <span>something</span>
        <span>something</span>
        <span>something</span>
      </article>
    </FooterContainer>
  );
}
export default Footer;
