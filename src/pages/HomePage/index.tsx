import { Button } from '@chakra-ui/core';
import styled from 'styled-components';
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
  height: 75vh;
`;

export const HomePage = (props: any) => {
  return (
    <>
      <HeroSection>
        <NavBar isLoggedIn={false} />
      </HeroSection>

      <p>Content from homepage..</p>
      <PrimaryButton variantColor="primary">Send Code</PrimaryButton>
    </>
  );
};
