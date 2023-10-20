import { React, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes";

import Map from "./screen/Map";
import Landing from "./screen/Landing";
import LoginSinUp from "./screen/LoginSignUp";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <Router>
      <Routes>
        <Route
          path={routes.map}
          element={isLogin ? <Map /> : <LoginSinUp />}
        ></Route>
        <Route path={routes.landing} element={<Landing />}></Route>
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
