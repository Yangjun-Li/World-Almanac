import React, { Component } from 'react';
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';

import Header from './Common/Header';
import Footer from './Common/Footer';
import LeftPanel from './LeftPanel';
import RightPanel from './Common/RightPanel';

import { MainPage_Header } from '../Static/Ui';

const Section = styled.div`
      box-sizing: border-box;
      width: 100%;
      margin-left: 0;
      display: flex;
      justify-content: space-between;
  `;

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header text={ReactHtmlParser(MainPage_Header)}/>
        <Section>
          <LeftPanel/>
          <RightPanel/>
        </Section>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
