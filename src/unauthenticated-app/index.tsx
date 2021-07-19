import { useState } from 'react';
import { RegisterScreen } from './register';
import { LoginScreen } from './login';
import { Button, Card, Divider, Typography } from 'antd';
import styled from '@emotion/styled';
import logo from 'assets/logo.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const ShadowCard = styled(Card)`
  width: 36rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`;
export const LongButton = styled(Button)`
  width: 100%;
`;
const BlueButton = styled.div`
  color: #1a73e8;
  cursor: pointer;
`;
export const UnAuthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  return (
    <Container>
      <Header></Header>
      <ShadowCard>
        {isRegister ? <Title>注册</Title> : <Title>登录</Title>}
        {isRegister ? (
          <RegisterScreen onSetError={setError} />
        ) : (
          <LoginScreen onSetError={setError} />
        )}
        {error ? (
          <Typography.Text type="danger">{error.message}</Typography.Text>
        ) : (
          ''
        )}
        <Divider></Divider>
        <BlueButton onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? '已有账号？直接登录' : '注册新账号'}
        </BlueButton>
      </ShadowCard>
    </Container>
  );
};
