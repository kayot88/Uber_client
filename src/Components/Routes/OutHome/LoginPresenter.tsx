import React from 'react';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<any>{} 

const LoginPresenter: React.FC<IProps> = () => {
  return <div>Login</div>;
};

export default LoginPresenter;