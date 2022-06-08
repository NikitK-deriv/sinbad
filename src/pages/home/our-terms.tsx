import React from 'react'
import styled from 'styled-components'
import {
    Term0,
    Term1,
    Term2,
    Term3,
    Term4,
    Term5,
    Term6,
    Term7,
    OurTermsSinbad,
    OurTermsBackground,
} from 'images/common/homepage/our-terms'
import { Header, ImageContainer } from 'components/containers'
import Table from 'components/containers/table'
import { ContainerWrapper } from 'components/containers/common/style'
import device from 'themes/device'

type StyledTextProps = {
    font_family?: string
}

/* stylelint-disable */

const OurTermsContainerWrapper = styled(ContainerWrapper)`
    padding: 50px 0;

    @media ${device.laptopM} {
        flex-wrap: wrap;
    }
`

const OurTermsContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-sand-1);
    background-image: url(${OurTermsBackground});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right 35% bottom 0%;
`

const TermsTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    padding: 30px 0 30px 50px;
`
const OurTermsTable = styled.div<StyledTextProps>`
    font-size: 3.8rem;
    line-height: 53px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    text-align: left;
`

const TermsAndSinbadContainer = styled.div`
    padding-top: 120px;
    display: flex;
`

const StyledHeader = styled.div<StyledTextProps>`
    max-width: 425px;
    font-size: 4.8rem;
    line-height: 53px;
    color: var(--color-black-3);
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding: 10px 0 20px;
`

const StyledText = styled.div<StyledTextProps>`
    max-width: 350px;
    font-size: 1.6rem;
    line-height: 27px;
    color: var(--color-black-3);
    font-weight: 320;
    font-family: ${(props) => props.font_family || 'Poppins'};
    text-align: left;
    padding-bottom: 10px;
`

const StyledDescription = styled.div<StyledTextProps>`
    max-width: 480px;
    font-size: 2.4rem;
    line-height: 33px;
    color: var(--color-sand-4);
    font-weight: 560;
    font-family: ${(props) => props.font_family || 'Maven Pro Bold'};
    text-align: left;
    padding-bottom: 120px;

    @media ${device.laptopM} {
        padding-bottom: 0px;
    }
`

const StyledSSHeader = styled.div`
    display: flex;
    flex-direction: row;
    white-space: nowrap;
`

const StyledSSText = styled.div<StyledTextProps>`
    padding: unset;
    color: var(--color-sand-4);
    font-size: 3.8rem;
    line-height: 61px;
    font-weight: 640;
    font-family: ${(props) => props.font_family || 'Maven Pro'};
    padding-right: 5px;
`

const SinbadImage = styled(ImageContainer)`
    max-width: 270px;
    object-fit: scale-down;

    @media ${device.tablet} {
        display: none;
    }
`

const TableTitle = styled(Header)`
    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        padding: 10px;
    }
`

const data = {
    first_column: [
        {
            icon: Term0,
            text: 'Mobile App development',
        },
        {
            icon: Term1,
            text: 'Full-stack Development',
        },
        {
            icon: Term2,
            text: 'UI/UX',
        },
        {
            icon: Term3,
            text: 'Business Intelligence',
        },
    ],

    second_column: [
        {
            icon: Term4,
            text: 'Quantitative Analysis',
        },
        {
            icon: Term5,
            text: 'Data Science',
        },
        {
            icon: Term6,
            text: 'DevOps',
        },
        {
            icon: Term7,
            text: 'Quality Assurance',
        },
    ],
}

const OurTerms = () => {
    return (
        <OurTermsContainer>
            <OurTermsContainerWrapper>
                <TermsTextContainer>
                    <StyledSSHeader>
                        <StyledSSText font_family="Maven Pro Bold">Sinbad </StyledSSText>
                        <StyledSSText> Software</StyledSSText>
                    </StyledSSHeader>
                    <StyledHeader>Revolutionising fintech needs amazing software</StyledHeader>
                    <StyledText>
                        Our mission is to develop world-class fintech software solutions taht will
                        give our clients a cutting edge.
                    </StyledText>
                    <StyledText>
                        With a deep undestanding of the fintech industry and a talented team, we are
                        ready to provide clients around the world with they need - from custom
                        software to mobile applications, websites, web applications, information
                        architecture, and more.
                    </StyledText>
                    <StyledDescription>
                        Where others see gaps, we see an opportunity to build a powerhouse
                    </StyledDescription>
                </TermsTextContainer>
                <TermsAndSinbadContainer>
                    <SinbadImage src={OurTermsSinbad} />,
                    <OurTermsTable>
                        <TableTitle>Our Terms</TableTitle>
                        <Table data={data} />
                    </OurTermsTable>
                </TermsAndSinbadContainer>
            </OurTermsContainerWrapper>
        </OurTermsContainer>
    )
}

export default OurTerms
