import { Box, Flex, Grid, Icon, IconButton, Image } from '@chakra-ui/core';
import CalculatorInput from '../../components/CalculatorInput';
import { ExternalControlledCarousel } from '../../components/Carousel';
import { Container } from '../../components/Container';
import { NavBar } from '../../components/NavBar';
import { SearchBar } from '../../components/SearchBar';
import TitleContainer from '../../components/TitleContainer';
import {
  ContentWrapper,
  FeatureSection,
  HeroSection,
  LogoContainer,
  SearchContainer,
  Tagline,
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
            <TitleContainer
              smallTitle="How it all works?"
              mainTitleLeft="Things can't get"
              mainTitleRight="any simpler!"
            />
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
            <TitleContainer
              smallTitle="Price breakdown"
              mainTitleLeft="We are not"
              mainTitleRight="overcharging!"
              mainTitleLeftColor="white"
              mainTitleRightColor="#f5d35d"
              backgroundColor="#d1545b"
              smallTitleColor="white"
            />

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

            {/* price calculator container starts here */}
            <TitleContainer
              smallTitle="Approximate price calculator"
              mainTitleLeft="How much"
              mainTitleRight="can it cost you to get that -"
            />
            <Flex align="center">
              <Flex
                bg="green.50"
                align="center"
                justify="center"
                flex={1}
                height="705px"
                className={styles.priceCategoryContainer}
              >
                <div className={styles.priceCategoryListContainer}>
                  <h3 className={styles.priceCategory}>Electronics</h3>
                  <h3 className={styles.priceCategoryActive}>Fashion</h3>
                  <h3 className={styles.priceCategory}>Jewelry</h3>
                  <h3 className={styles.priceCategory}>Books & Magazines</h3>
                  <h3 className={styles.priceCategory}>Beauty & Health</h3>
                  <h3 className={styles.priceCategory}>Sports & Toys</h3>
                </div>
              </Flex>
              <Flex
                bg="rgba(14, 43, 61, 0.05)"
                flex={1}
                align="center"
                justify="center"
                height="705px"
              >
                <form style={{ width: '75%' }}>
                  <CalculatorInput
                    htmlFor="productPrice"
                    inputType="number"
                    mainLabel="Product Price"
                    additionalLabel="store"
                    placeholder="Enter amount"
                    inputRightContent="usd"
                  />

                  <CalculatorInput
                    htmlFor="productWeight"
                    inputType="number"
                    mainLabel="Product Weight"
                    additionalLabel="single"
                    placeholder="Enter weight"
                    inputRightContent="kg"
                  />
                  <CalculatorInput
                    htmlFor="quantity"
                    inputType="number"
                    mainLabel="Quantity"
                    placeholder="0"
                    inputLeftContent={
                      <IconButton
                        variant="link"
                        variantColor="primary"
                        aria-label="increase quantity"
                        fontSize="14px"
                        icon="minus"
                      />
                    }
                    inputRightContent={
                      <IconButton
                        variant="link"
                        variantColor="primary"
                        aria-label="decrease quantity"
                        fontSize="14px"
                        icon="add"
                      />
                    }
                  />

                  <p className={styles.priceOverview}>
                    Approximate cost for your product is{' '}
                    <span className={styles.priceOverViewAmount}>
                      995.00 TK
                    </span>{' '}
                    <span style={{ fontWeight: 500 }}>+ shipping</span> (If any)
                  </p>
                </form>
              </Flex>
            </Flex>
          </ContentWrapper>

          <FeatureSection style={{ marginTop: 0 }}>
            <Tagline style={{ marginBottom: 40, marginTop: 20 }}>
              Find out the exact cost
            </Tagline>
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
          </FeatureSection>
        </Container>
      </>
    </>
  );
};
