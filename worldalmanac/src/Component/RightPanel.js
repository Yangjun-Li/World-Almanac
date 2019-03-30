import React from 'react';
import styled from 'styled-components'


const PanelContainer = styled.div`
    width: 650px;
    margin-right: 50px;
    margin-top: 20px;
    background-color: grey;
    text-align: center;
    height: 700px;
`;

class RightPanel extends React.Component {
    render() {
        return (
            <PanelContainer>
                Form is here
            </PanelContainer>
        );
    }
}

export default RightPanel;