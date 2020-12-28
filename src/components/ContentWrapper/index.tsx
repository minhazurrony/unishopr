import styled from 'styled-components';
export const ContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0px 1px 31px 0px rgba(0, 0, 0, 0.12);
`;
