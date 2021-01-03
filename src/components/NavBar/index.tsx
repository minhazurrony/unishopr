import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Container } from '../Container';
import { PrimaryButton } from '../PrimaryButton';
import { SearchBar } from '../SearchBar';

interface NavbarProps {
  isLoggedIn: boolean;
}

export const NavBar = ({ isLoggedIn }: NavbarProps) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Flex as="nav" bg="rgba(14, 43, 61, 0.1)">
      <Container>
        <Flex align="center" mr={5}>
          <Image objectFit="cover" src="/assets/logo.svg" alt="Logo" />
        </Flex>

        <Box style={{ flex: 1 }} mr={'2.5rem'}>
          <SearchBar
            placeholder="Paste product link from any US shop"
            isFromNavbar={true}
          />
        </Box>

        <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
          <svg fill="white" width="12px" viewBox="0 0 20 20">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
        >
          {isLoggedIn ? (
            <ButtonGroup spacing={6}>
              <Button variant="link" colorScheme="textColor.900">
                Notification
              </Button>
              <Button variant="link" colorScheme="textColor.900">
                Cart
              </Button>
              <Button variant="link" colorScheme="textColor.900">
                Wishlist
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  colorScheme="textColor.900"
                  rightIcon={<ChevronDownIcon />}
                >
                  Account
                </MenuButton>
                <MenuList>
                  <MenuItem>My Orders</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Sign Out</MenuItem>
                </MenuList>
              </Menu>
              <Button variant="link" colorScheme="textColor.900">
                Fly with UniShopr
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup spacing={6}>
              <Button variant="link" colorScheme="textColor.900">
                Have Questions?
              </Button>
              <Button variant="link" colorScheme="textColor.900">
                Login
              </Button>

              <PrimaryButton buttonText="Sign Up" />

              <Button variant="link" colorScheme="textColor.900">
                Fly with UniShopr
              </Button>
            </ButtonGroup>
          )}
        </Box>
      </Container>
    </Flex>
  );
};
