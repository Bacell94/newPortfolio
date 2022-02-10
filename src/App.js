import Header from "./components/Header";
import Introduction from "./components/Introduction";
import MyServices from "./components/MyServices";
import AboutMe from "./components/AboutMe";
import MyWork from "./components/MyWork";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div>
            <Header />
            <Introduction />
            <MyServices />
            <AboutMe />
            <MyWork />
            <Footer />
        </div>
    )
}