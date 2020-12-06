import { Image } from '@chakra-ui/core';
import styled from 'styled-components';
import { ExternalControlledCarousel } from '../../components/Carousel';
import { Container } from '../../components/Container';
import { NavBar } from '../../components/NavBar';
import { SearchBar } from '../../components/SearchBar';

const HeroSection = styled.section`
  background: url(/assets/hero.png) no-repeat center;
  height: 100vh;
`;

const FeatureSection = styled.section`
  padding: 40px 20px;
  background: #1a3445;
  width: 100%;
  margin-top: -150px;
  -webkit-box-shadow: 0px 1px 31px 0px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 1px 31px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 1px 31px 0px rgba(0, 0, 0, 0.12);
`;

const SearchContainer = styled.div`
  width: 65%;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  width: 50%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Tagline = styled.h2`
  color: white;
  text-align: center;
  font-size: 20;
  font-weight: 600;
  margin-top: 40px;
`;

export const HomePage = (props: any) => {
  return (
    <>
      <HeroSection>
        <NavBar isLoggedIn={false} />
        <ExternalControlledCarousel />
      </HeroSection>

      <>
        <Container>
          <FeatureSection>
            <SearchContainer>
              <SearchBar placeholder="Product url for request" />
            </SearchContainer>
            <LogoContainer>
              <Image
                src="assets/amazon-logo.png"
                width={60}
                style={{ margin: '0px 15px' }}
              />
              <Image
                src="assets/ebay-logo.png"
                width={60}
                style={{ margin: '0px 15px' }}
              />
              <Image
                src="assets/hp-logo.png"
                width={25}
                style={{ margin: '0px 15px' }}
              />
              <Image
                src="assets/walmart-logo.png"
                width={90}
                style={{ margin: '0px 15px' }}
              />
              <Image
                src="assets/world-logo.png"
                width={25}
                style={{ margin: '0px 15px' }}
              />
            </LogoContainer>
            <Tagline>Shop Anywhere, Travel Everywhere</Tagline>
          </FeatureSection>
        </Container>
      </>
    </>
  );
};
