import react from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

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
            <div className={darkMode? "bg-dark clr-light" : undefined}>
                <Header 
                clickNav={toggleNav}
                clickDark={toggleDark} 
                nav={navOn} 
                dark={darkMode}/>
                <Introduction dark={darkMode}/>
                <MyWork dark={darkMode}/>
                <AboutMe dark={darkMode}/>
                <Contact />
                <Footer />
            </div>  
    )
}