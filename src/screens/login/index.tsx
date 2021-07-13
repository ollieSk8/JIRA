import { FC, FormEvent, ReactElement } from 'react';

interface IProps {}
interface Iparams {
  username: string;
  password: string;
}
const apiUrl = process.env.REACT_APP_API_URL;
export const LoginScreen: FC<IProps> = (): ReactElement => {
  const loginMethod = (params: Iparams) => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    }).then(async (res) => {
      if (res.ok) {
        let data = await res.json();
        console.log(data);
      }
    });
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    loginMethod({ username, password });
  };
  return (
    <>
      <div style={{ width: '800px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor={'username'}>用户名</label>
            <input type="text" id={'username'} />
          </div>
          <div>
            <label htmlFor={'password'}>密码</label>
            <input type="password" id={'password'} />
          </div>
          <button type={'submit'}>登录</button>
        </form>
      </div>
    </>
  );
};
