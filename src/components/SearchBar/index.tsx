import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { IoAddCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { COLORS } from '../../../src/styles/colors';
import { PrimaryButton } from '../PrimaryButton';

const SearchInput = styled(Input)`
  border-radius: 20px !important;
  padding-left: 35px;
  background-color: ${COLORS.white};
  border: none;
  :focus {
    border-color: ${COLORS.primary};
    box-shadow: 0 0 0 1px ${COLORS.primary};
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
`;

const SearchButtonContainer = styled.div`
  margin-left: -75px;
  z-index: 1;
`;

interface SearchBarProps {
  placeholder: string;
  isFromNavbar?: boolean;
}

export const SearchBar = ({ placeholder, isFromNavbar }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <InputGroup style={{ flex: 1 }}>
        <InputLeftElement
          children={<SearchIcon style={{ color: COLORS.primary }} />}
        />
        <SearchInput placeholder={placeholder} />
      </InputGroup>
      <SearchButtonContainer
        style={{ marginLeft: isFromNavbar ? '-45px' : '-75px' }}
      >
        <PrimaryButton
          buttonText="Request"
          variantColor="yellow"
          showIcon={true}
          hideLabel={isFromNavbar ? true : false}
          icon={<IoAddCircleOutline />}
        ></PrimaryButton>
      </SearchButtonContainer>
    </SearchBarContainer>
  );
};
