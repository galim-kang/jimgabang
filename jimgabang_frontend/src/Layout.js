import { styled } from "styled-components";

import Header from "./component/Header";
import Footer from "./component/Footer";

const Content = styled.div``;

function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
export default Layout;
