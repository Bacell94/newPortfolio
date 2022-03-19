import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
    return (
        <footer className='footer'>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="https://codepen.io/Bacell/">
                    <FontAwesomeIcon icon={faCodepen} />
                    </a></li>
                <li className="social-list__item">
                    <a className="social-list__link" href="mailto:bacell94@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    </a></li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com/Bacell_">
                    <FontAwesomeIcon icon={faTwitter} />
                    </a></li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/Bacell94">
                    <FontAwesomeIcon icon={faGithub} />
                    </a></li>
                <li>
                    <a className="social-list__link" href='#home' >
                        <FontAwesomeIcon icon={faArrowAltCircleUp}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </footer>
    )
}