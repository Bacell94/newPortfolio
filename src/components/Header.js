import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

export default function Header(props) {
    return (
        <header>
            <span className="logo">BACELL</span>
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
                        <Link className="nav__link" to="/" onClick={props.clickNav}>Home</Link></li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/#work" onClick={props.clickNav}>My work</Link></li>
                    <li className="nav__item">
                        <Link className="nav__link" to="/#about" onClick={props.clickNav}>About me</Link></li>
                </ul>
            </nav>
        </header>
    )
}