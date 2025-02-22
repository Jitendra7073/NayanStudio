import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Include blur effect styles
import StoriesPost from "../../Components/Story_design";
import { Poster1 } from "../../../../assets/images/Stories_page";
import "../pages_comman.css";

const Page1 = () => {
  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  const jaishalmerImages = importAll(
    require.context(
      "../../../../assets/images/All photos/J",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );

  return (
    <div >
      <StoriesPost
        BackgroundPoster={Poster1}
        ImageHeading="Bhagyesh & Khevana"
        ImageSubHeading="[ Jaishalmer ]"
        Header="Bhagyesh & Khevana"
        StoryDate="October 17, 2024"
      />
      <div className="Page_details">
        <div className="Page_details_p">
          <p>
            <span>Wedding Planning & Decor:</span> Weddings Unplugged{" "}
          </p>
          <p>
            <span>Outfits:</span> Faraz Manan, Zuhair Murad, Rajesh Pratap Singh{" "}
          </p>
          <p>
            <span>Styling:</span> Clad by Tanya Vohra{" "}
          </p>
          <p>
            <span>Artwork:</span> Gray Cell Designs{" "}
          </p>
          <p>
            <span>Location:</span> Taj Falaknuma Palace, Hyderabad
          </p>
        </div>
      </div>

      <div className="Images_gallery_outer">
        <div className="Images_gallery">
          {jaishalmerImages.map((photos, index)  => (
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

export default Page1;
