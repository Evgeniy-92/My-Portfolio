import React from "react";
import './App.scss';
import Header from "./header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./works/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Hire from "./hire/Hire";


function App() {
    return (
        <div className="App">
            <Header/>
            <div className="app-wrapper">
                <About/>
                <Skills/>
                <Hire/>
                <Projects/>
                <Contacts/>
                <Footer/>
            </div>
        </div>

    );
}

export default App;