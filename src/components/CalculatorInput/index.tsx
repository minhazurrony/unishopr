import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface CalculatorInputPorps {
  htmlFor: string;
  inputType: string;
  mainLabel: string;
  additionalLabel?: string;
  placeholder?: string;
  inputLeftContent?: string | ReactNode;
  inputRightContent: string | ReactNode;
}

const CalculatorInput = ({
  htmlFor,
  inputType,
  mainLabel,
  additionalLabel,
  placeholder,
  inputLeftContent,
  inputRightContent,
}: CalculatorInputPorps) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        style={{ fontWeight: 600, fontSize: 24, color: '#D1545B' }}
      >
        {mainLabel}{' '}
        {additionalLabel && (
          <span
            style={{
              textTransform: 'uppercase',
              fontWeight: 300,
              fontSize: 16,
              color: 'rgba(1, 25, 54, 0.5)',
            }}
          >
            store
          </span>
        )}
      </label>
      <InputGroup
        style={{
          margin: '0 0 30px 0',
          width: htmlFor === 'quantity' ? '25%' : '100%',
        }}
      >
        {inputLeftContent && (
          <InputLeftElement
            children={
              <span style={{ textTransform: 'uppercase' }}>
                {inputLeftContent}
              </span>
            }
          />
        )}
        <Input
          type={inputType}
          placeholder={placeholder}
          variant="flushed"
          style={{
            paddingRight: htmlFor === 'quantity' ? '2.5rem' : '',
            textAlign: htmlFor === 'quantity' ? 'center' : 'left',
          }}
        />
        {inputRightContent && (
          <InputRightElement
            children={
              <span style={{ textTransform: 'uppercase' }}>
                {inputRightContent}
              </span>
            }
          />
        )}
      </InputGroup>
    </>
  );
};

export default CalculatorInput;
