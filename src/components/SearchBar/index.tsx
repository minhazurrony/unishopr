import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import styled from 'styled-components';
import { PrimaryButton } from '../PrimaryButton';

const SearchInput = styled(Input)`
  border-radius: 20px !important;
  padding-left: 35px;
  background-color: white;
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
        <InputLeftElement
          children={<SearchIcon style={{ color: '#ce4a52' }} />}
        />
        <SearchInput placeholder={placeholder} />
      </InputGroup>
      <SearchButtonContainer>
        <PrimaryButton
          buttonText="Request"
          fromSearchBar={true}
          variantColor="yellow"
        ></PrimaryButton>
      </SearchButtonContainer>
    </SearchBarContainer>
  );
};
