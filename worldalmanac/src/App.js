import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './Common/Header';
import Footer from './Common/Footer';
import BasicMap from './Map';

const Section = styled.div`
      width: 980px;
      margin-top: 100px;
      margin-left: auto;
      margin-right: auto;
  `;

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header text="世界年鉴"/>
        <Section>
          <BasicMap/>
        </Section>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
