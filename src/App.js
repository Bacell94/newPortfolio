import react from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import MyServices from "./components/MyServices";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";

export default function App() {
    const [navOn, setNavOn] = react.useState(false)
    const [darkMode, setDarkMode] = react.useState(true)

    function handleClick() {
        setNavOn(prev => !prev)
    }
    return (
        <div className={darkMode && "bg-dark clr-light" }>
            <Header click={handleClick} nav={navOn} dark={darkMode}/>
            <Introduction dark={darkMode}/>
            <MyServices />
            <AboutMe dark={darkMode}/>
            <MyWork />
            <Footer />
        </div>
    )
}