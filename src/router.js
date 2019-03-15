import React, { Component } from 'react';
import { Switch } from 'react-router';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import UnauthenticatedRoute from './templates/UnauthenticatedRoute';
import AuthenticatedRoute from './templates/AuthenticatedRoute';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

class router extends Component {
  render() {
    return (
      <Switch>
        <AuthenticatedRoute exact path="/" component={Home} />
        <UnauthenticatedRoute exact component={NotFound} />
      </Switch>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};
const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(router)
);
