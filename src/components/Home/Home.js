import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <section className="hero is-info is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            <i className="fas fa-cat" /> Boiler Plate
                        </h1>
                        <h2 className="subtitle">
                            Create React App w/ React Router, Redux & Thunk, Webpack 4, Bulma CSS Framework, Font
                            Awesome 4
                        </h2>
                        <p>Extra Credit Serverless and Markdown + Tutorial</p>
                    </div>
                </div>
            </section>
        )
    }
}
