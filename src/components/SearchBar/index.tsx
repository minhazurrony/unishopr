import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/core';
import styled from 'styled-components';
import { PrimaryButton } from '../PrimaryButton';

const SearchInput = styled(Input)`
  border-radius: 20px !important;
  padding-left: 35px;
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
}

export const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <InputGroup style={{ flex: 1 }}>
        <InputLeftElement children={<Icon name="search" color="#ce4a52" />} />
        <SearchInput placeholder={placeholder} />
      </InputGroup>
      <SearchButtonContainer>
        <PrimaryButton
          buttonText="Request"
          fromSearchBar={true}
        ></PrimaryButton>
      </SearchButtonContainer>
    </SearchBarContainer>
  );
};
