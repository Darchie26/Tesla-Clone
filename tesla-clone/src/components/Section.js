import React from 'react'
import styled from "styled-components"

function Section() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>order online for touchless deleivery</p>
            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    Custom Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
                </ButtonGroup>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
 width: 100vw;
 height: 100vh;
 background-size: cover;
 background-position: center;
 background-repeat: not-repeat;
 display: flex;
 flex-direction: column;
 justify-content: space-between; //vertical alignment
 align-items:  center; // horizontal alignment
 background-image: url('/images/model-s.jpg')
 
`
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom:30px;
`

const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px
opacity: 0.85;
text-transform: uppercase;
cursor: pointer;
`


const RightButton = styled(LeftButton)``
