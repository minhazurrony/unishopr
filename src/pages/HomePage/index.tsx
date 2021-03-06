import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Grid,
  IconButton,
  Image,
  Input,
  SimpleGrid,
} from '@chakra-ui/react';
import { BiShareAlt } from 'react-icons/bi';
import CalculatorInput from '../../components/CalculatorInput';
import { ExternalControlledCarousel } from '../../components/Carousel';
import { Container } from '../../components/Container';
import { ContentWrapper } from '../../components/ContentWrapper';
import { FAQ } from '../../components/FAQ';
import { NavBar } from '../../components/NavBar';
import { PrimaryButton } from '../../components/PrimaryButton';
import { ProductCarousel } from '../../components/ProductCarousel';
import { SearchBar } from '../../components/SearchBar';
import { TestimonialCarousel } from '../../components/TestimonialCarousel';
import TitleContainer from '../../components/TitleContainer';
import { TravellerSteps } from '../../components/TravellerSteps';
import { COLORS } from '../../styles/colors';
import {
  CollectionCard,
  CollectionContentContainer,
  CollectionTitle,
  FeatureSection,
  HeroSection,
  LogoContainer,
  ReferContainer,
  ReferDescription,
  ReferFormContainer,
  ReferProcessContainer,
  ReferProcessText,
  SearchContainer,
  StoreContainer,
  Tagline,
  TitleWithBackground,
} from './styles/HomeStyled';
import styles from './styles/homeStyles.module.css';

export const HomePage = () => {
  return (
    <>
      <HeroSection>
        <NavBar isLoggedIn={true} />
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
              smallTitleColor={COLORS.secondaryTitleDark}
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

        {/* testimonial section starts from here */}
        <section
          style={{ background: COLORS.secondary, padding: 50, marginTop: 100 }}
        >
          <TitleContainer
            smallTitle="What makes us different?"
            smallTitleColor={COLORS.white}
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

        {/* what people are buying section starts from here */}
        <section style={{ marginTop: 100 }}>
          <Container>
            <ContentWrapper>
              <TitleContainer
                smallTitle="Aren't you courious?"
                smallTitleColor={COLORS.white}
                mainTitleLeft="What peope"
                mainTitleRight="are buying?"
                mainTitleLeftColor={COLORS.tertiary}
                mainTitleRightColor={COLORS.white}
                backgroundColor={COLORS.primary}
              />

              <div style={{ padding: 20, background: `${COLORS.white}` }}>
                <ProductCarousel
                  data={[
                    {
                      id: 0,
                      title: 'JBL T460BT Extra Bass Wireless ...',
                      imageUrl: 'assets/jbl-headphone.png',
                      price: '16025',
                    },
                    {
                      id: 1,
                      title: 'Apple Watch Series 3 (GPS + Cellular ...',
                      imageUrl: 'assets/apple-watch.png',
                      price: '16025',
                    },
                    {
                      id: 2,
                      title: 'JBL T460BT Extra Bass Wireless ...',
                      imageUrl: 'assets/jbl-headphone.png',
                      price: '16025',
                    },
                    {
                      id: 3,
                      title: 'Apple Watch Series 3 (GPS + Cellular ...',
                      imageUrl: 'assets/apple-watch.png',
                      price: '16025',
                    },
                    {
                      id: 4,
                      title: 'Apple Watch Series 3 (GPS + Cellular ...',
                      imageUrl: 'assets/apple-watch.png',
                      price: '16025',
                    },
                  ]}
                />
              </div>
            </ContentWrapper>
          </Container>
        </section>

        {/* want to make money with unishopr? starts from here */}

        <section style={{ marginTop: 100 }}>
          <Container>
            <ContentWrapper>
              <TitleContainer
                smallTitle="Want to make money with Unishopr"
                smallTitleColor={COLORS.white}
                mainTitleLeft="Follow these"
                mainTitleRight="simple steps!"
                mainTitleLeftColor={COLORS.white}
                mainTitleRightColor={COLORS.tertiary}
                backgroundColor={COLORS.primary}
              />
              <TravellerSteps
                data={[
                  {
                    step: '1',
                    imageUrl: 'assets/signup-image.png',
                    title: 'Sign up',
                    description: 'Open account and register with us.',
                  },

                  {
                    step: '2',
                    imageUrl: 'assets/airplane.png',
                    title: 'Travel',
                    description:
                      'Inform us when you are travelling to India, Thailand or Malaysia.',
                  },

                  {
                    step: '3',
                    imageUrl: 'assets/bag.png',
                    title: 'Bring items',
                    description: 'Bring items using your unused baggage space.',
                  },

                  {
                    step: '4',
                    imageUrl: 'assets/wallet.png',
                    title: 'Get paid',
                    description: 'Get paid on thenumber of items you bring.',
                  },
                ]}
              />
            </ContentWrapper>
          </Container>
        </section>

        {/* products collection overview section starts here */}
        <section style={{ marginTop: 100, padding: '0.5rem 1.2rem' }}>
          <div style={{ width: '85%', margin: 'auto' }}>
            <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
              <CollectionCard>
                <CollectionContentContainer>
                  <div style={{ width: '60%' }}>
                    <CollectionTitle>
                      JBL T460BT Extra Bass Wireless Headphone
                    </CollectionTitle>
                    <p style={{ fontSize: 18 }}>
                      Sale upto{' '}
                      <span style={{ color: `${COLORS.primary}` }}>
                        30% off
                      </span>{' '}
                      on all products in the New Collection
                    </p>
                  </div>
                  <Button colorScheme="primary" variant="link">
                    View Collection
                  </Button>
                </CollectionContentContainer>
                <Image
                  src="assets/jbl-headphone.png"
                  alt="jbl headphone"
                  width="35%"
                />
              </CollectionCard>
              <CollectionCard>
                <CollectionContentContainer>
                  <div style={{ width: '60%' }}>
                    <CollectionTitle>
                      JBL T460BT Extra Bass Wireless Headphone
                    </CollectionTitle>
                    <p style={{ fontSize: 18 }}>
                      Sale upto{' '}
                      <span style={{ color: `${COLORS.primary}` }}>
                        30% off
                      </span>{' '}
                      on all products in the New Collection
                    </p>
                  </div>
                  <Button colorScheme="primary" variant="link">
                    View Collection
                  </Button>
                </CollectionContentContainer>
                <Image
                  src="assets/jbl-headphone.png"
                  alt="jbl headphone"
                  width="35%"
                />
              </CollectionCard>
              <CollectionCard>
                <CollectionContentContainer>
                  <div style={{ width: '60%' }}>
                    <CollectionTitle>
                      JBL T460BT Extra Bass Wireless Headphone
                    </CollectionTitle>
                    <p style={{ fontSize: 18 }}>
                      Sale upto{' '}
                      <span style={{ color: `${COLORS.primary}` }}>
                        30% off
                      </span>{' '}
                      on all products in the New Collection
                    </p>
                  </div>
                  <Button colorScheme="primary" variant="link">
                    View Collection
                  </Button>
                </CollectionContentContainer>
                <Image
                  src="assets/jbl-headphone.png"
                  alt="jbl headphone"
                  width="35%"
                />
              </CollectionCard>
              <CollectionCard>
                <CollectionContentContainer>
                  <div style={{ width: '60%' }}>
                    <CollectionTitle>
                      JBL T460BT Extra Bass Wireless Headphone
                    </CollectionTitle>
                    <p style={{ fontSize: 18 }}>
                      Sale upto{' '}
                      <span style={{ color: `${COLORS.primary}` }}>
                        30% off
                      </span>{' '}
                      on all products in the New Collection
                    </p>
                  </div>
                  <Button colorScheme="primary" variant="link">
                    View Collection
                  </Button>
                </CollectionContentContainer>
                <Image
                  src="assets/jbl-headphone.png"
                  alt="jbl headphone"
                  width="35%"
                />
              </CollectionCard>
            </SimpleGrid>
          </div>
        </section>

        {/* favorite stores section starts here */}
        <section style={{ marginTop: 100 }}>
          <Container>
            <ContentWrapper>
              <TitleContainer
                smallTitle="Want to order from your favorite Stores?"
                smallTitleColor={COLORS.secondaryTitleDark}
                mainTitleLeft="Go to any website, find your product"
                mainTitleRight="and paste the link into UniShopr!"
                mainTitleLeftColor={COLORS.primary}
                mainTitleRightColor={COLORS.secondary}
                backgroundColor={COLORS.white}
              />

              <StoreContainer>
                <Image src="assets/shop-logo.png" alt="favorite shop logos" />
              </StoreContainer>
            </ContentWrapper>
          </Container>
        </section>

        {/* refer section starts here */}

        <section style={{ marginTop: 100 }}>
          <Container>
            <ContentWrapper>
              <TitleContainer
                smallTitle="Refer and Earn"
                smallTitleColor={COLORS.white}
                mainTitleLeft="Refer to your friend"
                mainTitleRight="and get ৳200 discount each"
                mainTitleLeftColor={COLORS.white}
                mainTitleRightColor={COLORS.tertiary}
                backgroundColor={COLORS.secondary}
              />
              <ReferContainer>
                <Image
                  src="assets/refer.png"
                  alt="refer image"
                  style={{ margin: 'auto', width: '80px' }}
                />
                <ReferDescription>
                  Share you referral link and invite your friends via SMS /
                  E-mail / Facebook. <br /> You can earn upto BDT 200
                </ReferDescription>

                <ReferProcessContainer>
                  <div>
                    <Image
                      src="assets/invite.png"
                      alt="invitation image"
                      style={{ margin: 'auto' }}
                    />
                    <ReferProcessText>
                      Invite your friends <br />
                      to sign up
                    </ReferProcessText>
                  </div>
                  <div>
                    <Image
                      src="assets/shopping.png"
                      alt="shopping image"
                      style={{ margin: 'auto' }}
                    />
                    <ReferProcessText>
                      Your friend purchase a <br />
                      product from us
                    </ReferProcessText>
                  </div>
                  <div>
                    <Image
                      src="assets/gift-box.png"
                      alt="gift box image"
                      style={{ margin: 'auto' }}
                    />
                    <ReferProcessText>
                      Both you and your friends <br />
                      get rewarded
                    </ReferProcessText>
                  </div>
                </ReferProcessContainer>

                <ReferFormContainer>
                  <Button
                    colorScheme="primary"
                    variant="link"
                    style={{ marginBottom: 15 }}
                  >
                    Copy Link
                  </Button>
                  <Input
                    variant="filled"
                    placeholder="Filled"
                    style={{ marginBottom: 25 }}
                  />
                  <PrimaryButton
                    buttonText="Refer Your Friends"
                    showIcon={true}
                    icon={<BiShareAlt />}
                  />
                </ReferFormContainer>
              </ReferContainer>
            </ContentWrapper>
          </Container>
        </section>

        {/* FAQ section starts here */}
        <section style={{ marginTop: 100 }}>
          <Container>
            <ContentWrapper>
              <TitleContainer
                smallTitle="FAQ"
                smallTitleColor={COLORS.white}
                mainTitleLeft="Have"
                mainTitleRight="questions?"
                mainTitleLeftColor={COLORS.tertiary}
                mainTitleRightColor={COLORS.white}
                backgroundColor={COLORS.primary}
              />
              <FAQ
                data={[
                  {
                    id: '1',
                    question: 'What is Unishopr?',
                    answer:
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                  },
                  {
                    id: '2',
                    question: 'What is Unishopr?',
                    answer:
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
                  },
                ]}
              />
            </ContentWrapper>
          </Container>
        </section>
      </>
    </>
  );
};
