'use client';

import React from 'react';
import { useLoginStore } from '@/store';
import styled from 'styled-components';
import LoginInput from './LoginInput';

const LoginForm = () => {
  const { loginId, password } = useLoginStore((state) => state.state);
  const { onLoginIdInput, onPasswordInput } = useLoginStore((state) => state.actions);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleLoginId = (text: string) => onLoginIdInput(text);

  const handlePassword = (text: string) => onPasswordInput(text);

  return (
    <StyledForm
      onSubmit={(e) => handleSubmit(e)}
      action=""
    >
      <LoginInput
        type="email"
        name="loginId"
        placeholder="이메일을 입력해주세요."
        value={loginId.getValue()}
        onChange={handleLoginId}
      />
      <LoginInput
        className=""
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        value={password.getValue()}
        onChange={handlePassword}
      />
    </StyledForm>
  );
};

export default LoginForm;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-bottom: 44px;
  gap: 20px;

  @media (min-width: 426px) {
    margin-bottom: 63px;
  }

  @media (min-width: 321px) and (max-width: 425px) {
  }
`;
