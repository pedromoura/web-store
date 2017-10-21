import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <p> Home Route </p>
                <MainContent />
                <Footer />
            </div>
        )
    }
}

export default App;
