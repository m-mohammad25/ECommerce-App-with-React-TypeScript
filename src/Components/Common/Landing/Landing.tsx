import SocialMediaLinks from "./SocialMediaLinks/SocialMediaLinks";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons/faRightLong";

import "./style.css";

function Landing() {
  return (
    <section id="home">
      <div className="home_page ">
        <div className="home_img">
          <img
            src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg"
            alt="img "
          />
        </div>
        <div className="home_txt ">
          <p className="d-xl-none">FALL COLLECTION</p>
          <h2 className="d-none d-xl-block">
            FALL - WINTER
            <br />
            Collection 2023
          </h2>
          <div className="home_label ">
            <p className="d-none d-xl-block">
              A specialist label creating luxury essentials. Ethically crafted
              <br />
              with an unwavering commitment to exceptional quality.
            </p>
          </div>
          <button>
            <Link to="categories" className="d-flex align-items-center">
              SHOP NOW
              <FontAwesomeIcon
                style={{ fontSize: "22px", marginLeft: "5px" }}
                icon={faRightLong}
              />
            </Link>
          </button>
          <div className="d-none d-md-block">
            <SocialMediaLinks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
