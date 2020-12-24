import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';

export const Container = styled.div`
  padding: 0 15px;
  background: white;
  min-height: 500px;
  border-radius: 5px;
  text-align: center;
  :focus {
    outline: none;
  }
`;

export const FeedbackDescription = styled.p`
  font-size: 16px;
  font-weight: normal;
`;

export const UserName = styled.p`
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
  color: ${COLORS.secondary};
`;
