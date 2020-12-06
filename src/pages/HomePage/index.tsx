import { Box, Grid, Icon, Image } from '@chakra-ui/core';
import { ExternalControlledCarousel } from '../../components/Carousel';
import { Container } from '../../components/Container';
import { NavBar } from '../../components/NavBar';
import { SearchBar } from '../../components/SearchBar';
import {
  BigTitle,
  ContentWrapper,
  FeatureSection,
  HeroSection,
  LogoContainer,
  SearchContainer,
  SmallTitle,
  Tagline,
  TitleContainer,
  TitleWithBackground,
} from './styles/HomeStyled';
import styles from './styles/homeStyles.module.css';

export const HomePage = () => {
  return (
    <>
      <HeroSection>
        <NavBar isLoggedIn={false} />
        <ExternalControlledCarousel />
      </HeroSection>

      <>
        <Container>
          <ContentWrapper>
            <FeatureSection>
              <SearchContainer>
                <SearchBar placeholder="Product url for request" />
              </SearchContainer>
              <LogoContainer>
                <Image
                  src="assets/amazon-logo.png"
                  width={60}
                  style={{ margin: '0px 15px' }}
                />
                <Image
                  src="assets/ebay-logo.png"
                  width={60}
                  style={{ margin: '0px 15px' }}
                />
                <Image
                  src="assets/hp-logo.png"
                  width={25}
                  style={{ margin: '0px 15px' }}
                />
                <Image
                  src="assets/walmart-logo.png"
                  width={90}
                  style={{ margin: '0px 15px' }}
                />
                <Image
                  src="assets/world-logo.png"
                  width={25}
                  style={{ margin: '0px 15px' }}
                />
              </LogoContainer>
              <Tagline>Shop Anywhere, Travel Everywhere</Tagline>
            </FeatureSection>

            {/* how it works container starts here */}
            <TitleContainer>
              <SmallTitle>How it all works?</SmallTitle>
              <BigTitle>
                <span className={styles.primary}>Things can't get</span>
                <span className={styles.secondary}> any simpler!</span>
              </BigTitle>
            </TitleContainer>
            <TitleWithBackground>
              <h3 className={styles.shopper}>Shopper</h3>
            </TitleWithBackground>

            <Grid templateColumns="repeat(4, 1fr)">
              <Box w="100%" p={20} bg="white" className={styles.box}>
                <Image src="assets/copy.png" className={styles.image} />
                <p className={styles.description}>
                  Copy the link of product from any online shop
                </p>
              </Box>
              <Box w="100%" p={20} bg="white" className={styles.box}>
                <Image src="assets/paste.png" className={styles.image} />
                <p className={styles.description}>Paste the link in our site</p>
              </Box>
              <Box w="100%" p={20} bg="white" className={styles.box}>
                <Image src="assets/shopping-bag.png" className={styles.image} />
                <p className={styles.description}>Request for the product</p>
              </Box>
              <Box w="100%" p={20} className={styles.lastBox}>
                <Image
                  src="assets/shopping-cart.png"
                  className={styles.image}
                />
                <p className={styles.lastDescription}>
                  Review Price & add to cart
                </p>
              </Box>
            </Grid>

            {/* price container starts here */}
            <TitleWithBackground style={{ padding: '20px 0' }}>
              <SmallTitle style={{ color: 'white' }}>
                Price breakdown
              </SmallTitle>
              <BigTitle>
                <span className={styles.pricePrimary}>We are not</span>
                <span className={styles.priceSecondary}> overcharging!</span>
              </BigTitle>
            </TitleWithBackground>
            <div className={styles.priceContainer}>
              <Box
                bg="rgba(14, 43, 61, 0.9)"
                w={250}
                p={10}
                color="white"
                className={styles.priceDetailsContainer}
              >
                <h2 className={styles.priceTitle}>XXX USD</h2>
                <p className={styles.priceSubTitle}>X Quantity</p>
                <h3 className={styles.priceDescription}>
                  Price of the product
                </h3>
              </Box>
              <Icon name="add" color="primary.500" size="24px" />
              <Box
                bg="rgba(14, 43, 61, 0.9)"
                w={250}
                p={10}
                color="white"
                className={styles.priceDetailsContainer}
              >
                <h2 className={styles.priceTitle}>250 TK</h2>
                <p className={styles.priceSubTitle}>PER KG</p>
                <h3 className={styles.priceDescription}>Shipping Costs</h3>
              </Box>
              <Icon name="add" color="primary.500" size="24px" />
              <Box
                bg="rgba(14, 43, 61, 0.9)"
                w={250}
                p={10}
                color="white"
                className={styles.priceDetailsContainer}
              >
                <h2 className={styles.priceTitle}>5 TK</h2>
                <p className={styles.priceSubTitle}>PER USD</p>
                <h3 className={styles.priceDescription}>Traveler's Charge</h3>
              </Box>
              <Icon name="add" color="primary.500" size="24px" />
              <Box
                bg="rgba(14, 43, 61, 0.9)"
                w={250}
                p={10}
                color="white"
                className={styles.priceDetailsContainer}
              >
                <h2 className={styles.priceTitle}>100 TK</h2>
                <p className={styles.priceSubTitle}>IN DHAKA</p>
                <h3 className={styles.priceDescription}>Home Delivery</h3>
              </Box>
            </div>
          </ContentWrapper>
        </Container>
      </>
    </>
  );
};
