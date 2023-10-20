import { React, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  background-image: linear-gradient(135deg, #ea5455 20%, #feb692 100%);
  color: white;
`;
function Header() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <HeaderContainer>
      <h1>jimgabang</h1>
      <nav>
        <span>Switch to hoting</span>
        {isLogin ? (
          <>
            <span>My</span>
            <span>Login</span>
          </>
        ) : (
          <span>LogOut</span>
        )}
      </nav>
    </HeaderContainer>
  );
}
export default Header;
