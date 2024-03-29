import React, { Component } from 'react'

import Navbar from './components/Navbar/'
import Threads from './components/Threads'

import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Threads />
            </div>
        )
    }
}

export default App
