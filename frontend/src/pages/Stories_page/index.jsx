import React, { useEffect } from "react";
import StoriesPost from "./Components/Story_design";
import {
  Poster1,
  Poster2,
  Poster3,
  Poster5,
} from "../../assets/images/Stories_page";
const Stories = () => {
  useEffect(() => {
    document.title = "Stories | Nayan Studio";
  }, []);
  const StoryData = [
    {
      BackgroundPoster: Poster1,
      Header: "Bhagyesh & Khevana",
      StoryDate: "October 17, 2024",
      content: "poster 1 with dummy details",
      Redirection: "./2024-10-17-Bhagyesh&Khevana",
    },
    {
      BackgroundPoster: Poster2,
      Header: "Lancy & Pavan [ Kashmir ]",
      StoryDate: "November 5, 2024",
      content: "poster 2 with dummy details",
      Redirection: "./2024-11-05-Lancy&Pavan",
    },
    {
      BackgroundPoster: Poster3,
      Header: "Stephanie & Soumyadeep [ Goa ]",
      StoryDate: "September 22, 2024",
      content: "poster 3 with dummy details",
      Redirection: "./2024-09-22-Stephanie&Soumyadeep",
    },
    {
      BackgroundPoster: Poster2,
      Header: "Yash & Shraddha [ Stephanie & Soumyadeep ]",
      StoryDate: "December 12, 2024",
      content: "poster 4 with dummy details",
      Redirection: "./2024-12-12-Yash&Shraddha",
    },
    {
      BackgroundPoster: Poster5,
      Header: "Yesha & Bhargesh",
      StoryDate: "October 13, 2022",
      content: "poster 5 with dummy details",
      Redirection: "./2024-10-13-Yasha&Bhargesh",
    },
  ];
  return (
    <div>
      {StoryData.map((StoryData, index) => {
        return (
          <StoriesPost
            key={index}
            BackgroundPoster={StoryData.BackgroundPoster}
            Header={StoryData.Header}
            StoryDate={StoryData.StoryDate}
            content={StoryData.content}
            readMore={StoryData.Redirection}
            display={true}
          />
        );
      })}
    </div>
  );
};

export default Stories;
