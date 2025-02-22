import React, { useEffect } from "react";
import "./About_page.css";
import AboutImage from "../../assets/images/About_page/011.jpg";

const About = () => {
  // change top title
  useEffect(() => {
    document.title = "About | Nayan Studio";
  }, []);
  return (
    <div className="About_view">
      <div className="center_About_view">
        <div className="About_container">
          <div className="About_content">
            <div className="About_text_container">
              <div className="About_inner_content">
                <h1 className="About_heading">nayan studio.</h1>
                <p className="About_subtitle">
                  <strong>Moment. Memory. Miracle.</strong>
                </p>
                <p className="About_description">
                  The journey is never about a shot but the unsaid stories
                  within the shooting experience. The quest within is of
                  something which is 'epiphanic'.
                </p>
                <p className="About_description">
                  As an artist whose medium of bringing the art to the world is
                  an intent of compartmentalising the moments, I am all about
                  things which are not seen by the naked eye but a soul which
                  feels what cannot be said through any other medium.
                </p>
                <p className="About_description">
                  The world is material but I am still looking for a metaphor in
                  it. Anything which can allow me the space to create what is
                  not felt is the domain I am looking for.
                </p>
                <p>
                  <strong>People. Photographs. Perfection.</strong>
                </p>
              </div>
            </div>
            <div className="About_image_container">
              <div className="About_image_container_img">
                <img
                  src={AboutImage}
                  alt="Naman Verma"
                  className="About_profile_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
