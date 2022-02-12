import react from "react";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import MyServices from "./components/MyServices";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";

export default function App() {
    const [navOn, setNavOn] = react.useState(false)

    function handleClick() {
        setNavOn(prev => !prev)
    }
    return (
        <div>
            <Header click={handleClick} nav={navOn}/>
            <Introduction />
            <MyServices />
            <AboutMe />
            <MyWork />
            <Footer />
        </div>
    )
}