import React from 'react';
import styled from 'styled-components'

import SliderYear from './Slider';

const PanelContainer = styled.div`
    width: 350px;
    padding-right: 100px;
    margin-top: 20px;
`;

class RightPanel extends React.Component {
    render() {
        return (
            <PanelContainer>
                <SliderYear/>
            </PanelContainer>
        );
    }
}

export default RightPanel;