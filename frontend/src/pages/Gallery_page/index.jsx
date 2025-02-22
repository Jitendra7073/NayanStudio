import React, { useEffect } from "react";
import SampleView from "./Gallery_Format"; // Component to display each post
// import css
import "./Gallery_page.css";
// load all images using function requireContext
const importAll = (requireContext) => requireContext.keys().map(requireContext);

// Dynamically load images for each slider
const jaishalmerImages = importAll(
  require.context(
    "../../assets/images/Gallery_page/Jaishalmer",
    false,
    /\.(png|jpe?g|JPG|webp|svg)$/ // Match image file extensions
  )
);
const kashmirImages = importAll(
  require.context(
    "../../assets/images/Gallery_page/kashmir",
    false,
    /\.(png|jpe?g|JPG|webp|svg)$/
  )
);
const goaImages = importAll(
  require.context(
    "../../assets/images/Gallery_page/Goa",
    false,
    /\.(png|jpe?g|JPG|webp|svg)$/
  )
);
const stephanieSoumyadeepImages = importAll(
  require.context(
    "../../assets/images/Gallery_page/Stephanie_Soumyadeep",
    false,
    /\.(png|jpe?g|JPG|webp|svg)$/
  )
);
const yeshaBhargeshImages = importAll(
  require.context(
    "../../assets/images/Gallery_page/Yesha_Bhargesh",
    false,
    /\.(png|jpe?g|JPG|webp|svg)$/
  )
);

const Index = () => {
  // change top title
  useEffect(() => {
    document.title = "Gallery | Nayan Studio";
  }, []);
  // Post data with unique image arrays for each slider
  const postData = [
    {
      heading: "Bhagyesh & Khevana  [ Jaishalmer ]",
      date: "October 17, 2024",
      content:
        "Jehana and Kanishk, planned a beautiful New Delhi wedding that honored their roots across Mumbai, Singapore, and Dubai. The celebrations kicked off with a sundowner at the bride’s uncle's home, followed by a bohemian garden-themed sangeet, and culminated in a Mughal-inspired wedding at Amaara Farms, complete with a mandap under a majestic tree. They focused on sustainability, turning their wedding flowers into incense sticks and reworking traditional customs. Every detail, from music to décor, reflected timeless elegance and thoughtful planning.",
      sliderImages: jaishalmerImages, // Assign dynamically loaded images
      venue:
        "ShaadiKnot & Sanya Mehndiratta Styled By: Bridelan MUA: Jasmeet Kapany Outfits: Tarun Tahiliani, Sabyasachi Decor: Aroosi Events",
    },
    {
      heading: "Lancy & Pavan [ Kashmir ]",
      date: "November 5, 2024",
      content:
        "Anshika and Arjun celebrated their wedding in a traditional style, blending the customs of both their families. The day was filled with joy, colors, and laughter, marking the beginning of their lifelong journey together. They exchanged vows at the magnificent venue, followed by a grand reception. Every moment captured was a reflection of their love and commitment to one another.",
      sliderImages: kashmirImages, // Assign dynamically loaded images
      venue:
        "Venue: The Royal Palace, Styled By: The Wedding Company, MUA: Anita Sharma, Outfits: Abu Jani Sandeep Khosla, Decor: Vivid Weddings",
    },
    {
      heading: "Stephanie & Soumyadeep [ Goa ]",
      date: "September 22, 2024",
      content:
        "Priya and Manish’s wedding was a blend of modern and traditional elements. The ceremony took place at a luxurious resort, followed by a beautiful reception where family and friends gathered to celebrate. Their wedding was all about elegance, with beautiful floral decorations and an enchanting atmosphere that made the day unforgettable.",
      sliderImages: goaImages,
      venue:
        "Venue: The Grand Resort, Styled By: Wedding Dreams, MUA: Leela Kapoor, Outfits: Falguni Shane Peacock, Decor: Elegant Creations",
    },
    {
      heading: "Yash & Shraddha [ Stephanie & Soumyadeep ]",
      date: "December 12, 2024",
      content:
        "Ravi and Sonali tied the knot in a breathtaking wedding ceremony that combined traditional elements with modern aesthetics. The event took place at a stunning outdoor venue with panoramic views of the mountains. From the mehendi ceremony to the grand reception, every detail was designed to celebrate their love and the union of their families.",
      sliderImages: stephanieSoumyadeepImages,
      venue:
        "Venue: Mountain View Resort, Styled By: Elite Weddings, MUA: Ayesha Kapoor, Outfits: Manish Malhotra, Decor: Dream Event Planners",
    },
    {
      heading: "Yesha & Bhargesh",
      date: "January 10, 2025",
      content:
        "Meera and Vijay’s wedding was a magical affair that blended modern luxury with rich cultural traditions. They exchanged vows at a picturesque venue that offered stunning views, with guests enjoying a celebration filled with music, dance, and endless joy. The wedding was filled with heartwarming moments and stunning visual aesthetics, showcasing their journey together.",
      sliderImages: yeshaBhargeshImages,
      venue:
        "Venue: Serenity Hotel, Styled By: Glam Weddings, MUA: Ritu Sharma, Outfits: Abu Jani Sandeep Khosla, Decor: Chic Creations",
    },
  ];

  return (
    <div className="Gallery_Full_view">
      <div className="inner_view">
        {postData.map((post, index) => (
          <SampleView
            key={index}
            heading={post.heading}
            date={post.date}
            content={post.content}
            sliderImages={post.sliderImages} // Pass appropriate images
            venue={post.venue}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
