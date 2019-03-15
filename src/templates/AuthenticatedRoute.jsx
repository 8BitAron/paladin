import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

const AuthenticatedRoute = ({ component: C, props: cProps, ...rest }) => {
  return (
    <Layout>
      <Route {...rest} render={props => <C {...props} {...cProps} />} />
    </Layout>
  );
};

export default AuthenticatedRoute;
