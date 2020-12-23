import { Box, Image } from '@chakra-ui/core';
import React from 'react';
import Carousel from 'react-elastic-carousel';
import { PrimaryButton } from '../../components/PrimaryButton';
import styles from './styles/testimonialCarousel.module.css';

interface TestimonialCarouselProps {
  data: Array<{
    id: Number;
    imageUrl: string;
    feedbackContent: string;
    userName: string;
  }>;
}

export const TestimonialCarousel = ({ data }: TestimonialCarouselProps) => {
  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <div className={styles.sliderContainer}>
      <Carousel itemsToShow={3} itemPadding={[10, 10]}>
        {data.map((item: any) => {
          return (
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={item.id}
            >
              <Image src={item.imageUrl} alt="User image" />

              <Box p="6">
                <Box d="flex" alignItems="baseline">
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {property.beds} beds &bull; {property.baths} baths
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {item.feedback}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Carousel>
      <div className={styles.sliderButton}>
        <PrimaryButton buttonText="Sign Up" />
      </div>
    </div>
  );
};
