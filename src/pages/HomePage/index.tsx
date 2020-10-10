import { Button } from '@chakra-ui/core';
import styled from 'styled-components';
import { ExternalControlledCarousel } from '../../components/Carousel';
import { NavBar } from '../../components/NavBar';

export const PrimaryButton = styled(Button)`
  border-radius: 28px !important;
  padding-left: 30px;
  padding-right: 30px;
  -webkit-box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.31);
`;

const HeroSection = styled.section`
  background: url(/assets/hero.png) no-repeat center;
  height: 100vh;
`;

export const HomePage = (props: any) => {
  return (
    <>
      <HeroSection>
        <NavBar isLoggedIn={false} />
        <ExternalControlledCarousel />
      </HeroSection>

      <p>Content from homepage..</p>
      <PrimaryButton variantColor="primary" variant="solid">
        Send Code
      </PrimaryButton>
    </>
  );
};
