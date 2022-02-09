
export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src="" alt="" />
            </div>
            <button className="nav-toggle" aria-label="nav toggle">
                <span className="hamburger"></span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a className="nav__link" href="#home">Home</a></li>
                    <li className="nav__item"><a className="nav__link" href="#services">My services</a></li>
                    <li className="nav__item"><a className="nav__link" href="#"></a>About me</li>
                    <li className="nav__item"><a className="nav__link" href="#">My work</a></li>
                </ul>
            </nav>
        </header>
    )
}