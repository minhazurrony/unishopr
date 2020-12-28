import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

interface FAQProps {
  data: Array<{ id: string; question: string; answer: string }>;
}

export const FAQ = ({ data }: FAQProps) => {
  return (
    <Accordion allowToggle>
      {data &&
        data.map((item: { id: string; question: string; answer: string }) => {
          return (
            <AccordionItem key={item.id}>
              <AccordionButton>
                <Box flex="1" textAlign="center">
                  <Question>{item.question}</Question>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Answer>{item.answer}</Answer>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
    </Accordion>
  );
};

const Question = styled.h3`
  width: 50%;
  margin: auto;
  font-size: 18px;
  font-weight: 500;
  color: ${COLORS.primary};
  padding: 10px 0;
`;

const Answer = styled.p`
  width: 50%;
  margin: auto;
  font-size: 16px;
  padding: 10px 0;
`;
