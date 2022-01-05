import React from "react";
import './App.scss';
import Header from "./header/Header";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./works/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";
import Hire from "./hire/Hire";
import Modal from "./common/components/modal/modal";
import {useSelector} from "react-redux";


function App() {
    const openModal = useSelector(state => state.app.openModal)
    const typeModal = useSelector(state => state.app.typeModal)
    return (
        <div className="App">
            <Header/>
            <div className="app-wrapper">
                <About/>
                <Skills/>
                <Hire/>
                <Projects/>
                {openModal && <Modal typeModal={typeModal}/>}
                <Contacts/>
                <Footer/>
            </div>
        </div>

    );
}

export default App;
