import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { Theme } from "../../style/styled";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  inputType?: 'text' | 'email' | 'password' | 'number';
}

const InputText = React.forwardRef(
  (
    { placeholder, inputType, onChange, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputTextStyle
        placeholder={placeholder}
        ref={ref}
        type={inputType}
        onChange={onChange}
        {...props}
      />
    );
  }
);

const InputTextStyle = styled.input`
  padding: 0.25rem 0.75rem;
  border: 1px solid ${({ theme }) => (theme as Theme).color.border};
  border-radius: ${({ theme }) => (theme as Theme).borderRadius.default};
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => (theme as Theme).color.text};
`;

export default InputText;