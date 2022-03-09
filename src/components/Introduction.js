import dev from "../images/dev.png"
import devLight from "../images/devLight.png"
export default function Introduction(props) {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">Hi, I'm <strong>Bacell Saleh</strong></h1>
            <p className={`section__subtitle section__subtitle--intro ${props.dark && "clr-dark"}`}>Web Developer</p>
            <img className="intro__img" src={props.dark? devLight : dev} alt="" />
        </section>
    )
}
