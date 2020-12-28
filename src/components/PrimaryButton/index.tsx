import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PrimaryButtonProps {
  buttonText: string;
  showIcon?: boolean;
  icon?: ReactNode;
  variantColor?: string;
}

const CustomButton = styled(Button)`
  border-radius: 28px !important;
  padding-left: 30px;
  padding-right: 30px;
  -webkit-box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.31);
  :focus {
    box-shadow: none !important;
  }
`;

export const PrimaryButton = ({
  buttonText,
  showIcon,
  icon,
  variantColor,
}: PrimaryButtonProps) => {
  return (
    <CustomButton
      leftIcon={showIcon ? icon : null}
      variant="solid"
      colorScheme={variantColor ? variantColor : 'primary'}
    >
      {buttonText}
    </CustomButton>
  );
};
