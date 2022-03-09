import react from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import ProjectOne from "./pages/ProjectOne"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    const [navOn, setNavOn] = react.useState(false)
    const [darkMode, setDarkMode] = react.useState(false)

    function toggleNav() {
        setNavOn(prev => !prev)
    }
    function toggleDark() {
        setDarkMode(prev => !prev)
    }
    return (
        <BrowserRouter>
            <div className={darkMode && "bg-dark clr-light" }>
                <Header 
                clickNav={toggleNav}
                clickDark={toggleDark} 
                nav={navOn} 
                dark={darkMode}/>
                <Routes>
                   <Route path="/" element={
                    <div>
                        <Introduction dark={darkMode}/>
                        <MyWork />
                        <AboutMe dark={darkMode}/>
                    </div>
                   } />
                   <Route path="/projectone" element={<ProjectOne />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>    
    )
}