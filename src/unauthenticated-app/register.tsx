import { Button, Form, Input } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { useAuth } from 'context/auth-context';
import { FC, ReactElement } from 'react';

interface IProps {}
export const RegisterScreen: FC<IProps> = (): ReactElement => {
  const { register } = useAuth();
  const handleSubmit = (values: { username: string; password: string }) => {
    register(values);
  };
  return (
    <>
      <Content style={{ padding: '20px 50px 0 50px' }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" id={'username'} />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" id={'password'} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </>
  );
};
