import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Container } from '../Container';
import { PrimaryButton } from '../PrimaryButton';

const createCarouselItemImage = (index, options = {}) => (
  <div key={index}>
    <img src={`/assets/${index}.jpeg`} />
    <p className="legend">Legend {index}</p>
  </div>
);

const baseChildren = <div>{[1, 2, 3, 4, 5].map(createCarouselItemImage)}</div>;

const SliderImage = styled.img`
  width: 50% !important;
`;

const SliderControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export class ExternalControlledCarousel extends Component<
  {},
  { currentSlide: number }
> {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
  }

  next = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide + 1,
    }));
  };

  prev = () => {
    this.setState((state) => ({
      currentSlide: state.currentSlide - 1,
    }));
  };

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
        currentSlide: index,
      });
    }
  };

  render() {
    return (
      <Container>
        <Carousel
          autoPlay={true}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          {...this.props}
        >
          {/* {baseChildren.props.children} */}
          <SliderImage src="/assets/hero_carousel_image_01.png" />
          <SliderImage src="/assets/hero_carousel_image_01.png" />
        </Carousel>

        <SliderControls>
          <PrimaryButton buttonText="More Info" />
          <ButtonGroup spacing={4}>
            <IconButton
              colorScheme="primary"
              variant="outline"
              onClick={this.prev}
              aria-label="Previous"
              icon={<ChevronLeftIcon />}
              size="sm"
            />

            <IconButton
              colorScheme="primary"
              variant="outline"
              onClick={this.next}
              aria-label="Next"
              icon={<ChevronRightIcon />}
              size="sm"
            />
          </ButtonGroup>
        </SliderControls>
      </Container>
    );
  }
}
