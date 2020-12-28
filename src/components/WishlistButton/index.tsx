import { Button } from '@chakra-ui/react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';

interface WishtlistButtonProps {
  addedToWishtlist: boolean;
  handleButtonClick: () => void;
}

export const WishlistButton = ({
  addedToWishtlist,
  handleButtonClick,
}: WishtlistButtonProps) => {
  return (
    <CustomButton
      leftIcon={addedToWishtlist ? <AiFillHeart /> : <AiOutlineHeart />}
      colorScheme="primary"
      variant="outline"
      size="sm"
      onClick={handleButtonClick}
    >
      Wishlist
    </CustomButton>
  );
};

const CustomButton = styled(Button)`
  border: none;
  :focus {
    box-shadow: none !important;
  }
`;
