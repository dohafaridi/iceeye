import React from "react";

import storeProvider from "./hoc/storeProvider";
import Header from "./components/Header";
import Circle from "./components/Circle";
import User from "./components/User";
import Footer from "./components/Footer";
import { ICEEYE_SLOGAN, ICEEYE_LOGO_WIDTH, ICEEYE_DEMO_URL } from "./constants";
import "./App.css";
import logo from "./assets/logo.svg";

const logoProps = {
  src: logo,
  width: ICEEYE_LOGO_WIDTH,
  alt: ICEEYE_SLOGAN
};
const homeLinkProps = {
  title: ICEEYE_SLOGAN,
  href: ICEEYE_DEMO_URL
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header logo={logoProps} homeLink={homeLinkProps} />
        <main className="main">
          <div className="container">
            <Circle />
            <User />
          </div>
        </main>
        <Footer text={ICEEYE_SLOGAN} />
      </div>
    );
  }
}

export default storeProvider(App);
