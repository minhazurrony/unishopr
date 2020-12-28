import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const Container = styled.div`
  padding: 15px;
  border-bottom: 1px solid ${COLORS.borderColor};
  min-height: 350px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  :focus {
    outline: none;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.secondary};
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Amount = styled.p`
  font-weight: 500;
`;
