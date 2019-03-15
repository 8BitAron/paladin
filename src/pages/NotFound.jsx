import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <section className="hero is-warning is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">404</h1>
            <h2 className="subtitle">
              these are not the droids you're looking for
            </h2>
          </div>
        </div>
      </section>
    );
  }
}
export default NotFound;
