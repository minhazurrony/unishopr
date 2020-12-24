import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Box, Flex, Grid, IconButton, Image } from '@chakra-ui/react';
import CalculatorInput from '../../components/CalculatorInput';
import { ExternalControlledCarousel } from '../../components/Carousel';
import { Container } from '../../components/Container';
import { NavBar } from '../../components/NavBar';
import { SearchBar } from '../../components/SearchBar';
import { TestimonialCarousel } from '../../components/TestimonialCarousel';
import TitleContainer from '../../components/TitleContainer';
import { COLORS } from '../../styles/colors';
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
                  style={{ margin: '0px 15px' }}
                />
                <Image
                  src="assets/ebay-logo.png"
                  style={{ margin: '0px 15px' }}
                />
                <Image
                  src="assets/hp-logo.png"
                  style={{ margin: '0px 15px' }}
                />
                <Image
                  src="assets/walmart-logo.png"
                  style={{ margin: '0px 15px' }}
                />
                <Image
                  src="assets/world-logo.png"
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
              mainTitleLeftColor={COLORS.white}
              mainTitleRightColor={COLORS.tertiary}
              backgroundColor={COLORS.primary}
              smallTitleColor={COLORS.white}
            />

            <div className={styles.priceContainer}>
              <Box
                bg="rgba(14, 43, 61, 0.9)"
                w={250}
                p={10}
                color={COLORS.white}
                className={styles.priceDetailsContainer}
              >
                <h2 className={styles.priceTitle}>XXX USD</h2>
                <p className={styles.priceSubTitle}>X Quantity</p>
                <h3 className={styles.priceDescription}>
                  Price of the product
                </h3>
              </Box>
              <AddIcon color={COLORS.primary} h={6} w={6} />
              <Box
                bg="rgba(14, 43, 61, 0.9)"
                w={250}
                p={10}
                color={COLORS.white}
                className={styles.priceDetailsContainer}
              >
                <h2 className={styles.priceTitle}>250 TK</h2>
                <p className={styles.priceSubTitle}>PER KG</p>
                <h3 className={styles.priceDescription}>Shipping Costs</h3>
              </Box>
              <AddIcon color={COLORS.primary} h={6} w={6} />
              <Box
                bg="rgba(14, 43, 61, 0.9)"
                w={250}
                p={10}
                color={COLORS.white}
                className={styles.priceDetailsContainer}
              >
                <h2 className={styles.priceTitle}>5 TK</h2>
                <p className={styles.priceSubTitle}>PER USD</p>
                <h3 className={styles.priceDescription}>Traveler's Charge</h3>
              </Box>
              <AddIcon color={COLORS.primary} h={6} w={6} />
              <Box
                bg="rgba(14, 43, 61, 0.9)"
                w={250}
                p={10}
                color={COLORS.white}
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
                        colorScheme="primary"
                        aria-label="increase quantity"
                        fontSize="14px"
                        icon={<MinusIcon />}
                      />
                    }
                    inputRightContent={
                      <IconButton
                        variant="link"
                        colorScheme="primary"
                        aria-label="decrease quantity"
                        fontSize="14px"
                        icon={<AddIcon />}
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
                style={{ margin: '0px 15px' }}
              />
              <Image
                src="assets/ebay-logo.png"
                style={{ margin: '0px 15px' }}
              />
              <Image src="assets/hp-logo.png" style={{ margin: '0px 15px' }} />
              <Image
                src="assets/walmart-logo.png"
                style={{ margin: '0px 15px' }}
              />
              <Image
                src="assets/world-logo.png"
                style={{ margin: '0px 15px' }}
              />
            </LogoContainer>
          </FeatureSection>
        </Container>

        <section
          style={{ background: COLORS.secondary, padding: 50, marginTop: 100 }}
        >
          <TitleContainer
            smallTitle="What makes us different?"
            smallTitleColor={COLORS.secondaryTitle}
            mainTitleLeft="Let's hear"
            mainTitleRight="their story first!"
            mainTitleLeftColor={COLORS.white}
            mainTitleRightColor={COLORS.tertiary}
          />
          <TestimonialCarousel
            data={[
              {
                id: 0,
                imageUrl: 'assets/user.png',
                feedbackContent:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
                userName: 'Jenny Doe',
              },
              {
                id: 1,
                imageUrl: 'assets/user.png',
                feedbackContent:
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                userName: 'Jenny Doe',
              },
              {
                id: 2,
                imageUrl: 'assets/user.png',
                feedbackContent:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                userName: 'Jenny Doe',
              },
              {
                id: 3,
                imageUrl: 'assets/user.png',
                feedbackContent:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
                userName: 'Jenny Doe',
              },
            ]}
          />
        </section>
      </>
    </>
  );
};
