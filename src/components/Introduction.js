import devJane1 from "../images/dev-jane-01.jpg"
export default function Introduction() {
    return (
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">Hi, I'm <strong>Jane Smith</strong></h1>
            <p className="section__subtitle section__subtitle--intro">Front-end Dev</p>
            <img src={devJane1} alt="" />
        </section>
    )
}