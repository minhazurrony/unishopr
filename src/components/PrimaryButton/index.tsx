import { Button, IconButton } from '@chakra-ui/react';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface PrimaryButtonProps {
  buttonText: string;
  showIcon?: boolean;
  icon?: ReactNode;
  variantColor?: string;
  hideLabel?: boolean;
}

const CustomButton = styled(Button)`
  border-radius: 28px !important;
  padding-left: 30px;
  padding-right: 30px;
  box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.31);
  :focus {
    box-shadow: none !important;
  }
`;

const CustomIconButton = styled(IconButton)`
  border-radius: 28px !important;
  padding-left: 30px;
  padding-right: 30px;
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
  hideLabel,
}: PrimaryButtonProps) => {
  if (hideLabel) {
    return <CustomIconButton icon={icon} colorScheme={variantColor} />;
  }
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
