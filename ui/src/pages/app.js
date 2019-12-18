import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import Project from './project'

const App = props => {
  return (
    <Layout>
      <Router>
        <Project exact path="/project/*" />
        <Project exact path="/profile/*" />
      </Router>
    </Layout>
  )
}
export default App
