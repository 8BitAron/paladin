import React, { Component } from 'react'
import { connect } from 'react-redux'

import { up, down } from '../../actions/counter'

export class Home extends Component {
  up() {
    const { dispatch } = this.props
    dispatch(up())
  }

  down() {
    const { dispatch } = this.props
    dispatch(down())
  }

  render() {
    const { counter } = this.props

    return (
      <section className="hero is-info is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <h1 className="title">
                  <i className="fas fa-cat" /> Boiler Plate
                </h1>
                <h2 className="subtitle">
                  Create React App w/ React Router, Redux & Thunk, Webpack 4,
                  Bulma CSS Framework, Font Awesome 4
                </h2>
                <p>Extra Credit Serverless GraphQL and Markdown + Tutorial</p>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <p className="title has-text-black">Counter</p>
                    <p className="subtitle has-text-black">
                      Example of a simple redux action, thunk actions, reducer
                      flow.
                    </p>
                    <div>
                      <div className="field is-grouped">
                        <div className="control">
                          <span className="button is-static">{counter}</span>
                        </div>
                        <div className="control">
                          <button
                            className="button is-success"
                            onClick={() => this.up()}
                          >
                            +
                          </button>
                        </div>
                        <div className="control">
                          <button
                            className="button is-danger"
                            onClick={() => this.down()}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <br />
                    <p className="has-text-info has-text-weight-semibold">
                      Want to learn more?
                    </p>
                    <p>
                      <i className="fas fa-list-ul" /> Try Making this simple
                      counter into a TODO list
                    </p>
                  </div>
                </div>
              </div>
              <div className="column" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default connect(state => ({
  counter: state.counter.count
}))(Home)
