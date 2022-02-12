import logo from "../images/devjane.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
export default function Header(props) {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <button className="nav-toggle nav-toggle__darkmode" aria-label="darkmode toggle" onClick={props.clickDark}>
              {!props.dark?
                <FontAwesomeIcon icon={faMoon} /> :
                <FontAwesomeIcon className="clr-accent" icon={faSun} />  }
            </button>
            <button className="nav-toggle nav-toggle__hamburger" aria-label="nav toggle" onClick={props.clickNav}>
                <span className={`hamburger ${!props.nav && props.dark && "bg-light"} ${props.nav && "hamburger-on"}`} ></span>
            </button>
            <nav className={`nav ${props.nav && "nav-on"}`}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a className="nav__link" href="#home" onClick={props.clickNav}>Home</a></li>
                    <li className="nav__item">
                        <a className="nav__link" href="#services" onClick={props.clickNav}>My services</a></li>
                    <li className="nav__item">
                        <a className="nav__link" href="#about" onClick={props.clickNav}>About me</a></li>
                    <li className="nav__item">
                        <a className="nav__link" href="#work" onClick={props.clickNav}>My work</a></li>
                </ul>
            </nav>
        </header>
    )
}