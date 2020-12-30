import { Image, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { SubscriptionBar } from '../SubscriptionBar';

export const Footer = () => {
  return (
    <footer style={{ marginTop: 100 }}>
      <Container>
        <SubscriptionBarContainer>
          <SubscriptionBar placeholder="Enter email to receive exciting offers" />
        </SubscriptionBarContainer>

        <FooterContentContainer>
          <div>
            <Image src="assets/logo-footer.png" alt="footer logo" />
          </div>
          <LinkContainer>
            <LinkTitle>Support</LinkTitle>
            <Link>FAQ</Link>
            <Link>How to place order</Link>
            <Link>Return & Refund</Link>
            <Link>Warranty</Link>
            <Link>Cancellation policy</Link>
          </LinkContainer>

          <LinkContainer>
            <LinkTitle>Quick Links</LinkTitle>
            <Link>About UniShopr</Link>
            <Link>Become a traveler</Link>
            <Link>Terms of service</Link>
            <Link>Privacy policy</Link>
            <Link>Career</Link>
          </LinkContainer>

          <LinkContainer>
            <LinkTitle>Contact</LinkTitle>
            <p>
              <ContactLable>Hotline - </ContactLable>01700000000
            </p>
            <p>
              <ContactLable>Email - </ContactLable>
              <Link>support@unishopr.com</Link>
            </p>
            <p>
              <ContactLable>Address - </ContactLable>Lorem ipsum dolor sit,{' '}
              <br />
              Dhaka, Bangladesh.
            </p>
          </LinkContainer>
        </FooterContentContainer>
        <Image
          src="assets/ssl-commerz.png"
          alt="ssl commerz logo"
          style={{ width: '80%', margin: 'auto' }}
        />
      </Container>
      <CopyrightContainer>
        <CopyrightText>
          &copy; {new Date().getFullYear()} UniShopr. All rights reserved
        </CopyrightText>

        <FooterLink href="https://web.facebook.com/" isExternal={true}>
          <FaFacebook color={COLORS.white} />
        </FooterLink>
        <FooterLink href="https://twitter.com/" isExternal={true}>
          <FaTwitter color={COLORS.white} />
        </FooterLink>
        <FooterLink href="https://www.instagram.com/" isExternal={true}>
          <FaInstagram color={COLORS.white} />
        </FooterLink>
      </CopyrightContainer>
    </footer>
  );
};

const Container = styled.div`
  padding: 50px 20px;
  background: ${COLORS.footerColor};
`;

const SubscriptionBarContainer = styled.div`
  width: 35%;
  margin: auto;
`;

const FooterContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 80px 0;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LinkTitle = styled.h4`
  margin-bottom: 30px;
  font-weight: 600;
  font-size: 18px;
`;

const ContactLable = styled.span`
  font-weight: 500;
`;

const CopyrightContainer = styled.div`
  padding: 15px;
  background: ${COLORS.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyrightText = styled.p`
  color: ${COLORS.white};
`;

const FooterLink = styled(Link)`
  margin-left: 10px;
`;
