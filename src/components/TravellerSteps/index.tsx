import { Image } from '@chakra-ui/react';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

interface TravellerStepsProps {
  data: Array<{
    step: string;
    imageUrl: string;
    title: string;
    description: string;
  }>;
}

export const TravellerSteps = ({ data }: TravellerStepsProps) => {
  return (
    <Container>
      {data &&
        data.map((item: any, index: any) => {
          return (
            <ItemContainer
              key={item.step}
              style={{
                borderLeft:
                  index === 0 ? 'none' : `1px solid ${COLORS.borderColor}`,
              }}
            >
              <StepContainer>
                <Step>{item.step}</Step>
              </StepContainer>
              <Image src={item.imageUrl} alt="bla" width="25%" />
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </ItemContainer>
          );
        })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%auto;
`;

const ItemContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const StepContainer = styled.div`
  align-self: flex-start;
  width: 30px;
  height: 30px;
  border: 1px solid ${COLORS.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 50px;
`;

const Step = styled.p`
  font-weight: 800;
`;

const Title = styled.h3`
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Description = styled.p`
  text-align: center;
  width: 45%;
`;
