import React, { Component } from "react";
import Search from '../pages/search'

// muicss
import Container from "muicss/lib/react/container";
import Appbar from "muicss/lib/react/appbar";
import Panel from "muicss/lib/react/panel";

import './App.scss';

class App extends Component {
  render() {

    return (
      <main>
        <Appbar className="app-bar">
        <div className="mui-container">
          <section>
            <div className="mui--appbar-height app-bar__logo-box">
              <div className="mui--text-title">
              <a href="https://www.wikipedia.org/" target="_blank">
                  <img
                    className="app-bar__brand-logo"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/206px-Wikipedia-logo-v2.svg.png"
                    alt="wikipedia logo"
                  />
                </a>
              </div>
              <div className="mui--text-right app-bar__title"> 
                Wikipedia
              </div>
            </div>
          </section>
        </div>

        </Appbar>
        <div className="mui--appbar-height" />
        <Container>
          <Panel className="panel-container">
            <Search />
          </Panel>
        </Container>
      </main>
    );
  }
}

export default App;
