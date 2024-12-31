import SocialMediaLinks from "@components/Common/Landing/SocialMediaLinks/SocialMediaLinks";
import "./style.css";
function AboutUs() {
  return (
    <section className="aboutUs ">
      <div className="script d-lg-block ">
        <h2>About Us</h2>
        <p className="p-lg-0 pe-lg-2 text-lg-start">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut nobis
          sequi modi ad quos atque recusandae, soluta laudantium. Nesciunt illo
          atque, nisi exercitationem corrupti ex. Suscipit voluptates reiciendis
          nulla ea.
        </p>
        <SocialMediaLinks />
      </div>
      <div className="d-none d-lg-block imgDiv">
        <img src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg" />
      </div>
    </section>
  );
}

export default AboutUs;
