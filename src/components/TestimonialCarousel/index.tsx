import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button, Flex, Icon, Image, Square } from '@chakra-ui/react';
import React from 'react';
//@ts-ignore
import Carousel, { consts } from 'react-elastic-carousel';
import { BiUser } from 'react-icons/bi';
import { PrimaryButton } from '../../components/PrimaryButton';
import { COLORS } from '../../styles/colors';
import styles from './styles/testimonialCarousel.module.css';
import {
  Container,
  FeedbackDescription,
  UserName,
} from './styles/TestimonialCarouselStyled';

interface TestimonialCarouselProps {
  data: Array<{
    id: Number;
    imageUrl: string;
    feedbackContent: string;
    userName: string;
  }>;

  showButton?: boolean;
  allowPadding: boolean;
}

export const TestimonialCarousel = ({
  data,
  showButton,
  allowPadding,
}: TestimonialCarouselProps) => {
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
              style={showButton ? { marginTop: 100 } : { marginTop: 20 }}
            />
          );
        })}
      </Flex>
    );
  };
  return (
    <div className={styles.sliderContainer}>
      <Carousel
        itemsToShow={3}
        itemPadding={allowPadding ? [10, 10] : [0, 0]}
        focusOnSelect={false}
        className="testimonial-carousel"
        renderArrow={customArrow}
        renderPagination={customPagination}
      >
        {data.map((item: any) => {
          return (
            <Container key={item.id}>
              <Image src={item.imageUrl} alt="User image" />

              <FeedbackDescription>{item.feedbackContent}</FeedbackDescription>

              <UserName>- {item.userName}</UserName>
            </Container>
          );
        })}
      </Carousel>

      {showButton && (
        <div className={styles.sliderButton}>
          <PrimaryButton
            buttonText="Sign Up Now"
            showIcon={true}
            icon={<Icon as={BiUser} color={COLORS.white} />}
          />
        </div>
      )}
    </div>
  );
};
