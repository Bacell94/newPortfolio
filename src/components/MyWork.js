import project1 from "../images/portfolio-01.jpg"
import project2 from "../images/portfolio-02.jpg"
import project3 from "../images/portfolio-03.jpg"
import project4 from "../images/portfolio-04.jpg"

export default function MyWork() {
    return (
        <section class="my-work" id="work">
            <h2 class="section__title">My work</h2>
            <p class="section__subtitle"></p>
            
            <div class="portfolio">
                <a href="#" class="portfolio__item">
                    <img src={project1} alt="" class="portfolio__img"/>
                </a>
                
                <a href="#" class="portfolio__item">
                    <img src={project2} alt="" class="portfolio__img"/>
                </a>
                
                <a href="#" class="portfolio__item">
                    <img src={project3} alt="" class="portfolio__img"/>
                </a>
                
                <a href="#" class="portfolio__item">
                    <img src={project4} alt="" class="portfolio__img"/>
                </a>
            </div>
        </section>
    )
}