import { Box } from '@chakra-ui/react';
import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const HeroSection = styled.section`
  background: url(/assets/hero.png) no-repeat center;
  height: 100vh;
`;

export const FeatureSection = styled.section`
  padding: 40px 20px;
  background: #1a3445;
  width: 100%;
  margin-top: -150px;
  -webkit-box-shadow: 0px 1px 31px 0px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 1px 31px 0px rgba(0, 0, 0, 0.12);
  box-shadow: 0px 1px 31px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchContainer = styled.div`
  width: 65%;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  width: 50%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const Tagline = styled.h2`
  color: ${COLORS.white};
  text-align: center;
  font-weight: 600;
  margin-top: 40px;
  letter-spacing: 1px;
`;

export const TitleWithBackground = styled.div`
  padding: 10px;
  background-color: ${COLORS.primary};
  text-align: center;
`;

export const CollectionCard = styled(Box)`
  background: ${COLORS.white};
  display: flex;
  padding: 2rem;
`;

export const CollectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CollectionTitle = styled.h4`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const StoreContainer = styled.div`
  width: 70%;
  margin: auto;
  padding-bottom: 40px;
`;

export const ReferContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ReferDescription = styled.h4`
  font-weight: 600;
  font-size: 18px;
  color: ${COLORS.primary};
  padding: 20px 0;
  margin-bottom: 30px;
`;

export const ReferProcessContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ReferProcessText = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 400;
`;

export const ReferFormContainer = styled.div`
  width: 35%;
  margin: 50px auto;
`;
