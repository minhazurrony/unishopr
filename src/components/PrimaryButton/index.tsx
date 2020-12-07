import { Button } from '@chakra-ui/core';
import styled from 'styled-components';

interface PrimaryButtonProps {
  buttonText: string;
  fromSearchBar?: boolean;
  variantColor?: string;
}

const CustomButton = styled(Button)`
  border-radius: 28px !important;
  padding-left: 30px;
  padding-right: 30px;
  -webkit-box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.31);
`;

export const PrimaryButton = ({
  buttonText,
  fromSearchBar,
  variantColor,
}: PrimaryButtonProps) => {
  return (
    <CustomButton
      leftIcon={fromSearchBar ? 'small-add' : null}
      variant="solid"
      variantColor={variantColor ? variantColor : 'primary'}
    >
      {buttonText}
    </CustomButton>
  );
};
