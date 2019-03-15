import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    navActive: false
  };

  toggleNav = e => {
    this.setState({
      navActive: !this.state.navActive
    });
  };

  render() {
    const isActive = this.state.navActive ? 'is-active' : '';

    return (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">
                Boiler Plate
              </Link>
              <div
                onClick={this.toggleNav}
                className={'navbar-burger burger ' + isActive}
                role="button"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </div>
            </div>

            <div className={'navbar-menu navbar-menu ' + isActive}>
              <div className="navbar-start">
                {/* <a className="navbar-item">Home</a>
                <a className="navbar-item">Documentation</a> */}
              </div>

              <div className="navbar-end">
                {/* <a className="navbar-item">login</a> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
