import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <section className="hero is-warning is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            <i className="fas fa-dragon" /> 404 Not Found
                        </h1>
                        <h2 className="subtitle">These are not the droids your looking for!</h2>
                        <p>
                            head back <Link to="/">home</Link>
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
