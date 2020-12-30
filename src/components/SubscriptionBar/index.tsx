import { Input, InputGroup } from '@chakra-ui/react';
import styled from 'styled-components';
import { COLORS } from '../../../src/styles/colors';
import { PrimaryButton } from '../PrimaryButton';

const SubscriptionInput = styled(Input)`
  border-radius: 20px !important;
  background-color: ${COLORS.white};
  border: none;
  :focus {
    border-color: ${COLORS.primary};
    box-shadow: 0 0 0 1px ${COLORS.primary};
  }
`;

const Container = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  margin-left: -75px;
  z-index: 1;
`;

interface SubscriptionBarProps {
  placeholder: string;
}

export const SubscriptionBar = ({ placeholder }: SubscriptionBarProps) => {
  return (
    <Container>
      <InputGroup style={{ flex: 1 }}>
        <SubscriptionInput placeholder={placeholder} />
      </InputGroup>
      <ButtonContainer>
        <PrimaryButton buttonText="Subscribe"></PrimaryButton>
      </ButtonContainer>
    </Container>
  );
};
