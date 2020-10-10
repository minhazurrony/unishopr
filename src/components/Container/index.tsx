import { Flex } from '@chakra-ui/core';

export const Container = ({ children }) => {
  return (
    <Flex
      w="85%"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem 1.2rem"
      m="0 auto"
    >
      {children}
    </Flex>
  );
};
