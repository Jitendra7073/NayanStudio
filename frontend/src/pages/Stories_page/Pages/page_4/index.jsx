import React from "react";
import Footer from "../../../../components/footer";
import StoriesPost from "../../Components/Story_design";
import { Poster2 } from "../../../../assets/images/Stories_page";
import "../pages_comman.css";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Include blur effect styles

const Page2 = () => {
  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  const SImages = importAll(
    require.context(
      "../../../../assets/images/All photos/Y",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );
  return (
    <div>
      <StoriesPost
        BackgroundPoster={Poster2}
        ImageHeading="Yash & Shraddha"
        ImageSubHeading="[ Stephanie & Soumyadeep ]"
        Header="Yash & Shraddha"
        StoryDate="December 12, 2024"
      />
      <div className="Page_details">
        <div className="Page_details_p">
          <p>
            <span>Wedding Planning / Decor:</span> Weddings Unplugged{" "}
          </p>
          <p>
            <span>Makeup:</span> Bianca Louzado
          </p>
          <p>
            <span>Outfits:</span> Sabyasachi, Jade by Monika Karishma
          </p>
          <p>
            <span>Entertainment:</span>Bounce band, DJ Nitesh
          </p>
        </div>
      </div>

      <div className="Images_gallery_outer">
        <div className="Images_gallery">
          {SImages.map((photos, index)  => (
            <div className="gallery_image_div" key={index}>
              <img
                src={photos}
                alt="Image not found"
                className="gallery_image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;
