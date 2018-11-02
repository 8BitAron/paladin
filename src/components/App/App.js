import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Layout from '../Layout'

import Home from '../Home'
import NotFound from '../NotFound'

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact component={NotFound} />
                </Switch>
            </Layout>
        )
    }
}

export default App
