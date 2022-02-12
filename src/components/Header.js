import logo from "../images/devjane.png"
export default function Header(props) {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <button className="nav-toggle" aria-label="nav toggle" onClick={props.click}>
                <span className={`hamburger ${!props.nav && props.dark && "bg-light"} ${props.nav && "hamburger-on"}`} ></span>
            </button>
            <nav className={`nav ${props.nav && "nav-on"}`}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link" href="#home" onClick={props.click}>Home</a></li>
                    <li className="nav__item">
                        <a className="nav__link" href="#services" onClick={props.click}>My services</a></li>
                    <li className="nav__item">
                        <a className="nav__link" href="#about" onClick={props.click}>About me</a></li>
                    <li className="nav__item">
                        <a className="nav__link" href="#work" onClick={props.click}>My work</a></li>
                </ul>
            </nav>
        </header>
    )
}