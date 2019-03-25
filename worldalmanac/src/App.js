import React, { Component } from 'react';
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';

import Header from './Common/Header';
import Footer from './Common/Footer';
import BasicMap from './Map';

import { MainPage_Header } from './Static/Ui';

const Section = styled.div`
      box-sizing: border-box;
      width: 980px;
      margin-top: 100px;
      margin-left: 0;
  `;

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header text={ReactHtmlParser(MainPage_Header)}/>
        <Section>
          <BasicMap/>
        </Section>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
