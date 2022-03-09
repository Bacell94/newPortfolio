import me from "../images/me.jpg"
export default function AboutMe(props) {
    return (
        <section className="about-me" id="about">
            <h2 className="section__title section__title__about">Who i am</h2>
            {/* <p className={`section__subtitle section__subtitle--about ${props.dark && "clr-dark"}`}></p> */}
            <p>
                i'm a tech geek who fell into a code well, loved it, and eventually decided to make it home,
                i enjoy having the skills to create tools for people that would help them advance their projects and businesses and share their ideas,
                when i'm not creating websites and webapps i'm in the kitchen experimenting with sustenance
                , or thinking about it while i scroll through twitter.
            </p>
            <img className="about-me__img" src={me} alt="" />
        </section>
    )
}