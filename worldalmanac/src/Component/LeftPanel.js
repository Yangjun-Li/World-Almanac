import React from 'react';
import styled from 'styled-components'

import SliderYear from './Common/Slider';
import BasicMap from './Map';

const LeftPanelContainer = styled.div`
    margin: 0;
`;

const SliderContainer = styled.div`
    margin-top: 10px;
`;

const MapContainer = styled.div`
    margin: 50px -60px;
`;

const LeftPanel = () => {
    return (
        <LeftPanelContainer>
            <SliderContainer>
                <SliderYear/>
            </SliderContainer>
            <MapContainer>
                <BasicMap/>
            </MapContainer>
        </LeftPanelContainer>
    );
}

export default LeftPanel;