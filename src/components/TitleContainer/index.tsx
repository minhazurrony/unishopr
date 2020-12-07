import React from 'react';
import styled from 'styled-components';

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
      style={{ backgroundColor: backgroundColor ? backgroundColor : 'white' }}
    >
      <SmallTitle
        style={{ color: smallTitleColor ? smallTitleColor : ' #494947' }}
      >
        {smallTitle}
      </SmallTitle>
      <BigTitle>
        <span
          style={{
            color: mainTitleLeftColor ? mainTitleLeftColor : '#d1545b',
          }}
        >
          {mainTitleLeft}
        </span>
        <span
          style={{
            color: mainTitleRightColor ? mainTitleRightColor : '#0e2b3d',
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
`;

const BigTitle = styled.h2`
  font-weight: 700;
  font-size: 30px;
`;
