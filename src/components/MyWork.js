import SafeHouse from "../images/SafeHouse.png";
import project2 from "../images/portfolio-02.jpg";
import project3 from "../images/portfolio-03.jpg";
import project4 from "../images/portfolio-04.jpg";

export default function MyWork(props) {
    return (
        <section className={`my-work ${props.dark && "bg-dark2"}`} id="work">
            <h2 className="section__title section__title--work">My work</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                <a href="https://homesafe.netlify.app/" className="portfolio__item">
                    <img src={SafeHouse} alt="" className="portfolio__img"/>
                </a>
                
                <a href="" className="portfolio__item">
                    <img src={project2} alt="" className="portfolio__img"/>
                </a>
                
                <a href="" className="portfolio__item">
                    <img src={project3} alt="" className="portfolio__img"/>
                </a>
                
                <a href="" className="portfolio__item">
                    <img src={project4} alt="" className="portfolio__img"/>
                </a>
            </div>
        </section>
    )
}