import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./style.css";

function SocialMediaLinks() {
  return (
    <div className="social_icons">
      <a href="#">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faPinterest} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
