import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return (
        <Container>
            <Section
             title="Model S"
             description="Order Online for Toouchless Deliivery"
             backgroundImg="model-s.jpg"
             leftBtnText="Custom order"
             rightBtnText="Existing inventory"
            />
            <Section
            title="Model Y"
            description="Order Online for Toouchless Deliivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            />
            <Section
            title="Model 3"
            description="Order Online for Toouchless Deliivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            />
            <Section
            title="Model X"
            description="Order Online for Toouchless Deliivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing inventory"
            />
        </Container>
    )
}

export default Home

const Container = styled.div``
