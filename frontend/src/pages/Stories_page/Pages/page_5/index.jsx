import React from "react";
import Footer from "../../../../components/footer";
import StoriesPost from "../../Components/Story_design";
import { YeshaBhargesh } from "../../../../assets/images/Stories_page";
import "../pages_comman.css";
import storiesData from "../data.json";
// import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Include blur effect styles

const Page2 = () => {
  const importAll = (requireContext) =>
    requireContext.keys().map(requireContext);
  const SImages = importAll(
    require.context(
      "../../../../assets/images/All photos/YS",
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );

  // Fetch story by its name
  const Story = storiesData.find(
    (story) => story.Header === "Yesha & Bhargesh (Arrange Marriage)"
  );
  return (
    <div>

      {Story && (
        <StoriesPost
          BackgroundPoster={YeshaBhargesh}
          ImageHeading={Story.Header}
          ImageSubHeading="[ Kashmir ]"
          Header={Story.Header}
          StoryDate={Story.StoryDate}
          content={Story.content}
          Redirection={Story.Redirection}
        />
      )}

      <div className="Images_gallery_outer">
        <div className="Images_gallery">
          {SImages.map((photos, index) => (
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
