import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

interface TitleContainerProps {
  smallTitle: string;
  mainTitleLeft: string;
  mainTitleRight: string;
  mainTitleLeftColor?: string;
  mainTitleRightColor?: string;
  backgroundColor?: string;
  smallTitleColor?: string;
}

const TitleContainer = ({
  smallTitle,
  mainTitleLeft,
  mainTitleRight,
  mainTitleLeftColor,
  mainTitleRightColor,
  backgroundColor,
  smallTitleColor,
}: TitleContainerProps) => {
  return (
    <Container
      style={{
        backgroundColor: backgroundColor ? backgroundColor : 'transparent',
      }}
    >
      <SmallTitle
        style={{
          color: smallTitleColor ? smallTitleColor : COLORS.secondaryTitleDark,
        }}
      >
        {smallTitle}
      </SmallTitle>
      <BigTitle>
        <span
          style={{
            color: mainTitleLeftColor ? mainTitleLeftColor : COLORS.primary,
          }}
        >
          {mainTitleLeft}
        </span>
        <span
          style={{
            color: mainTitleRightColor ? mainTitleRightColor : COLORS.secondary,
          }}
        >
          {' '}
          {mainTitleRight}
        </span>
      </BigTitle>
    </Container>
  );
};

export default TitleContainer;

const Container = styled.div`
  text-align: center;
  padding: 40px;
  line-height: 1.2;
`;

const SmallTitle = styled.h3`
  font-weight: 600;
  font-size: 14px;
  opacity: 0.5;
  letter-spacing: 1.5px;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
`;

const BigTitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
`;
