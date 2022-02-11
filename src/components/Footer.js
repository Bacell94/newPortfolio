import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faDribbble, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer>
            <a href="mailto:" class="footer__link">e-mail</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://codepen.io">
                    <FontAwesomeIcon icon={faCodepen} />
                    </a></li>
                <li class="social-list__item">
                    <a class="social-list__link" href="http://dribbble.com">
                    <FontAwesomeIcon icon={faDribbble} />
                    </a></li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a></li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com">
                    <FontAwesomeIcon icon={faGithub} />
                    </a></li>
            </ul>
        </footer>
    )
}