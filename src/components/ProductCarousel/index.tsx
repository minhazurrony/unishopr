import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Image, Square } from '@chakra-ui/react';
import React, { useState } from 'react';
//@ts-ignore
import Carousel, { consts } from 'react-elastic-carousel';
import { takaSymbol } from '../../constants';
import { COLORS } from '../../styles/colors';
import { formatMoney } from '../../utility';
import { WishlistButton } from '../WishlistButton';
import {
  Amount,
  BottomContainer,
  Container,
  Title,
} from './styles/productCarouselStyled';
import styles from './styles/productCarouselStyles.module.css';

interface ProductCarouselProps {
  data: Array<{
    id: Number;
    title: string;
    imageUrl: string;
    price: string;
  }>;
}

export const ProductCarousel = ({ data }: ProductCarouselProps) => {
  const [wishtList, setWishtList] = useState(false);
  const customArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <ChevronLeftIcon w={6} h={6} />
      ) : (
        <ChevronRightIcon w={6} h={6} />
      );
    return (
      <Button
        onClick={onClick}
        disabled={isEdge}
        className={styles.customArrowButton}
        variant="outline"
        colorScheme="primary"
      >
        {pointer}
      </Button>
    );
  };

  const customPagination = ({ pages, activePage, onClick }) => {
    return (
      <Flex direction="row">
        {pages.map((page) => {
          const isActivePage: Boolean = activePage === page;
          return (
            <Square
              key={page}
              //@ts-ignore
              onClick={() => onClick(page)}
              active={isActivePage.toString()}
              className={
                pages[activePage] === page
                  ? styles.carouselControlActive
                  : styles.carouselControl
              }
            />
          );
        })}
      </Flex>
    );
  };
  return (
    <div className={styles.sliderContainer}>
      <Carousel
        itemsToShow={4}
        focusOnSelect={false}
        className="testimonial-carousel"
        renderArrow={customArrow}
        renderPagination={customPagination}
      >
        {data.map((item: any, index: any) => {
          return (
            <Container
              key={item.id}
              style={{
                borderLeft:
                  index === 0 ? 'none' : `1px solid ${COLORS.borderColor}`,
              }}
            >
              <Title>{item.title}</Title>
              <div style={{ margin: 'auto' }}>
                <Image src={item.imageUrl} alt="User image" />
              </div>

              <BottomContainer>
                <Amount>
                  {`${takaSymbol}`} {formatMoney(item.price)}
                </Amount>
                <WishlistButton
                  addedToWishtlist={wishtList}
                  handleButtonClick={() => setWishtList(!wishtList)}
                />
              </BottomContainer>
            </Container>
          );
        })}
      </Carousel>
    </div>
  );
};
