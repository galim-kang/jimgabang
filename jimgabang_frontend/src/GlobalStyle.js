import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Thin';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
    font-weight: 400;
    font-style: Thin;
}
@font-face {
  font-family: 'Pretendard-Regular';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Pretendard-Black';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
  font-weight: 400;
  font-style: Black;
}
*{
  font-family: 'Pretendard-Regular', Arial, sans-serif;

}
  body {
    margin: 0;
    padding: 0;
  }
  
  section {
    display:flex;
    padding-bottom:100px;
    justify-content:space-between;
  }
  
  article {
    display:flex;
    flex-direction:column;
    align-items:center;
    width:25%;
    padding: 30px;
    text-align:center;

  }
  h1 {
    font-family: 'Pretendard-Black';
    text-align:center;
    font-size:100px;
    margin-left:20px;
    letter-spacing:-8px;
  }
  h2 {
    text-align:center;
    font-size:80px;
    margin:0;
  }
  nav {
    display:flex;
    justify-content:space-between;
    margin-right:20px;
  }
  span {
    
    font-size:30px;
    padding : 0 20px;
  }
  button{
  font-family: 'Pretendard-Black';
    padding:10px 100px;
    margin:40px 0;
    border: unset;
    color: black;
    z-index: 1;
    background: white;
    position: relative;
    font-size: 120px;
    -webkit-box-shadow: 1px 2px 10px -1px grey;
    transition: all 250ms;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      background-image: linear-gradient(135deg, #ea5455 20%, #feb692 100%);
      z-index: -1;
      -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
      transition: all 250ms;
    }
    &:hover {
      color: white;
    }
    &:hover:before {
      width: 100%;
    }
    
  }

`;
export default GlobalStyle;
